<template>
	<view style="display: flex;flex-direction: column;">
		<input  :style="{height:statusBarHeight+'px'}" disabled="true"/>
		<view style="width: 100%;display: flex;flex-direction: row-reverse;">
			<image @click="back()" src="/static/tingyin/fanhui.png" mode="widthFix" style="width: 26px;margin-right: 5%;"></image>
		</view>
		<view style="display: flex;flex-direction: row;align-items: center;">
			<text style="font-size: 30px;color: #fff;margin-left: 10px;font-weight: 700;">视唱训练</text>
			<image src="/static/shichang/KTV.png" mode="widthFix" style="width: 33px;margin-left: 10px;"></image>
		</view>
		<view style="display: flex;flex-direction: row;font-size: 18px;color: #fff;margin-top: 10px;">
			<text style="margin-left: 10px;">开始您的视唱训练之旅把</text>
		</view>
		
		<view class="zhuanxiang_box" style="height: 275px;">
			<view style="width: 100%;display: flex;flex-direction: row;height: 60px;align-items: center;">
				<text style="color: rgb(117, 82, 150);font-size: 20px;margin-left: 10px;">调性选择</text>
				<image src="/static/shichang/tiaoyin.png" mode="widthFix" style="width: 18.4px;margin-left: 10px;"></image>
			</view>
			<scroll-view scroll-y="true" style="height: 215px;">
				<view class="diaoxing_group" v-for="(item,index) in tiaoxing" >
					<checkbox @click="change_now(0,index)"  :checked="now_tiaoxing==index" style="transform:scale(0.7)"></checkbox>
					<view style="margin-left: 5px;">
						<text v-if="item.jinghao">#</text>
						<text >{{item.name}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<view class="zhuanxiang_box" style="height: 250px;">
			<view style="width: 100%;display: flex;flex-direction: row;height: 60px;align-items: center;">
				<text style="color: rgb(117, 82, 150);font-size: 20px;margin-left: 10px;">拍号选择</text>
				<image src="/static/shichang/jiepai.png" mode="widthFix" style="width: 18.4px;margin-left: 10px;"></image>
			</view>
			<scroll-view scroll-y="true" style="height: 190px;">
				<view class="diaoxing_group" v-for="(item,index) in paihao" >
					<checkbox @click="change_now(1,index)"  :checked="now_paihao==index" style="transform:scale(0.7)"></checkbox>
					<view style="margin-left: 5px;">
						<text >{{item.name}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<view style="width: 100%;bottom: 0;display: flex;flex-direction: row-reverse;position: fixed;">
			<view class="start" @click="jump_shichang()">
				<image src="../../../../static/shichang/start.png" mode="widthFix" style="width: 32px;margin-right: 10px;transform:skew(30deg)"></image>
				<text style="color: rgb(255, 255, 255);font-size: 24px;margin-right: 5px;transform:skew(30deg)">开始</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:['调性','拍号'],
				tiaoxing:[{name:'A大调'},{name:'a小调'},
						  {name:'B大调'},{name:'b小调'},
						  {name:'C大调'},{name:'c小调'},
						  {name:'C大调',jinghao:true},{name:'c小调',jinghao:true},
						  {name:'D大调'}, {name:'d小调'},
						  {name:'E大调'},{name:'e小调'},
						  {name:'F大调'}, {name:'f小调'}],
				paihao:[{name:'2/4拍'},{name:'4/4拍'},{name:'3/8拍'},{name:'6/8拍'}],
				now_tiaoxing:0,
				now_paihao:0,
				statusBarHeight:0
			}
			
			
		},
		onLoad() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;	
		},
		methods: {
			back(){
				uni.navigateBack();
			},
			change_now(fi,se){
				if(fi==0)	this.now_tiaoxing=se;
				else	this.now_paihao=se;
			},
			back(){
				uni.navigateBack();
			},
			jump_shichang(){
				// console.log(this.tiaoxing[this.now_choice.pos]);
				var type = this.tiaoxing[this.now_tiaoxing].name;;
				// if(now_tiaoxing!=0)	type = this.tiaoxing[this.now_choice.pos].name;
				// else if()	type = this.paihao[this.now_choice.pos].name;
				
				uni.request({
					url:this.server_url+'/get_shichang?type='+type,
					method:'GET',
					success: (res) => {
						console.log(res);
						uni.setStorageSync('shichang_detaildata',res.data[0]);
						uni.navigateTo({
							url:'/pages/xunlian/shichang/shichang'
						})
					}
				})

			}
		}
	}
</script>

<style>
	@import url("../../all.css");
	page{
		width: 100%;
		height: 100%;
		background-image: url('@/static/shichang/bac.png');
	}

</style>
