<template>
	<view style="display: flex;flex-direction: column;width: 100%;height: 100%;">
		<view class="container" :style="{height:height_content+'px'}">
			<view class="topbox" >
				<input :style="{height:statusBarHeight+'px'}"/>
				<view style="width: 85%;margin-left: 10%;display: flex;flex-direction: row;justify-content: space-between;align-items: center;">
					<view style="display: flex;flex-direction: column;">
						<text style="font-size: 24px;font-weight: 700;color: #fff;">Hi,{{username}}</text>
						<text style="font-size: 14px;color: #fff;">Let's start listening</text>
					</view>
					<view class="gangqin">
						<image src="../../../static/navgiation/ShouYe/gangqin.png" style="width: 37px;background-color: #5973f8;" mode="widthFix"></image>
					</view>
				</view>
			</view>
			
			<view class="middle_box">
				<view class="middle_group" @click="jump_shichang()">
					<image src="../../../static/navgiation/ShouYe/shichang.png" mode="widthFix" style="width: 35px;"></image>
					<text class="middle_text">视唱训练</text>
				</view>
				<view class="middle_group" @click="jump_tingyin()">
					<image src="../../../static/navgiation/ShouYe/tingyin.png" mode="widthFix" style="width: 35px;"></image>
					<text class="middle_text">听音训练</text>
				</view>
				<view class="middle_group" @click="jump_personalise()">
					<image src="../../../static/navgiation/ShouYe/gexing.png" mode="widthFix" style="width: 35px;"></image>
					<text class="middle_text">个性推荐</text>
				</view>
			</view>
			
			<view class="shipin_box">
				<view v-if="shipin" class="shipin_s" @click="change_shipin()">
					视频教学
				</view>
				<view v-else class="shipin" @click="change_shipin()">
					视频教学
				</view>
				<view v-if="!shipin" class="shipin_s" @click="change_shipin()">
					文本教学
				</view>
				<view v-else class="shipin" @click="change_shipin()">
					文本教学
				</view>
			</view>
			
			<view  v-if="shipin" class="shipin_father" v-for="(item ,index) in video">
				
				<view class="shipin_group" >
					<view style="width: 40%;flex-shrink: 0;margin-left: 5%;height: 71px;flex-shrink: 0;">
						<image :src="item.href" mode="aspectFill" style="width: 100%;height: 71px;border-radius: 12px;"></image>
					</view>
					<view style="margin-left: 5%;width: 30%;flex-shrink: 0;">
						<text class="shipin_title">钢琴教程</text>
						<view style="display: flex;flex-direction: row;align-items: center;margin-top: 10rpx;">
							<image src="../../../static/navgiation/ShouYe/introduction.png" style="width: 11px;" mode="widthFix"></image>
							<text class="shipin_introduction" style="margin-left: 2px;">{{item.title.substring(6,10)}}...</text>
						</view>
				
					</view>
					<view @click="jump_video(index)" style="flex-shrink: 0;width: 15%;display: flex;flex-direction: row;justify-content: center;">
						<view class="bofang_view">
							<image src="../../../static/navgiation/ShouYe/bofang.png" mode="widthFix" style="width: 14.5px;"></image>
						</view>
						
					</view>
				</view>
			</view>
			<view  v-if="!shipin"  class="wenben_box">
				
				<view v-for="(item,index) in info" class="wenben_group">
					
					<view style="height: 138px;flex-shrink: 0;width: 100%;">
						<image :src="item.image" mode="aspectFill" class="wenben_image"></image>
					</view>
					<view style="display: flex;flex-direction: column;justify-content: flex-start;align-items: center;height: 74px;">
						<text class="shipin_title" style="margin-top: 10rpx;">{{item.timu}}</text>
						<text class="shipin_introduction">{{item.title.substring(0,10)}}...</text>
					</view>
				</view>
			</view>
			
			
			<input style="height: 100px;" disabled="true"/>
			<wrap-version-update id="6302285884b51a00019ea12f" @check="handleCheck" @error="handleError"
			            @finish="handleFinish">
			</wrap-version-update>
			

		</view>
		<view  class="tabbar">
			<view class="icon" @click="change_nowpage(0)">
				<view class="icon2" >
					<view style="width: 30px;height: 2.3px;background: rgb(61, 92, 255);position: absolute;top: 0;"></view>
					
					<image src="../../../static/navgiation/shouye_select.png" style="width: 21px;" mode="widthFix"></image>
					<text class="text_s">首页</text>
					
				</view>

			</view>
			<view @click="change_nowpage(1)" style="width: 14%;flex-shrink: 0;display: flex;flex-direction: column;align-items: center;" >
				
				<view class="yuan">
					<image src="../../../static/navgiation/sousuo.png" style="width: 20px;" mode="widthFix"></image>
				</view>
				<text class="text" style="margin-top: 5px;">搜索</text>
			
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
				search_value:'',
				info: [
				{
					image: 'https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/ShiYin/swiper1.png',
					title:'【800集钢琴教程】包含所有钢琴技巧，想学不会都难，建议收藏，学完变',
					timu:'800集钢琴教程',
					time:1658745213000
				}, {
					image: 'https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/ShiYin/swiper2.png',
					title:'[钢琴教学] 你的心河 River flows in you－李闰珉 Yiruma [慢速版]',
					timu:'钢琴教学',
					time:1658748213000
				}, {
					image: 'https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/ShiYin/swiper3.png',
					title:'《菊次郎的夏天》钢琴教学',
					timu:'菊次郎的夏天',
					time:1658745243000
				},{ 
					image: 'https://7463-tcb-6dkhphdodd5e2a-7dedu72135999-1309304321.tcb.qcloud.la/ShiYin/swiper4.png',
					title:'周杰伦《反方向的钟》钢琴教学！太简单了吧',
					timu:'反方向的钟',
					time:1658746213000
				}],
				swiper_current: 0,
				video:'',
				nowpage:0,
				username:'',
				shipin:true
				
			}
		},
		onLoad() {
			this.login_auto();
			this.username=uni.getStorageSync('user');
			
		},
		methods: {
			change_shipin(){
				this.shipin=!this.shipin;
			},
			change_nowpage(e){
				this.nowpage=e;
				if(this.nowpage==2){
					uni.navigateTo({
						url:'../WoDe/WoDe'
					})
				}else if(this.nowpage==1){
					uni.navigateTo({
						url:'/pages/navigation/Middle/Middle'
					})
				}
			},
			jump_personalise(){
				uni.navigateTo({
					url:'/pages/xunlian/personalise/personalise'
				})
			},
			jump_shichang(){

				uni.navigateTo({
					url:'/pages/xunlian/shichang/list/list'
				})
			},
			jump_tingyin(){
				uni.navigateTo({
					url:'/pages/xunlian/tingyin/tingyin'
				})
			},
			jump_video(index){
				uni.setStorage({
					data:this.video[index],
					key:'video_chuancan'
				});
				uni.setStorage({
					data:this.video,
					key:'all_video'
				});
				uni.navigateTo({
					url:'video/video'
				})
			},
			login_auto(){
				uni.request({
					url:this.server_url+'/loginByauto?token='+uni.getStorageSync('token'),
					method:'GET',
					success: (res) => {
						console.log(res)
						if(res.data==false){
							uni.redirectTo({
								url:'../../login/login'
							});
							uni.showToast({
								title:'请先登录',
								icon:'none'
							});   
							return;
						}
						uni.request({
							url:this.server_url+'/getvideo',
							method:'GET',
							success: (res) => {
								// console.log(res)
								this.video=res.data;
							}
						}) 
					}
				})
			},
			search() {
				console.log('search');
			},
			change_swiper(e) {
				this.swiper_current = e.detail.current;
			},
			handleFinish(res){
				console.log(res)
			},
			handleError(res){
				console.log(res)
			},
			handleCheck(res){
				console.log(res)
			},
		}
	}
</script>

<style>
	
	@import url("../tabbar.css");;
	.continer{
		width: 100%;
		display: flex;
		flex-direction: column;
		font-family: xingkai;
		
	}
	page {
		width: 100%;
		height: 100%;
	}
	.scroll-view-img1{
		height: 250rpx;
		background-size: 100% 100%;
		border-radius: 25upx;
		margin-top: 30rpx;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		
	}
	
	

</style>
