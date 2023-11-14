<script>
	export default {
		onLaunch: function() {
			uni.setStorageSync('screenheight',uni.getSystemInfoSync().screenHeight);
			
			console.log('App Launch')
			//#ifdef APP
			plus.screen.lockOrientation("portrait-primary");
			//#endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {
	       font-family: xingkai;
	       src: url('~@/static/xingkai.ttf')
	   }
</style>
