<template>
	<view>
		
		<view v-for="(item,index) in data.detail" style="display: flex;flex-direction: row;align-items: center;margin-top: 20rpx;width: 95%;margin-left: 5%;">
			
			<view style="display: flex;flex-direction: column;font-family: xingkai;width: 70%;flex-shrink: 0;">
				<text style="font-size: 20px;">{{item.name}}</text>
				<view style="display: flex;flex-direction: row;align-items: center;font-size:12px;">
					<view style="border: 1px solid #fcdbdc;border-radius: 10upx;padding: 1px;">
						<text style="color:#fb8386">Original</text>
					</view>
					<text style="color:#9d9d9d;font-size: 13px;"> - {{data.name}}</text>
				</view>
				
			</view>
			
			<view style="display: flex;flex-direction: row;width: 30%;flex-shrink: 0;">
				<image v-if="bofang!==index" src="../../../static/tingyin/bofang.png" style="width: 25%;" mode="widthFix" @click="playmp3(index)"></image>
				<image v-else src="../../../static/tingyin/zanting.png" style="width: 25%;" mode="widthFix" @click="playmp3(item.src)"></image>
				<view style="background-color: #42b983;border-radius: 10upx;padding: 2px 5px 2px 5px;margin-left: 10rpx;" @click="Jump_xunlian(index)">
					<text style="color: #ffffff;">训练</text>
				</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{},
				bofang:-1
			}
		},
		mounted() {
			this.data = uni.getStorageSync('yinfu_list_chuancan');
			
			
		},
		methods: {
			Jump_xunlian(e){
				console.log(e);
				uni.setStorage({
					data:e,
					key:'xunlian_chuancan'
				});
				uni.navigateTo({
					url:'./xunlian'
				})
			},
			playmp3(e){
				this.bofang=e;
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.autoplay = true;
				innerAudioContext.src = this.data.detail[e].src;
				innerAudioContext.onPlay(() => {
				  console.log('开始播放');
				});
				innerAudioContext.onEnded( ()=>{
					this.bofang=-1;
					 console.log('播放停止');
				})
				innerAudioContext.onError((res) => {
				  console.log(res.errMsg);
				  console.log(res.errCode);
				});
			}
		}
	}
</script>

<style>

</style>
