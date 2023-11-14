<template>
	<view class="play-box">
		<view class="top-box">
			<text class="title">{{title}}</text>
			<view class="schedule-box">
				<view class="audio-number">{{format(current)}}</view>
				<slider class="audio-slider" step="1" :activeColor="color" block-size="16" :value="current"
					:max="duration" @changing="[status.seeking = true,current=$event.detail.value]"
					@change="seekAudio($event.detail.value)"></slider>
				<view class="audio-number">{{format(duration)}}</view>
			</view>
		</view>
		<view class="bottom-box">
			<view class="btn-wrap" @tap="backRecord">
				<view class="reset-img" data-text="重录"></view>
			</view>
			<view class="btn-wrap">
				<view class="pause-img" v-if="status.playing" data-text="暂停" @tap="pauseAudio"></view>
				<view class="continue-img" v-else data-text="播放" @tap="playAudio"></view>
			</view>
		</view>
	</view>
</template>

<script>
	let innerAudioContext = uni.createInnerAudioContext();
	export default {
		props: {
			// 总时长
			duration: {
				type: Number,
				default: 0
			},
			title: {
				type: String,
				default: '新的音频'
			},
			src: {
				type: String,
				default: ''
			},
			// 是否自动播放
			autoplay: {
				type: Boolean,
				default: false
			},
			// 是否遵循系统静音开关
			obeyMuteSwitch: {
				type: Boolean,
				default: false
			},
			// 开始播放的位置
			startTime: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {
				current: 0, //当前进度(s)

				/**逻辑状态**/
				status: {
					playing: false, //只有点击控制面板和播放结束可修改此状态
					seeking: false, //是否处于拖动状态
					waiting: false, //等待加载数据
				},
			}
		},
		watch: {
			startTime: {
				handler(nVal, oVal) {
					this.current = nVal
				},
				immediate: true
			},
		},
		created() {
			this.init();
			this.listening();
		},
		beforeDestroy() {
			innerAudioContext.destroy()
		},
		methods: {
			init() {
				this.resetStatus();
				innerAudioContext.obeyMuteSwitch = this.obeyMuteSwitch;
				innerAudioContext.startTime = this.startTime;
				innerAudioContext.autoplay = this.autoplay;
				innerAudioContext.src = this.src;
				if (this.autoplay) {
					this.status.playing = true;
				}
			},
			listening() {
				innerAudioContext.onTimeUpdate(() => {
					console.log('音频进度更新事件');
					if (!this.status.seeking) {
						this.current = innerAudioContext.currentTime
					}
				})
				innerAudioContext.onPlay(() => {
					console.log('开始播放,当前播放器状态=' + innerAudioContext.paused);
					this.status.waiting = false;
					if (this.status.seeking) {
						this.seekAudio(this.current);
					} else {
						this.status.seeking = false;
					}
				})
				innerAudioContext.onPause(() => {
					console.log('暂停播放,当前播放器状态=' + innerAudioContext.paused);

					//seek必须要在暂停播放后调用 否则没效果
					if (this.status.seeking && this.status.playing) {
						innerAudioContext.seek(this.current);
					} else {
						this.status.seeking = false;
					}
				})
				innerAudioContext.onStop(() => {
					console.log('停止播放,当前播放器状态=' + innerAudioContext.paused);
				})
				innerAudioContext.onWaiting(() => {
					console.log('等待音频数据,当前播放器状态=' + innerAudioContext.paused)
					this.status.waiting = true;
					if (!innerAudioContext.paused) {
						innerAudioContext.pause()
					}
				})
				innerAudioContext.onCanplay(() => {
					console.log('数据准备就绪,当前播放器状态=' + innerAudioContext.paused)
					this.status.waiting = false;
					if (this.status.playing && !this.status.seeking) {
						this.playAudio()
					}
				})
				innerAudioContext.onSeeked(() => {
					if (this.status.seeking) { //这个事件触发可能不对 自己控制下
						console.log('音频完成更改进度事件,当前播放器状态=' + innerAudioContext.paused)
						this.status.seeking = false
						if (this.status.playing && !this.status.waiting) {
							this.playAudio()
						}
					}
				})
				innerAudioContext.onEnded(() => {
					console.log('播放结束,当前播放器状态=' + innerAudioContext.paused)
					this.resetStatus();
					this.$emit('end');
				})
				innerAudioContext.onError((err) => {
					console.log('播放出错,当前播放器状态=' + innerAudioContext.paused)
					console.error(err)
					this.pauseAudio();
					this.resetStatus();
					this.$emit('error', err);
				})
			},
			backRecord() {
				if (innerAudioContext) {
					innerAudioContext.destroy();
				}
				this.$emit('reset')
			},
			// 播放音频
			playAudio() {
				console.log('调用播放，当前audio状态=' + innerAudioContext.paused);
				this.status.playing = true;
				if (innerAudioContext.paused) {
					innerAudioContext.play();
				}
			},
			// 暂停播放音频
			pauseAudio() {
				console.log('调用暂停，当前audio状态=' + innerAudioContext.paused);
				this.status.playing = false;
				if (!innerAudioContext.paused) {
					innerAudioContext.pause();
				}
			},
			// 跳转到指定位置
			seekAudio(value) {
				if (value <= 0) {
					value = 0
				}
				if (value >= this.duration) {
					value = this.duration;
				}
				console.log('调用Seek，当前audio状态=' + innerAudioContext.paused + ',value=' + value);
				this.status.seeking = true;
				this.status.playing = true;
				this.current = value;
				if (!innerAudioContext.paused) { //暂停事件里调用innerAudioContext.seek
					innerAudioContext.pause()
				} else { //已经是停止状态 必须先播放后再调用this.seekAudio
					if (!this.status.waiting) {
						this.playAudio();
					}
				}
			},
			resetStatus() {
				this.status.playing = false;
				this.status.seeking = false;
				this.status.waiting = false;
				this.current = 0;
			},
			//格式化时长
			format(num) {
				return '0'.repeat(2 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 -
					String(Math.floor(num % 60)).length) + Math.floor(num % 60)
			},
		},
	}
</script>

<style lang="less" scoped>
	.play-box {
		width: 100%;
		padding: 26rpx 30rpx;
		background-color: #c0c9d0;
		border-radius: 20rpx;
		box-sizing: border-box;

		.top-box {
			flex: 1;
			display: flex;
			flex-direction: column;

			.title {
				font-size: 24rpx;
				margin-left: 30rpx;
				margin-bottom: 10rpx;
			}

			.schedule-box {
				display: flex;
				align-items: center;

				.audio-number {
					width: 120upx;
					font-size: 24upx;
					line-height: 1;
					color: #333;
					text-align: center;
				}

				.audio-slider {
					flex: 1;
					margin: 0;
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
		}
	}
</style>
