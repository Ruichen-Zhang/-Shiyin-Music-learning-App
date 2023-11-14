<template>
	<view style="display: flex;flex-direction: column;">
		<view style="display: flex;flex-direction: row;padding: 20px;font-size: 10px;font-family: xingkai;">
			<text>当前难度：{{candidates[difficulty].text}}</text>
			<text style="margin-left: 10px;">已完成数量：{{accuracy.first_cnt+accuracy.second_cnt+accuracy.third_cnt}}</text>
			
		</view>
		<hr> 
		 
		 
		<view style="display: flex;flex-direction: column;font-family: xingkai;">	
			<view style="display: flex;flex-direction: row;padding: 5px 0px 5px 0px;align-items: center;">
				<text style="color: #a1abdd;margin-left: 4%;font-size: 16px;margin-top: 10px;border-radius: 10px;width: 50%;">专项训练</text>
				<view style="width: 30%;flex-shrink: 0;font-size: 12px;">
					<text v-if="difficulty===0">平均正确率：{{accuracy.first_accuracy}}</text>
					<text v-else-if="difficulty===1">平均正确率：{{accuracy.second_accuracy}}</text>
					<text v-else>平均正确率：{{accuracy.third_accuracy}}</text>
				</view>
				<view style="margin-left: 5px;">
					<uni-data-select
						v-model="difficulty"
						:localdata="candidates"
						@change="change_diff"
					 ></uni-data-select>
				</view>

			</view>
			 
			
			<view style="display: flex;flex-direction: row;flex-wrap: wrap;width: 100%;margin-top: 20rpx;" >
				<view style="width: 44%;background-color: #ecf1fe;margin-left: 4%;margin-top: 10px;" v-for="(item,index) in tingyin" @click="jump_yinfu(index)">
					<view style="padding: 15px 3px 15px 3px;display: flex;flex-direction: row;justify-content: space-around;align-items: center;">
						<view style="display: flex;flex-direction: column;">
							<text style="font-weight: 600;font-size: 14px;">{{item.name}}</text>
							<text style="color: #b6bfdb;font-size: 12px;">{{item.flag}}</text>
						</view>
						<view style="background-color: #759ffa;font-size: 10px;padding: 2px 5px 2px 5px;border-radius: 8rpx;">
							<text>0/{{item.sum}}</text>
						</view>
					</view>
					
				</view>
			</view>
			
			<text style="color: #a1abdd;margin-left: 4%;font-size: 16px;margin-top: 20px;border-radius: 10px;">考试测试</text>
			<view style="display: flex;flex-direction: row;margin-top: 20rpx;">
				<view @click="exam()" style="width: 44%;margin-left: 4%;display: flex;flex-direction: row;align-items: center;background-color: #00dacb;height: 175rpx;border-radius: 20upx;">
					<text style="color: #ffffff;margin-left: 20rpx;font-size: 14px;">考试系统</text>
				</view>
				 
				<view style="width: 44%;margin-left: 4%;display: flex;flex-direction: row;align-items: center;background-color: #ff8e00;height: 175rpx;border-radius: 20upx;">
					<text style="color: #ffffff;margin-left: 20rpx;font-size: 14px;">内容待定</text>
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
				accuracy:{}
			}
		},
		onLoad() {
			this.init();
		},
		onPullDownRefresh() {
			this.init();
			uni.stopPullDownRefresh();
		},
		methods: {
			init(){
				if(uni.getStorageSync('tingyin-date-select')==false||uni.getStorageSync('tingyin-date-select') ==null||uni.getStorageSync('tingyin-date-select') ==undefined)	this.difficulty=0;
				else this.difficulty =uni.getStorageSync('tingyin-date-select') ;
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
	hr{
		border: thin solid #d5d5d5;
	}
</style>
