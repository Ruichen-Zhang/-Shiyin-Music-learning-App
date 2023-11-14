<template>
	<view class="ch-record-audio" :style="{width:width}">
		<recordBox v-if="!src" :max="max" @confirm="confirm"></recordBox>
		<playBox v-else :title="title" :src="src" :duration="time" @reset="reset"></playBox>
	</view>
</template>

<script>
	import recordBox from './record-box.vue'
	import playBox from './play-box.vue'

	export default {
		components: {
			recordBox,
			playBox,
		},
		props: {
			width: {
				type: String,
				default: '690rpx'
			},
			max: {
				type: Number,
				default: 10000
			},
			title: {
				type: String,
				default: '新的音频'
			},
			url: {
				type: String,
				default: ''
			},
			duration: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {
				src: '',
				time: 0
			}
		},
		watch: {
			url: {
				handler(nVal, oVal) {
					this.src = nVal
				},
				immediate: true
			},
			duration: {
				handler(nVal, oVal) {
					this.time = nVal
				},
				immediate: true
			}
		},
		methods: {
			confirm(e) {
				console.log('==========', e);
				this.src = e.path
				this.time = e.duration
				let data = {
					title: this.title,
					...e
				}
				this.$emit('confirm', data)
			},
			reset() {
				this.src = ''
				this.time = 0
			},
			get() {
				return {
					src: this.src,
					duration: this.time,
					title: this.title,
				}
			}
		},
	}
</script>

<style lang="scss">
	.ch-record-audio {}
</style>
