<template>
	<view style="width: 100%;">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:'',
				pwd:''
			}
		},
		mounted() {
			uni.setNavigationBarColor({
				backgroundColor:'#77f7de'
			})
		},
		methods: {
			jump_pwd(){
				uni.navigateTo({
					url:'/pages/login/forget'
				})
			},
			login(){
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
								
								uni.switchTab({
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
			}
		}
	}
</script>

<style>

</style>
