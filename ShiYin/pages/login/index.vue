<template>
	<view style="display: flex;flex-direction: column;width: 100%;justify-content: center;height: 100%;align-items: center;">
		<text style="font-size: 36px;color: #343f54;font-weight: bold;">一切</text>
		<text style="font-size: 36px;color: #343f54;font-weight: bold;">如此简单</text>
		<image src="../../static/login/index.png" style="width: 80%;margin-left: 10%;margin-top: 50px;" mode="widthFix"></image>
		<button class="login_button" @click="login()" style="margin-top: 100px;">进入首页</button>
	</view>
</template>

<script>
	import codeElfGuide from '@/components/code-elf-guide/code-elf-guide.vue'
	export default {
        components: {
            codeElfGuide
        },
		data() {
			return {
				guidePages:true
			}
		},
		onLoad(){
			this.loadExecution()
		},
		methods: {
			login(){
				uni.setStorage({
					key: 'launchFlag', 
					data: true, 
					success: function () {
						console.log('error时存储launchFlag');
					} 
				}); 
				uni.navigateTo({
					url:'/pages/login/login'
				});
			},
			loadExecution: function(){
				/**
				 * 获取本地存储中launchFlag的值
				 * 若存在，说明不是首次启动，直接进入首页；
				 * 若不存在，说明是首次启动，进入引导页；
				 */
				try {
					// 获取本地存储中launchFlag标识
				    const value = uni.getStorageSync('launchFlag');
				    if (value) {
						// launchFlag=true直接跳转到首页
						uni.redirectTo({
							url:'/pages/navigation/ShouYe/ShouYe'
						});
				    } else {
						// launchFlag!=true显示引导页
				        this.guidePages = true
				    }
				} catch(e) { 
					// error 
					uni.setStorage({ 
						key: 'launchFlag', 
						data: true, 
						success: function () {
							console.log('error时存储launchFlag');
						} 
					}); 
					this.guidePages = true
				}
				return;
			}
		}
	}
</script>

<style>
	@import url("all.css");
	page{
		width: 100%;
		height: 100%;
	}
</style>
