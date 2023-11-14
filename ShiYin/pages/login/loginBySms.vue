<!-- 蓝色简洁登录页面 -->
<template>
	<view style="display: flex;flex-direction: column;width: 100%;">
		<input  :style="{height:statusBarHeight+'px'}" disabled="true"/>
		<view style="display: flex;flex-direction: row-reverse;align-items: center;">
			<view style="display: flex;flex-direction: row;align-items: center;margin-right: 10px;" @click="reg()">
				<text style="font-size: 18px;">注册</text>
				<image src="../../static/login/right.png" style="width: 18px;margin-left: 10rpx;" mode="widthFix"></image>
			</view>
		</view>
		
		<view style="width: 86%;margin-left: 7%;display: flex;flex-direction: column;">
			<text class="kaishi" style="margin-top: 150rpx;">开始你的视唱练耳之旅</text>
			<text class="huanying" style="margin-top: 20rpx;">欢迎使用拾音App</text>
			
		</view>
		
		<view style="width: 88%;display: flex;flex-direction: row;height: 48px;align-items: center;margin-top: 100rpx;margin-left: 12%;">
			<view style="width: 70%;flex-shrink: 0;border-bottom:thin solid #e5e5e5;height: 48px;align-items: center;display: flex;flex-direction: row;">
				<view style="width: 30%;flex-shrink: 0;height: 48px;display: flex;flex-direction: column;justify-content: center;" class="jia86">
					+86
				</view>
				<view style="width: 70%;flex-shrink: 0;">
					<input v-model="phone" placeholder="10086" style="width: 90%;margin-left: 5%;" placeholder-style="color: rgba(0, 0, 0, 0.3);"/>
				</view>
			</view>
			
			<view style="display: flex;flex-direction: row;justify-content: center;flex-shrink: 0;width: 30%;" >
				<view class="sms">
					<image @click="getCode()" v-if="showText" src="../../static/login/jiantou.png" style="width: 18px;" mode="widthFix"></image>
					<text v-else style="color: #fff;">{{second}}</text>
				</view>
			</view>
		</view>
		
		<view style="width: 88%;display: flex;flex-direction: row;height: 48px;align-items: center;margin-top: 50rpx;margin-left: 12%;">
			<view style="width: 70%;flex-shrink: 0;border-bottom:thin solid #e5e5e5;height: 48px;align-items: center;display: flex;flex-direction: row;">
				<view style="width: 30%;flex-shrink: 0;height: 48px;display: flex;flex-direction: column;justify-content: center;" class="jia86">
					验证码
				</view>
				<view style="width: 70%;flex-shrink: 0;">
					<input v-model="yzm" maxlength="6" placeholder="10086" style="width: 90%;margin-left: 5%;" placeholder-style="color: rgba(0, 0, 0, 0.3);"/>
				</view>
			</view>
		</view>
		
		<view style="width: 86%;margin-left: 7%;display: flex;flex-direction: column;margin-top: 20rpx;">
			<view style="display: flex;flex-direction: row;width: 100%;justify-content: center;margin-top: 50rpx;">
				<view class="login_button" @click="login()">
					登录
				</view>
				
			</view>
			
			<view style="width: 80%;margin-left: 10%;margin-top: 60rpx;">
				<image src="../../static/login/bac.png" style="width: 100%;" mode="widthFix"></image>
			</view>
		</view>
		
	</view>
</template>
<script>

	import wButton from '../../components/watch-login/watch-button.vue'; //button
export default {
	data() {
		return {
			phone: '', //手机号码
			second: 60, //默认60秒
			showText: true, //判断短信是否发送
			code_interval:null,
			yzm: '' ,//验证码
			isRotate:false,
			statusBarHeight:0
		};
	},
	components:{
		wButton
	},
	onLoad() {},
	mounted() {
		this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	},
	methods: {
		reg() {
			uni.navigateTo({
				url:'./register'
			})
		},
		getCode() {
			var that = this;
			if (!that.phone) {
				uni.showToast({ title: '请输入手机号', icon: 'none' });
				return;
			}
			if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(that.phone)) {
				uni.showToast({ title: '请输入正确手机号', icon: 'none' });
				return;
			}

			//这里请求后台获取短信验证码
			uni.request({
				url:that.server_url+'/sendsms?user='+that.phone,
				method:'GET',
				success: function(res) {
					
					that.showText = false;
					that.second=60;
					this.code_interval = setInterval(function(){
						that.second--;
						if(that.second==0){
							that.showText=true;
							clearInterval(that.code_interval);
						}
					}, 1000);
				}
			});
		},
		login() {
			var that = this;
			if (!that.phone) {
				uni.showToast({ title: '请输入手机号', icon: 'none' });
				return;
			}
			if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(that.phone)) {
				uni.showToast({ title: '请输入正确手机号', icon: 'none' });
				return;
			}
			
			if (that.yzm=="") {
				uni.showToast({ title: '请输入验证码', icon: 'none' });
				return;
			}
			if (that.yzm.length!=6) {
				uni.showToast({ title: '验证码格式错误', icon: 'none' });
				return;
			}
			
			console.log(this.server_url+'/loginbySms?user='+this.phone+'&code='+this.yzm);
			uni.request({
				url:this.server_url+'/loginbySms?user='+this.phone+'&code='+this.yzm,
				method:'GET',
				success: (res) => {
					if(res.data.result=="登录成功"){
						uni.setStorage({
							key:'token',
							data:res.data.token
						});
						uni.setStorage({
							key:'user',
							data:this.phone
						});
						
						uni.setStorageSync('gender',res.data.gender);
						
						//判断是不是管理员
						if(this.phone=='admin'){
							uni.setStorage({
								key:'admin',
								data:true
							});
						}
						
						uni.redirectTo({
							url:'../navigation/ShouYe/ShouYe'
						})
					}else{
						this.yzm=""
					};
					uni.showToast({
						icon:'none',
						position:'bottom',
						title:res.data.result
					});
				}
			})
		},
	
	}
};
</script>
<style>
	@import url("./all.css");
</style>
