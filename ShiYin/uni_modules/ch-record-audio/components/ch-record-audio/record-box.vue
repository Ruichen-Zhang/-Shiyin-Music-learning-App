<template>
	<view class="record-box">
		<view class="time-wrap">
			<text class="dot" :class="status!==1?'':'dot-fade'"></text>
			<text>{{minute}}:{{second}}</text>
		</view>
		<view class="bottom-box">
			<view class="btn-wrap" v-if="status!==0" @tap="resetRecord">
				<view class="reset-img" data-text="重置"></view>
			</view>
			<view class="switch-wrap">
				<button :class="status===0?'':'start-wrap'" @tap="switchChange">
				</button>
			</view>
			<view class="btn-wrap" v-if="status!==0">
				<view class="pause-img" v-if="status===1" data-text="暂停" @tap="pauseRecord"></view>
				<view class="continue-img" v-if="status===2" data-text="继续" @tap="resumeRecord"></view>
			</view>
		</view>
	</view>
</template>

<script>
	const recorderManager = uni.getRecorderManager();
	let timer; // 定时器
	export default {
		props: {
			// 最长时间
			max: {
				type: Number,
				default: 0
			},
			title: {
				type: String,
				default: '新的音频'
			},
		},
		data() {
			return {
				status: 0, // 录音进度 开始0 暂停1 继续2 
				timing: 0,
				minute: '00', //  分钟
				second: '00', // 秒钟
				isReset: false,
			}
		},
		watch: {
			timing: {
				handler(nVal, oVal) {
					let tSecond = Math.floor(this.timing) % 60
					let tMinute = Math.floor(this.timing / 60) % 60
					// 计算出时分秒
					this.minute = `${tMinute < 10 ? '0':''}${tMinute}`
					this.second = `${tSecond < 10 ? '0':''}${tSecond}`
				},
				immediate: true
			},
		},
		created() {
			this.listening()
		},
		beforeDestroy() {
			this.clearTimer()
		},
		methods: {
			listening() {
				const self = this

				recorderManager.onStop(res => {
					// console.log('结束录音', res)
					if (!self.isReset) {
						self.$emit('confirm', {
							path: res.tempFilePath,
							duration: this.timing
						})
					}

					self.clearTimer()
					self.status = 0
					self.timing = 0
					self.minute = '00'
					self.second = '00'
				})

				recorderManager.onPause(res => {
					// console.log('暂停录音', res)

					clearInterval(timer)
					self.status = 2
				})
			},
			// 开始录音和结束录音
			async switchChange() {
				if (this.status === 0) {
					let res = await this.audioAuthorize()
					// console.log('============================', res);
					if (res) {
						this.startRecord()
					}
				} else {
					this.endRecord()
				}
			},
			// 开始录音
			startRecord() {
				recorderManager.start({
					duration: this.max,
					format: 'mp3'
				});

				this.status = 1
				this.isReset = false
				this.setTimer()
			},
			// 结束录音
			endRecord() {
				recorderManager.stop();
			},
			// 暂停录音
			pauseRecord() {
				recorderManager.pause()
			},
			// 继续录音
			resumeRecord() {
				recorderManager.resume()

				this.status = 1
				this.setTimer();
			},
			// 重置录音
			resetRecord() {
				this.isReset = true
				recorderManager.stop();
			},
			setTimer() {
				timer = setInterval(() => {
					this.timing++
				}, 1000)
			},
			clearTimer() {
				clearInterval(timer)
				timer = null;
			},
			async audioAuthorize() {
				const self = this
				let res = await this.getSetting()
				let auth = res.authSetting['scope.record']
				// 拒绝授权
				if (auth === false) {
					uni.showModal({
						content: '您已拒绝录音授权，是否手动开启权限？',
						async success(res) {
							if (res.confirm) {
								console.log('用户点击确定');
								await self.openSetting()
							} else if (res.cancel) {
								console.log('用户点击取消');
								uni.navigateBack()
							}
						}
					})
					return false
				}
				// 或者未进行过授权
				if (!auth) {
					let res = await this.getAuthorize('scope.record')
					return res.errMsg === 'authorize:ok'
				}
				return true
			},
			// 获取授权设置
			getSetting() {
				return new Promise((resolve, reject) => {
					uni.getSetting({
						success(res) {
							console.log(`获取用户授权结果成功`, res);
							resolve(res)
						}
					})
				})
			},
			// 调起客户端小程序设置界面
			openSetting() {
				return new Promise((resolve, reject) => {
					uni.openSetting({
						success(res) {
							console.log(`调起客户端小程序设置界面成功`, res);
							resolve(res)
						},
						fail(e) {
							console.log(`调起客户端小程序设置界面失败`, e);
							resolve(e)
						}
					})
				})
			},
			// 获取授权
			getAuthorize(scope) {
				return new Promise((resolve, reject) => {
					uni.authorize({
						scope: scope,
						success(res) {
							console.log(`获取${scope}权限成功`, res);
							resolve(res)
						},
						fail(e) {
							console.log(`获取${scope}权限失败`, e);
							resolve(e)
						}
					})
				})
			}
		},
	}
</script>

<style lang="scss">
	.record-box {
		width: 100%;
		padding: 30rpx;
		background-color: #fafafa;
		border: 1px solid #eee;
		border-radius: 20rpx;
		box-sizing: border-box;

		.time-wrap {
			padding-left: 20rpx;
			font-size: 56rpx;
			color: #f30000;
			display: flex;
			justify-content: center;
			align-items: center;

			.dot {
				width: 14rpx;
				height: 14rpx;
				border-radius: 50%;
				background-color: #f30000;
				margin: 0 15rpx;
			}

			.dot-fade {
				animation: fade 1s infinite;
			}

			@keyframes fade {
				0% {
					opacity: 1;
				}

				50% {
					opacity: 0;
				}

				100% {
					opacity: 1;
				}
			}
		}

		.bottom-box {
			margin-top: 30rpx;

			display: flex;
			justify-content: space-around;
			align-items: center;

			.btn-wrap {

				.reset-img,
				.continue-img,
				.pause-img {
					position: relative;
					width: 42rpx;
					height: 42rpx;
					padding-bottom: 32rpx;
					background-size: 100%;
					background-repeat: no-repeat;

					&::after {
						content: attr(data-text);
						position: absolute;
						bottom: 0;
						width: 100%;
						font-size: 22rpx;
						color: #333333;
						white-space: nowrap;
					}
				}

				.reset-img {
					background-image: url(./../../static/reset.png);
				}

				.continue-img {
					background-image: url(./../../static/play.png);
				}

				.pause-img {
					background-image: url(./../../static/pause.png);
				}
			}

			.switch-wrap {
				position: relative;
				width: 75rpx;
				height: 75rpx;
				padding: 0;
				background-color: #fff;
				box-sizing: border-box;
				border-radius: 50%;
				box-shadow: 0 0 10rpx 2rpx rgba(0, 0, 0, 0.1);
				overflow: hidden;

				button {
					width: 100%;
					height: 100%;

					&::after {
						position: absolute;
						top: 50%;
						left: 50%;
						width: 30rpx;
						height: 30rpx;
						background-color: #f30000;
						border-radius: 50%;
						transform: translate(-50%, -50%);
					}
				}

				.start-wrap {
					&::after {
						border-radius: 8rpx;
					}
				}
			}
		}
	}
</style>
