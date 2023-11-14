<template>
	<view style="display: flex;flex-direction: column;">
		<input  :style="{height:statusBarHeight+'px'}" disabled="true"/>
		<view style="width: 100%;display: flex;flex-direction: row-reverse;">
			<image @click="back()" src="../../../static/tingyin/fanhui.png" mode="widthFix" style="width: 26px;margin-right: 5%;"></image>
		</view>
		<view style="display: flex;flex-direction: row;align-items: center;">
			<text style="font-size: 30px;color: #fff;margin-left: 10px;font-weight: 700;">听音训练</text>
			<image src="/static/tingyin/ermai.png" mode="widthFix" style="width: 30px;margin-left: 10px;"></image>
		</view>
		<view style="display: flex;flex-direction: row;font-size: 18px;color: #fff;margin-top: 10px;align-items: center;">
			<text style="margin-left: 10px;">当前难度:</text>
			<view style="color: #ffffff;margin-left: 5px;">
				<uni-data-select
					v-model="difficulty"
					:localdata="candidates"
					@change="change_diff"
				 ></uni-data-select>
			</view>

			<text style="margin-left: 18px;">已完成数量:{{accuracy.first_cnt+accuracy.second_cnt+accuracy.third_cnt}}</text>
		</view>
		
		<view class="zhuanxiang_box">
			<view style="width: 100%;display: flex;flex-direction: row;height: 60px;align-items: center;">
				<text style="color: rgb(4, 33, 184);font-size: 20px;margin-left: 10px;">专项训练</text>
				<image src="../../../static/tingyin/yinfu.png" mode="widthFix" style="width: 18.4px;margin-left: 10px;"></image>
			</view>
			<scroll-view scroll-y="true" style="height: 340px;">
				<view class="zhuanxiang_group" v-for="(item,index) in tingyin" @click="jump_yinfu(index)">
					<view>
						<text class="zhuanxiang_danyin">{{item.name}}</text>
						<text class="zhuanxiang_fu">/{{item.flag}}</text>
					</view>
					<view style="color: #605d7b;font-weight: bold;margin-right: 5%;">
						<text style="font-size: 24px;">0</text>
						<text style="font-size: 16px;">/{{item.sum}}</text>
					</view>
				</view>
			</scroll-view>
			<input style="height: 15px;" disabled="true"/>
		</view>
	
		<view class="kaoshi_box">
			<view style="width: 100%;display: flex;flex-direction: row;height: 60px;align-items: center;">
				<text style="color: rgb(4, 33, 184);font-size: 20px;margin-left: 10px;">考试测试</text>
				<image src="/static/tingyin/yinfu2.png" mode="widthFix" style="width: 18.4px;margin-left: 10px;"></image>
			</view>
			<view class="kaoshi_row">
				<view class="kaoshi_group" @click="exam()">
					考试系统
				</view>
				
				<view class="kaoshi_group">
					内容待定
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default { 
		data() {
			return {
				guanka:[],
				tingyin:[],
				my_tingyin:{},
				candidates: [{ value: 0, text: "简单" },
							  { value: 1, text: "中等" },
							  { value: 2, text: "困难" },],
				difficulty: 0,
				accuracy:{},
				statusBarHeight:0
			}
		},
		onLoad() {
			this.init();
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
		},
		onPullDownRefresh() {
			this.init();
			uni.stopPullDownRefresh();
		},
		methods: {
			back(){
				uni.navigateBack();
			},
			init(){
				// if(uni.getStorageSync('tingyin-date-select')==false||uni.getStorageSync('tingyin-date-select') ==null||uni.getStorageSync('tingyin-date-select') ==undefined)	this.difficulty=0;
				// else this.difficulty =uni.getStorageSync('tingyin-date-select') ;
				
				// this.difficulty=0;
				uni.request({
					url:this.server_url+'/get_tingyin?user='+uni.getStorageSync('user'),
					method:'GET',
					success: (res) => {
						
						this.tingyin=res.data.data;
						this.accuracy=res.data.accuracy;
						uni.setStorageSync('accuracy',this.accuracy);
						console.log(this.accuracy);
					}
				})
			},
			exam(){
				uni.showModal({
					title:'您确定开始考试吗？',
					content:'您选的难度是'+this.candidates[this.difficulty].text,
					confirmText:'确定',
					cancelText:'取消',
					success: (res) => {
						if(res.confirm){
							uni.showLoading();
							uni.request({
								url:this.server_url+'/exam?'+'difficulty='+this.difficulty,
								method:'GET',
								success: (res) => {
									console.log(res);
									uni.setStorage({
										data:res.data,
										key:'exam_chuancan'
									});
									uni.navigateTo({
										url:'./exam'
									});
								},
								complete: (res) => {
									uni.hideLoading();
								}
							});
							
						}else{
							
						}
					}
				})
			},
			change_diff(e){
				console.log(e);
				uni.setStorageSync('tingyin-date-select',e);
				
			},
			jump_yinfu(e){
				console.log(this.difficulty);
				uni.request({
					url:this.server_url+'/listen?type='+this.tingyin[e].flag+'&difficulty='+this.difficulty,
					method:'GET',
					success: (res) => {
						console.log(res);
						uni.setStorage({
							data:res.data,
							key:'xunlian_chuancan'
						});
						uni.navigateTo({
							url:'./xunlian'
						});
					}
				})
				
			}
		}
	}
</script>

<style>
	@import url("../all.css");
	hr{
		border: thin solid #d5d5d5;
	}
	page{
		width: 100%;
		height: 100%;
		background-image: url('@/static/tingyin/bac.png');
	}
</style>
