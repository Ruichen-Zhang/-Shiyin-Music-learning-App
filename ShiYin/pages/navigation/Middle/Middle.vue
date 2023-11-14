<template>
	<view style="display: flex;flex-direction: column;width: 100%;height: 100%;">
		<view class="container" :style="{height:height_content+'px'}">
			
			<input :style="{height:statusBarHeight+20+'px'}" disabled="true"/>
			
			<view class="search">
				<view style="width: 55%;margin-left: 5%;display: flex;flex-direction: row;align-items: center;">
					<image src="../../../static/navgiation/middle/search.png" mode="widthFix" style="width: 22.7px;"></image>
					<input @confirm="search()" v-model="search_context" style="height: 50px;margin-left: 5px;" placeholder="如何速成钢琴" placeholder-style="font-size:14px;"/>
				</view>
				<view class="search_button" @click="search()">
					搜索
				</view>
			</view>
			
			<view class="history_box" style="margin-top: 10px;">
				<view v-for="(item,index) in history" class="history_father">
					<view class="history_group">
						<text>{{item}}</text>
					</view>
				</view>
				<view class="history_father">
					<view class="history_group">
						<text>搜索历史</text>
					</view>
				</view>
			</view>
			
			{{search_context}}
			
			<input style="height: 110px;" disabled="true"/>

			

		</view>
		<view  class="tabbar">
			<view class="icon" @click="change_nowpage(0)">
				<view class="icon2" >
					<image src="../../../static/navgiation/shouye.png" style="width: 21px;" mode="widthFix"></image>
					<text class="text">首页</text>
				</view>

			</view>
			<view @click="change_nowpage(1)" style="width: 14%;flex-shrink: 0;display: flex;flex-direction: column;align-items: center;" >
				
				<view class="yuan" style="background-color: #c7d0ff;">
					<image src="../../../static/navgiation/sousuo.png" style="width: 20px;" mode="widthFix"></image>
				</view>
				<text class="text_s" style="margin-top: 5px;">搜索</text>

			</view>
			<view class="icon" @click="change_nowpage(2)">
				<view class="icon2" >
					<image src="../../../static/navgiation/wode.png" style="width: 21px;" mode="widthFix"></image>
					<text class="text">我的</text>
				</view>
			</view>
		</view>
		
	</view>

</template>

<script>

	export default {
		data() {
			return {
				nowpage:2,
				statusBarHeight:0,
				history:[],
				search_context:''
			}
		},
		onLoad() {
			if(uni.getStorageSync('search_history')!=false){
				this.history = uni.getStorageSync('search_history');
			}
			this.user=uni.getStorageSync('user');
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;	
		},
		methods: {
			search(){
				this.history[3]=this.search_context;
				// uni.setStorageSync('search_history',this.history);
				this.search_context = '';
			},
			change_nowpage(e){
				this.nowpage=e;
				if(this.nowpage==0){
					uni.navigateTo({
						url:'/pages/navigation/ShouYe/ShouYe'
					})
				}else if(this.nowpage==2){
					uni.navigateTo({
						url:'../WoDe/WoDe'
					})
				}
			},
			jump_exam(){
				uni.navigateTo({
					url:'/pages/navigation/WoDe/exam_list/exam_list'
				})
			},
			jump_lianxi(){
				uni.navigateTo({
					url:'/pages/navigation/WoDe/cuoti_list/cuoti_list'
				})
			},
			Unlogin(){
				uni.clearStorageSync();
				uni.clearStorage();
				uni.reLaunch({
					url:'../../login/login'
				});
			}
		}
	}
</script>


<style>
	@import url("../tabbar.css");
	hr{
		border: 1px solid rgb(234, 230, 230);
	}
	
	page{
		background: linear-gradient(rgba(202,89,89,0) 50.824%,rgba(254,199,191,0.23529411764705882) 100%);
	}
</style>
