<template>
	<view class="content">
		<input style="height: 10%;" disabled="true"/>
		
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				autoplay: false,
				duration: 500,
				jumpover: '跳过',
				experience: '立即体验',
				actice_color:'#ff0000',
				noactive_color:'#949494'
			}
		},
		methods: {
			change_next(){
				uni.redirectTo({
					url:'/pages/qidong/qidong_swiper',
					animationType:'slide-in-right'
				});
			},
			youke(){
				uni.showToast({
					title:'暂不支持游客预览',
					icon:'none'
				});
			},
			login(){
				uni.redirectTo({
					url:'/pages/login/index'
				});
			},
			reg(){
				uni.redirectTo({
					url:'/pages/login/register'
				})
			},
			launchFlag: function(){
				/**
				 * 向本地存储中设置launchFlag的值，即启动标识；
				 */
				uni.setStorage({
						key: 'launchFlag',
						data: true,
				});
				uni.switchTab({
					url: '/pages/tabBar/component/component'
				});
				
			}
		}
	}
</script>
<style>
	page,
	.content{
		width: 100%;
		height: 100%;
		background-size: 100% auto ;
		padding: 0;
	}
	.swiper{
		width: 100%;
		height: 65%;
		background: #FFFFFF;
	}
	.swiper-item {
		width: 100%;
		height: 100%;
		text-align: center;
		position: relative;
		display: flex;
		/* justify-content: center; */
		align-items:flex-end;
		flex-direction:column-reverse;
		padding: 10px;
	}
	.swiper-item_2 {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction:column;
		padding: 10px;
	}
	.swiper-item-img{
		width: 100%;
		height: auto;
	}
	.swiper-item-img image{
		width: 100%;
	}
	
</style>
