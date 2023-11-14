
<template>
	<view style="display: flex;flex-direction: column;width: 100%;">
		<input  :style="{height:statusBarHeight+'px'}" disabled="true"/>
		<view style="display: flex;flex-direction: row-reverse;align-items: center;">
			<view style="display: flex;flex-direction: row;align-items: center;margin-right: 10px;" @click="login()">
				<text style="font-size: 18px;">登录</text>
				<image src="../../static/login/right.png" style="width: 18px;margin-left: 10rpx;" mode="widthFix"></image>
			</view>
		</view>
		
		<view style="width: 86%;margin-left: 7%;display: flex;flex-direction: column;">
			<text class="kaishi" style="margin-top: 130rpx;">开始你的视唱练耳之旅</text>
			<text class="huanying" style="margin-top: 20rpx;">欢迎使用拾音App</text>
			
			<view style="display: flex;flex-direction: row;margin-top: 50rpx;width: 100%">
				<view style="display: flex;flex-direction: row;width: 100%;" >
					<view class="xingbie" @click="change_gender()">
						<text style="margin-left: 10px;">男生</text>
						<view class="xingbie_s" v-if="gender" >
							<image src="../../static/login/dui.png" mode="widthFix" style="width: 8.75px;"></image>
						</view>
					</view>
					<view class="xingbie" style="margin-left: 10%;" @click="change_gender()">
						<text style="margin-left: 10px;">女生</text>
						<view class="xingbie_s" v-if="!gender" >
							<image src="../../static/login/dui.png" mode="widthFix" style="width: 8.75px;"></image>
						</view>
					</view>
				</view>

			</view>
			
			<text style="margin-top: 35rpx;" class="xiaozi">手机号</text>
			<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
				<input style="width: 80%;" placeholder-style="font-size:13px" placeholder="请输入您的手机号" class="reginput"  v-model="phone" maxlength="20"/>
				<view style="display: flex;flex-direction: row;justify-content: center;flex-shrink: 0;width: 20%;" >
					<view class="sms">
						<image @click="getCode()" v-if="showText" src="../../static/login/jiantou.png" style="width: 18px;" mode="widthFix"></image>
						<text v-else style="color: #fff;">{{second}}</text>
					</view>
				</view>
			</view>
		

			<text style="margin-top: 35rpx;" class="xiaozi">验证码</text>
			<input placeholder-style="font-size:13px" placeholder="请输入您的验证码" class="reginput"  v-model="yzm" maxlength="6"/>
			
			<text style="margin-top: 35rpx;" class="xiaozi">密码</text>
			<input placeholder-style="font-size:13px" placeholder="请输入您的密码" class="reginput"  v-model="pwd" password="true" />
			
			<text style="margin-top: 35rpx;" class="xiaozi">确认密码</text>
			<input placeholder-style="font-size:13px" placeholder="请重复您的密码" class="reginput"  v-model="pwdagain" password="true" />
			
			<view style="display: flex;flex-direction: row;margin-top: 20rpx;width: 100%;align-items: center;margin-top: 20rpx;">
				<checkbox :checked="tiaoli" @click="change_tiaoli()"></checkbox>
				<text style="font-size: 13px;">我同意使用拾音APP使用条例</text>
			</view>
			
			<view style="display: flex;flex-direction: row;width: 100%;justify-content: center;margin-top: 60rpx;">
				<view class="login_button" @click="reg()">
					注册
				</view>
				
			</view>
			
		</view>
		
	</view>
</template>
<script>
	let _this;
	import wButton from '../../components/watch-login/watch-button.vue' ;//button
export default {
	data() {
		return {
			phone: '', //手机号码
			pwd: '' ,//密码
			pwdagain:'',
			second: 60, //默认60秒
			showText: true, //判断短信是否发送
			yzm: '' ,//验证码
			isRotate: false, //是否加载旋转
			gender:false,//false 女
			statusBarHeight:0,
			tiaoli:true,
			code_interval:null,
		};
	},
	components:{
		wButton
	},
	mounted() {
		_this= this;
		this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	},
	onLoad() {},
	methods: {
		change_tiaoli(){
			this.tiaoli=!this.tiaoli;
		},
		login(){
			uni.navigateTo({
				url:'./login'
			})
		},
		change_gender(){
			this.gender=!this.gender;
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
		reg() {
			
			var that = this;
			if (!that.tiaoli) {
				uni.showToast({ title: '请同意使用条例', icon: 'none' });
				return;
			}
			
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
			
			if(that.pwd!=that.pwdagain){
				uni.showToast({ title: '两次密码不一致', icon: 'none' });
				return;
			}
			
			var gender = '';
			if(this.gender==false)	gender='女';
			else 	gender='男';
			console.log(gender);
			
			uni.request({
				url:this.server_url+'/register?user='+this.phone+'&password='+this.pwd+'&code='+this.yzm+'&gender='+gender,
				method:'GET',
				success: (res) => {
					console.log(res);
					if(res.data.result=="注册成功"){
						uni.showToast({
							icon:'success',
							title:'注册成功'
						});
						//保存token,user
						uni.setStorage({
							key:'token',
							data:res.data.token
						});
						uni.setStorage({
							key:'user',
							data:this.phone
						});
						uni.setStorage({
							key:'money',
							data:'0.0'
						});
						uni.setStorageSync('gender',gender);
						//jump
						uni.redirectTo({
							url:'../navigation/ShouYe/ShouYe'
						});
					}else{
						uni.showToast({
							icon:'none',
							position:'bottom',
							title:res.data.result
						});
						this.yzm="";
					}
				}
			})
		},
		//立刻注册
		JumpLogin() {
			uni.navigateTo({
				url:'./login'
			})
		}
	}
};
</script>
<style>
	@import url("all.css");
</style>
