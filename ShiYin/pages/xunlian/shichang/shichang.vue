<template>
	<view class="content">
		<input style="height: 20rpx;" disabled="true"/>
		<view style="display: flex;flex-direction: row;">
			<text style="font-size: 20px;margin-left: 10px;">< 视唱训练</text>
		</view>
		<view style="width: 90%;margin-left: 5%;margin-top: 20rpx;">
			<image :src="data.image" style="width: 100%;" mode="widthFix"></image>
		</view>
		
		<view style="display: flex;flex-direction: row;justify-content: space-around;margin-top: 40rpx;">
			<view class="button_fanli" @click="start_mp3()">范例{{miao}}s</view>
			<view v-if="!is_luyin" class="button_fanli" @click="start_dao()">视唱</view>
			<view v-else class="button_fanli" @click="stop_luyin()">停止{{luyin_miao}}s</view>
		</view>
		
		<view style="width: 100%;padding: 20px;display: flex;flex-direction: row;">
			测试用录音地址<textarea v-model="path" auto-height="true" style="border: thin solid #939393;border-radius: 5px;"></textarea>
		</view>
		
		<uni-popup ref="daojishi" :isMaskClick="false">
			<view style="width: 200px;height: 200px;border-radius: 200px;background-color: aquamarine;display: flex;flex-direction: column;justify-content: center;align-items: center;">
				<text v-if="daojishi_num!==0" style="font-size: 60px;font-weight: bolder;color: #FFF;">{{daojishi_num}}</text>
				<text v-else style="font-size: 60px;font-weight: bolder;color: #FFF;">开始!</text>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	var innerAudioContext = null;
	var luyin = null;
	export default {
		data() {
			return {
				show: false,
				path:'',
				res:'',
				data:'',
				miao:0,
				miao_interval:null,
				daojishi_num:3,
				daojishi_interval:null,
				is_luyin:false,
				luyin_miao:0,
				luyin_inerval:null
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			plus.screen.lockOrientation("landscape-primary");
			// #endif
			
			luyin = uni.getRecorderManager();
			innerAudioContext = uni.createInnerAudioContext();
			this.data = uni.getStorageSync('shichang_detaildata');
			let self = this;
			luyin.onStop(function (res) {
				console.log(res.tempFilePath);
				self.path = res.tempFilePath;
				self.onUpload(res.tempFilePath);
			});
		},
		onUnload() {
			// #ifdef APP-PLUS
			plus.screen.lockOrientation('portrait-primary');
			// #endif
		},
		onBackPress(e){
			console.log(e);
			innerAudioContext.pause();
			innerAudioContext.destroy();
			luyin.stop();
		},
		methods: {
			stop_luyin(){
				this.is_luyin=false;
				luyin.stop();
				clearInterval(this.luyin_inerval);
				
			},
			start_luyin(){
				luyin.start({
					duration:600000,
					format:'wav'
				});
				var that = this;
				this.luyin_miao=0;
				this.luyin_inerval = setInterval(function luyin_miaostart(){
					that.luyin_miao++;
				},1000)
			},
			start_dao(){
				this.is_luyin=true;
				this.$refs.daojishi.open('center');
				this.daojishi_num=3;
				var that = this;
				this.daojishi_interval =  setInterval(function start(){
					that.daojishi_num--;
					if(that.daojishi_num==0){
						clearInterval(that.daojishi_interval);
						that.$refs.daojishi.close();
						that.start_luyin();
					}
				},1000)
			},
			start_mp3(){
				// if(this.is_pause==true){
				// 	this.is_pause=false;
				// 	innerAudioContext.play();
				// 	this.start=true;
				// 	return;
				// }
				var that = this;

				innerAudioContext.sessionCategory = "ambient";
				this.start=true;
				var play_biao  = true; 
				this.voice_percentage=0;
				innerAudioContext.autoplay = true;
				// console.log(this.music + this.data.data);
				innerAudioContext.src = this.data.music;
				this.miao_interval = setInterval(function xunhuan(){
					that.miao++;
				},1000);
				innerAudioContext.play( ()=>{

				})
				innerAudioContext.onEnded(()=>{
					// this.voice_percentage=1;
					// this.is_pause=false;
					// this.start=false;
					clearInterval(this.miao_interval);
				})
				
			},
			onUpload (tempFilePath) {
				console.log(tempFilePath);
				// uni.showLoading();
				uni.uploadFile({
					url: this.server_url+'/uploadFile',
					filePath: tempFilePath,
					name: 'file',
					fileType:'audio',
					header:{"Content-Type": "multipart/form-data"},
					success: (res) => {
						console.log(res.data);
						var result = JSON.parse(res.data);
						console.log(result);
						if(result.code==0){
							this.show=false;
							this.path = this.music_url+ result.path;
							uni.showToast({
								title:'上传成功',
								icon:'success'
							});
							uni.setClipboardData({
								data:this.path
							});
						}else{
							uni.showToast({
								title:result.msg,
								icon:'success'
							});
						}
					},
					fail: (res) => {
						var result = JSON.parse(res.data);
						uni.showToast({
							title:result.msg,
							icon:'success'
						});
					},
					complete: (res) => {
					}
				})
				

			}
		}
	}
</script>

<style lang="scss">
	page{
		width: 100%;
		height: 100%;
	}
	.content {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	  .popup-bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 10;
		display: flex;
		flex-direction: column;
		.popup-bg {
		  position: fixed;
		  left: 0;
		  top: 0;
		  width: 100%;
		  height: 100%;
		  background: rgba(0,0,0,0.5);
		}
		.popup-content {
		  height: 40%;
		  margin-top: auto;
		  background-color: #fff;
		  position: relative;
		  z-index: 11;
		}
	  }
	  
	.button_fanli{
		width: 120px;
		height: 50px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 50upx;
		background-color: #fd933d;
		font-size: 17px;
	}
</style>
