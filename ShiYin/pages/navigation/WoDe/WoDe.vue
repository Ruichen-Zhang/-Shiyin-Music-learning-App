<template>
	<view style="display: flex;flex-direction: column;width: 100%;height: 100%;">
		<view class="container" :style="{height:height_content+'px'}">
			<view class="topbox_wode" >
				
			</view>
			
			<view class="avatar_box">
				<view style="display: flex;flex-direction: column;align-items: center;">
					<view class="avatar_view">
						<image src="../../../static/navgiation/ShouYe/gangqin.png" class="avatar" mode="aspectFill"></image>
					</view>
					<view class="edit_box">
						<image src="../../../static/navgiation/wode/edit.png" mode="widthFix" style="width: 8px;"></image>
					</view>
					<text style="font-size: 24px;font-weight: 700;margin-top: -15px;">{{user}}</text>
					<view class="shipin_s" style="margin-top: 10px;">签到</view>
				</view>
				
			</view>
			
			<view class="wode_middle_box">
				<view class="wode_middle_group" @click="scan()">
					<view class="wode_middle_row">
						<view class="wode_middle_row_view">
							<image src="/static/navgiation/wode/saoyisao.png" mode="widthFix" style="width: 30px;"></image>
							<text style="font-size: 16px;margin-left: 5%;">扫一扫 马上练习</text>
						</view>
						<image src="/static/navgiation/wode/youjiantou.png" mode="widthFix" style="width: 6px;margin-right: 5%;"></image>
					</view>
				</view>
				<hr>
				
				<view class="wode_middle_group" @click="scan()">
					<view class="wode_middle_row">
						<view class="wode_middle_row_view">
							<image src="/static/navgiation/wode/shibie.png" mode="widthFix" style="width: 30px;"></image>
							<text style="font-size: 16px;margin-left: 5%;">识别曲谱</text>
						</view>
						<image src="/static/navgiation/wode/youjiantou.png" mode="widthFix" style="width: 6px;margin-right: 5%;"></image>
					</view>
				</view>
				<hr>
				
				<view class="wode_middle_group" @click="jump_lianxi()">
					<view class="wode_middle_row">
						<view class="wode_middle_row_view">
							<image src="/static/navgiation/wode/cuoti.png" mode="widthFix" style="width: 30px;"></image>
							<text style="font-size: 16px;margin-left: 5%;">我的错题本</text>
						</view>
						<image src="/static/navgiation/wode/youjiantou.png" mode="widthFix" style="width: 6px;margin-right: 5%;"></image>
					</view>
				</view>
				<hr>
				
				<view class="wode_middle_group" @click="jump_exam()">
					<view class="wode_middle_row">
						<view class="wode_middle_row_view">
							<image src="/static/navgiation/wode/kaoshi.png" mode="widthFix" style="width: 30px;"></image>
							<text style="font-size: 16px;margin-left: 5%;">我的考试记录</text>
						</view>
						<image src="/static/navgiation/wode/youjiantou.png" mode="widthFix" style="width: 6px;margin-right: 5%;"></image>
					</view>
				</view>
				<hr>
				
				<view class="wode_middle_group">
					<view class="wode_middle_row">
						<view class="wode_middle_row_view">
							<image src="/static/navgiation/wode/wode.png" mode="widthFix" style="width: 30px;"></image>
							<text style="font-size: 16px;margin-left: 5%;">我的曲谱</text>
						</view>
						<image src="/static/navgiation/wode/youjiantou.png" mode="widthFix" style="width: 6px;margin-right: 5%;"></image>
					</view>
				</view>
			</view>

			<view class="yinsi">
				<view style="display: flex;flex-direction: row;" @click="Yinsixieyi()">
					<image src="/static/navgiation/wode/yinsi.png" style="width: 24px;" mode="widthFix"></image>
					<text style="font-size: 16px;margin-left: 5px;">隐私协议</text>
				</view>
				
				<view style="display: flex;flex-direction: row;"  @click="Unlogin()">
					<image src="/static/navgiation/wode/unlogin.png" style="width: 24px;" mode="widthFix"></image>
					<text style="font-size: 16px;margin-left: 5px;">退出登录</text>
				</view>
			</view>
			
			<input style="height: 110px;" disabled="true"/>

			

		</view>
		<view  class="tabbar">
			<view class="icon" @click="change_nowpage(0)">
				<view class="icon2" v-if="nowpage===0">
					<view style="width: 30px;height: 2.3px;background: rgb(61, 92, 255);position: absolute;top: 0;"></view>
					
					<image src="../../../static/navgiation/shouye_select.png" style="width: 21px;" mode="widthFix"></image>
					<text class="text_s">首页</text>
					
				</view>
				<view class="icon2" v-else>
					<image src="../../../static/navgiation/shouye.png" style="width: 21px;" mode="widthFix"></image>
					<text class="text">首页</text>
				</view>

			</view>
			<view @click="change_nowpage(1)" style="width: 14%;flex-shrink: 0;display: flex;flex-direction: column;align-items: center;" v-if="nowpage==1">
				
				<view class="yuan" style="background-color: #c7d0ff;">
					<image src="../../../static/navgiation/sousuo.png" style="width: 20px;" mode="widthFix"></image>
				</view>
				<text class="text_s" style="margin-top: 5px;">搜索</text>

			</view>
			<view @click="change_nowpage(1)" style="width: 14%;flex-shrink: 0;display: flex;flex-direction: column;align-items: center;" v-else>
				
				<view class="yuan">
					<image src="../../../static/navgiation/sousuo.png" style="width: 20px;" mode="widthFix"></image>
				</view>
				<text class="text" style="margin-top: 5px;">搜索</text>
			
			</view>
			<view class="icon" @click="change_nowpage(2)">
				<view class="icon2" v-if="nowpage===2" >
					<view style="width: 30px;height: 2.3px;background: rgb(61, 92, 255);position: absolute;top: 0;"></view>
					<image src="../../../static/navgiation/wode_select.png" style="width: 21px;" mode="widthFix"></image>
					<text class="text_s">我的</text>
				</view>
				<view class="icon2" v-else>
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
				user:'',
				avator:"https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/Lazy_search/Avatar/default_avator.jpg",
				nowpage:2
			}
		},
		components:{

		},
		mounted() {
			this.user=uni.getStorageSync('user');

		},
		methods: {
			change_nowpage(e){
				this.nowpage=e;
				if(this.nowpage==0){
					uni.navigateTo({
						url:'/pages/navigation/ShouYe/ShouYe'
					})
				}else if(this.nowpage==1){
					uni.navigateTo({
						url:'/pages/navigation/Middle/Middle'
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
