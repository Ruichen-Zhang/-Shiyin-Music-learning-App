## 基本用法
```html
<template>
	<view class="content">
		<ch-record-audio ref="audio"></ch-record-audio>
		<button type="default" @tap="getAudio">获取音频文件</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			getAudio() {
				let res = this.$refs.audio.get()
				console.log(res);
			}
		}
	}
</script>
```

## 属性
属性 | 描述 | 类型 | 默认值
-------- | -----| -----| -----
width | 组件的宽度 | String | 690rpx
max | 最大录音时长 | Number |10000（ms）
title  | 音频名称 | String | 新的音频
url | 音频路径 | String | (空)
duration | 音频时长 | Number | （url不为空时有效）
@confirm | 录音完成后的返回值 | function | 

## 方法
```javascript
// 获取音频的名称、路径、时长
this.$refs.audio.get()
```
