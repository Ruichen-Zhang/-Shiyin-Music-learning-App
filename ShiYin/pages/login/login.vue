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
			
			<text style="margin-top: 50rpx;" class="xiaozi">账号</text>
			<input placeholder-style="font-size:13px" placeholder="请输入您的手机号" class="input_login"  v-model="phone" maxlength="20"/>
			
			<text style="margin-top: 35rpx;" class="xiaozi">密码</text>
			<input placeholder-style="font-size:13px" placeholder="请输入您的密码" class="input_login"  v-model="pwd" password="true" />
			
			<view style="display: flex;flex-direction: row;justify-content: space-between;margin-top: 20rpx;width: 90%;margin-left: 5%;">
				<text class="xiaozi" @click="jumpsms()">短信登录</text>
				
				<text class="xiaozi" @click="forgotPwd()">忘记密码？</text>
			</view>
			
			<view style="display: flex;flex-direction: row;width: 100%;justify-content: center;margin-top: 50rpx;">
				<view class="login_button" @click="login()">
					登录
				</view>
				
			</view>
			
			<view style="width: 80%;margin-left: 10%;margin-top: 30rpx;">
				<image src="../../static/login/bac.png" style="width: 100%;" mode="widthFix"></image>
			</view>
			
		</view>
		
		<wrap-version-update id="6302285884b51a00019ea12f" @check="handleCheck" @error="handleError"
		            @finish="handleFinish">
		</wrap-version-update>
	</view>
</template>


<script>
	let _this;
	import wButton from '../../components/watch-login/watch-button.vue' //button
export default {
	data() {
		return {
			phone: '', //手机号码
			pwd: '' ,//密码
			isRotate:false,
			statusBarHeight:0
		};
	},
	components:{
		wButton
	},
	mounted() {
		_this= this;
		this.yijian();
		this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	},
	onLoad() {},
	methods: {
		jumpsms(){
			uni.navigateTo({
				url:'./loginBySms'
			})
		},
		yijian(){
			// #ifdef APP
			uni.login({
				provider:'univerify',
				univerifyStyle:{
					icon:{
						path:"static/logo.png"
					}
				},
				success: (res) => {
					uniCloud.callFunction({
						name:'yijian',
						data:res.authResult,
						success: (re) => {
							console.log(re);
							if(re.result.code==0){
								uni.showToast({
									icon:'success',
									title:'登录成功'
								});
								//保存token,user
								uni.setStorage({
									key:'token',
									data:re.result.token
								});
								uni.setStorage({
									key:'user',
									data:re.result.user
								});
								uni.setStorageSync('gender',re.result.gender);
								
								uni.reLaunch({
									url:'../navigation/ShouYe/ShouYe'
								})
								
								// uni.redirectTo({
								// 	url:'../navigation/ShouYe/ShouYe'
								// })

								uni.closeAuthView();
							}else{
								uni.closeAuthView();
								uni.showToast({
									title:re.result.msg,
									icon:'none',
									duration:5000
								});
							}
							
						}
					})
				}
			})
					
			// #endif

		},
		LoginBySms(){
			uni.navigateTo({
				url:'./loginBySms'
			})
		},
		//当前登录按钮操作
		login() {
			var that = this;
			if (!that.phone) {
				uni.showToast({ title: '请输入手机号', icon: 'none' });
				return;
			}
			if (!that.pwd) {
				uni.showToast({ title: '请输入密码', icon: 'none' });
				return;
			}
			uni.request({
				url:this.server_url+'/loginbyPassword?user='+this.phone+'&password='+this.pwd,
				method:'GET',
				success: (res) => {
					if(res.data.result=="登录成功"){
						//token,user保存
							uni.showToast({
								icon:'success',
								title:'登录成功'
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
							uni.showToast({
								icon:'error',
								position:'bottom',
								title:res.data.result
							});
							this.pwd="";
						}
				}
			});
		},
		//忘记密码
		forgotPwd() {
			uni.navigateTo({
				url:'./forget'
			})
		},
		//立刻注册
		reg() {
			uni.navigateTo({
				url:'./register'
			})
		},
		handleFinish(res){
			console.log(res)
		},
		handleError(res){
			console.log(res)
		},
		handleCheck(res){
			console.log(res)
		},
	}
};
</script>
<style>
	@import url("all.css");
</style>
