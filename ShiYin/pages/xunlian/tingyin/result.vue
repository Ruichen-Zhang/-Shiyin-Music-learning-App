<template>
	<view>
		{{data.result}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{}
			}
		},
		mounted() {
			this.data = uni.getStorageSync('xunlian_result');
			var ind = 0;
			var wrong = 0;
			var right = 0;
			for(var i=0;i<this.data.zuoda.length;i++){
				for(var j=0;j<this.data.zuoda[i].length;j++){
					if(this.data.ans[ind]==this.data.zuoda[i][j].value){
						right++;
						this.data.result[i].push(Object.assign(this.data.zuoda[i][j], { ans:true }));
					}else{
						wrong++;
						this.data.result[i].push(Object.assign(this.data.zuoda[i][j], { ans:false}));
					}
					ind++;
				}
			}
			console.log(right+" "+wrong)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
