<template>
	<view style="display: flex;flex-direction: column;width: 100%;">
		<input  :style="{height:statusBarHeight+'px'}" disabled="true"/>
		<view style="display: flex;flex-direction: row-reverse;align-items: center;">
			<view style="display: flex;flex-direction: row;align-items: center;margin-right: 10px;" @click="login()">
				<text style="font-size: 18px;">登录</text>
				<image src="../../static/login/right.png" style="width: 18px;margin-left: 10rpx;" mode="widthFix"></image>
			</view>
		</view>
		
		<view style="width: 190px;height: 190px;transform: rotate(-11.00deg);margin-left: 68.8%;position: absolute;" :style="{top:statusBarHeight+10+'px'}">
			<image src="../../static/login/yinfu.png" mode="" style="width: 190px;transform: rotate(-11.00deg);height: 190px;"></image>
		</view>

		
		<view style="width: 86%;margin-left: 7%;display: flex;flex-direction: column;margin-top: 100px;">

			<text class="huanying" style="">忘记密码</text>
			
			<text style="margin-top: 60rpx;margin-bottom: 5px;" class="xiaozi">手机号码</text>
			<input placeholder-style="font-size:13px" placeholder="请输入您的手机号" class="input_login"  v-model="phone" maxlength="20"/>
			
			<text style="margin-top: 60rpx;margin-bottom: 5px;" class="xiaozi">新密码</text>
			<input placeholder-style="font-size:13px" placeholder="请输入您的新密码" class="input_login"  v-model="pwd" password="true" />
			
			<text style="margin-top: 60rpx;margin-bottom: 5px;" class="xiaozi">验证码</text>
			<view class="sms_box">
				<input placeholder-style="font-size:13px" placeholder="请输入您的验证码" style="width: 50%;"   v-model="yzm" maxlength="6" />
				<view @click="getCode()" class="login_button" style="width: 120px;height: 35px;font-size: 14px;margin-right: 10px;">
					<text v-if="showText">发送短信</text>
					<text v-else>{{second}}</text>
				</view>
			</view>
		
			

			
			<view style="display: flex;flex-direction: row;width: 100%;justify-content: center;margin-top: 150rpx;">
				<view class="login_button" @click="forget()()">
					重置
				</view>
				
			</view>
			
			
		</view>

	</view>
</template>

<script>
	let _this;
	import wButton from '../../components/watch-login/watch-button.vue'; //button
	export default {
		data() {
			return {
				phone: '', //手机号码
				pwd: '' ,//密码
				second: 60, 
				second_interval:null,
				showText: true, 
				yzm: '' ,//验证码
				isRotate:false
			};
		},
		components:{
			wButton
		},
		onLoad() {},
		mounted() {
			_this= this;
		},
		methods: {
			login(){
				uni.navigateBack();
			},
			getCode() {
				var that = this;
				if (!that.phone) {
					uni.showToast({ title: '请输入手机号', icon: 'none' });
					return;
				}
				if (!this.showText) {
					uni.showToast({ title: '请勿重复发送', icon: 'none' });
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
						this.second_interval = setInterval(function(){
							that.second--;
							if(that.second==0){
								that.showText=true;
								that.second=60;
								clearInterval(that.second_interval);
							}
						},1000);
						
					}
				});
			},
			forget() {
				
				var that = this;
				if (!that.phone) {
					uni.showToast({ title: '请输入手机号', icon: 'none' });
					return;
				}
				if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(that.phone)) {
					uni.showToast({ title: '请输入正确手机号', icon: 'none' });
					return;
				}
				if (!that.pwd) {
					uni.showToast({ title: '请输入密码', icon: 'none' });
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
				uni.request({
					url:this.server_url+'/forget?user='+this.phone+'&password='+this.pwd+'&code='+this.yzm,
					method:'GET',
					success: (res) => {
						if(res.data.result=="修改成功"){
							uni.navigateTo({
								url:'./login'
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
	@import url("all.css");
</style>
