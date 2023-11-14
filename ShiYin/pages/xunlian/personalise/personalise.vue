<template>
	<view>
		<input style="height: 300rpx;" disabled="true"/>
		<view style="width: 100%;justify-content: center;display: flex;align-items: center;height: 100%;">
			
			<view @click="wujin()" style="width: 100px;height: 100px;background-color: crimson;border-radius: 100px;text-align: center;align-items: center;">
				<view style="display: flex;flex-direction: column;justify-content: center;height: 100px;">
					<text>无尽模式</text>
				</view>
				
			</view>
		</view>
		
		<!-- 计算半屏高度 -->
		<view style="height: 300px;">
			<!-- y轴方向滑动 -->
			<scroll-view scroll-y="true"  style="height: 100%;">
				<!-- 遍历数据 -->
				<view v-for="(item,index) in data">
					<!-- 每一条评论横向布局 -->
					<view style="display: flex;flex-direction: row;align-items: center;">
						<view style="flex-shrink: 0;width: 20%;">
							<!-- 头像 -->
							<image :src="item.image" style="width: 100%;" mode="widthFix"></image>
						</view>
						<!-- 竖向布局 -->
						<view style="display: flex;flex-direction: column;">
							<!-- 用户名 -->
							<view style="flex-shrink: 0;">
								<text style="font-size: 13px;">{{item.name}}</text>
							</view>
							<!-- 评论内容 -->
							<view style="flex-shrink: 0;">
								<text style="font-size: 12px;">{{item.title}}</text>
							</view>
							
						</view>
					</view>
					<!-- 分割线 -->
					<hr>
				</view>
				
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:[{
					image:'https://img2.baidu.com/it/u=3062813899,1142128231&fm=253&fmt=auto&app=138&f=JPEG?w=479&h=500',
					name:'~煜前方',
					title:'这是一条评论'
				}]
			}
		},
		methods: {
			wujin(){
				uni.showToast({
					title:'待完善',
					icon:'none'
				})
			}
		}
	}
</script>

<style>

</style>
