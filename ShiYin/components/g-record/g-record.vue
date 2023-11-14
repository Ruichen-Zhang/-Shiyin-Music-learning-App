<template>
	<view class="g-record">
		 <view class="record_draw">
			 <view class="line">
				<view class="line2" v-if="isShow">
					<canvas 
					style="width:100%;height: 300rpx;"
					 canvas-id="canvas_recording"
					  class="canvas_recording"></canvas>
				</view>
			 </view>
			  <view class="time" :animation="animationData.time"> 
				{{showRecordTime}}
			 </view>
		 </view>
		 <view class="record_control">
			 <view class="cancel">
				 <view :animation="animationData.cancel" class="animate" @click="cancel()">
					 <view class="cancel_bg">
					 	<label class="custom-icon text">&#xe608;</label>
					 </view>
				 </view>
			  </view>
			  <view class="record">
				  <view class="action">
					  <label class="custom-icon text" @click="isShow?(isRecording?pause():start()):readyGO()">
							<template 
							v-if="!isShow || !isRecording">&#xe60b;</template>
							<template v-else>&#xe62c;</template>
					  </label>
				  </view>
			  </view>
			 <view class="save">
				 <view :animation="animationData.save" class="animate" @click="save">
					 <view class="save_bg">
						<label class="custom-icon text">&#xe601;</label>
					 </view>
				 </view>
			 </view>
			 <view class="maxtips">
				 <label>{{maxTimeTips}}</label>
			 </view>
		 </view>
	</view>
</template>
<script>
	const recorderManager = uni.getRecorderManager();
	const startRecord = function(){
		recorderManager.start({
			duration:1000 * 60 * 10,
			sampleRate:8000,
			encodeBitRate:16000,
			numberOfChannels:1,
			format:'mp3'
		});
	}
	const continueRecord = function(){
		recorderManager.start({
			duration:1000 * 60 * 10,
			sampleRate:8000,
			encodeBitRate:16000,
			numberOfChannels:1,
			format:'mp3'
		});
	}
	const reset = function(){
		if(this.isRecording){
			recorderManager.stop();
		}
		this.isShow=false
		this.isRecording=false
		this.recordTime=0
		if(this.timer){
			clearInterval(this.timer)
		}
		this.timer=null
		this.recordFiles=[]
		this.pauseFinish=null;
	}
	const animate=function(){
		const _this=this;
		const _animation_close=uni.createAnimation({
			duration: 400,
			timingFunction: 'ease',
			delay:0,
		})
		const _animation_save=uni.createAnimation({
			duration: 400,
			timingFunction: 'ease',
			delay:0,
		})
		const _animation_time=uni.createAnimation({
			duration: 400,
			timingFunction: 'ease',
			delay:0,
		})
		
		let _interval=null;
		return {
			show:function(){
				_animation_close.translate("220rpx").step()
				_this.animationData.cancel = _animation_close.export()
				
				_animation_save.translate("-220rpx").step()
				_this.animationData.save = _animation_save.export()
				
				_animation_time.translateY(
					_this.timeHeight
					?(((_this.timeHeight-120)/2 -30)
						.toFixed(0)+"px")
					:('300rpx')
				).step()
				_this.animationData.time = _animation_time.export()
			   
			   setTimeout(function(){
				   uni.createSelectorQuery()
				   .in(_this).select('.canvas_recording')
				   .boundingClientRect()
				   	.exec(res => {
						if (res) {
							const ctx = uni.createCanvasContext('canvas_recording',_this)
							const w = res[0].width;
							const h = res[0].height;
							const h2 = h/2;
							const sine = {
							  amp : h / 6,
							  freq : ( 2.5 ) *2*Math.PI*1e-3,
							};
							const draw=function() {
							  if(!_this.isRecording){
								  return;
							  }
							  ctx.clearRect(0,0,w,h);  
							  const passed = Date.now();
							  ctx.fillStyle='rgba(255,255,255,1)';
							  for (let x=0; x<w; x=x+1) {
									let yPos  = Math.ceil(
												sine.amp *
												 Math.sin(sine.freq * (x + passed)));
									yPos=h2+yPos
									ctx.fillRect(x,yPos,1.1,2.5);
							  }
							  ctx.draw()
							}
							_interval=setInterval(draw,50)
						}
				   })
			   },30)
			},
			close:function(fn){
				_animation_close.translate("0rpx").step()
				_this.animationData.cancel = _animation_close.export()
				
				_animation_save.translate("0rpx").step()
				_this.animationData.save = _animation_save.export()
				
				_animation_time.translateY("0rpx").step()
				_this.animationData.time = _animation_time.export()
				setTimeout(fn, 1)
				
				if(_interval)clearInterval(_interval)
				_interval=null;
			},
			destroy:function(){
				if(_interval)clearInterval(_interval)
				_interval=null;
			}
		}
	}
	export default {
		name: 'g-record',
		props: {
			maxTime:{
				type:Number,
				default:600000//默认10分钟,单位毫秒
			},
			maxTimeTips:{//录音时长tips
				type:String,
				default:''
			}
		},		
		data() {
			return {
				isShow:false,
				isRecording:false,
				recordTime:0,//录音时长 毫秒
				timer:null,//计时器
				recordFiles:[],//录音片段 微信小程序只支持10分钟最多
				animate:null,
				animationData:{},
			}
		},
		computed: {
			showRecordTime() {
				
				var recordTime = Math.floor(this.recordTime/1000);
				
				var h = Math.floor(recordTime/3600);
				if(h<10) h = "0"+h;
				
				var m = Math.floor((recordTime%3600)/60);
				if(m<10) m = "0"+m;
				
				var s = recordTime%60;
				if(s<10) s= "0"+s
				
				return h+':'+m+':'+s
			},
		},
		mounted() {
			reset.call(this);
			this.animate=animate.call(this)
			//计算高度record_draw
			uni.createSelectorQuery().in(this)
			.select('.record_draw')
				.boundingClientRect()
				.exec(res => {
				if (res) {
					this.timeHeight=res[0].height;
				}
			})
		},
		beforeDestroy(){
			reset.call(this);
			this.animate.destroy();
		},
		methods: {
			async readyGO(){
				if(this.isShow){
					return;
				}
				//获取录音权限
				uni.authorize({
					scope: 'scope.record',
					fail:()=>{
						this.isShow = false;
						uni.showToast({
							icon:'none',
							title:'请在小程序设置中启用麦克风权限'
						})
					},
					success:()=> {
						if(this.isShow){
							return;
						}
						this.animate.show();
						this.$emit('begin');
						
						reset.call(this);
						this.isShow=true;
						this.start();
						   
						recorderManager.onStart(()=>{
							console.log(`录音中,${this.maxTime},${this.recordTime}`)
						});
						
						recorderManager.onError((err)=>{
							console.error(err)
							console.log(`录音异常,${this.maxTime},${this.recordTime},${err}`)
							this.isRecording=false;
							if(this.timer){
								clearInterval(this.timer);
								this.timer=null;
							}
						});
						//息屏的情况下会触发这个需要调用resume
						recorderManager.onPause(()=>{
							console.error('录音被暂停')
							if(this.isRecording){
								recorderManager.resume();
							}
						});
						recorderManager.onStop((data)=>{
							console.log(`onStop,${this.maxTime},${this.recordTime},${data.tempFilePath}`)
							if(data && data.tempFilePath){
								this.recordFiles.push(data)
							}
							if(this.pauseFinish){
								this.pauseFinish();
								this.pauseFinish=null;
							}
							//只剩一秒内就算结束了吧，没必要再启动一次录音了
							if(!this.isRecording 
							|| this.recordTime>=this.maxTime-1000){
								console.log(`录音结束,${this.maxTime},${this.recordTime},${data.tempFilePath}`)
								this.isRecording=false;
								if(this.timer){
									clearInterval(this.timer);
									this.timer=null;
								}
							}else if(this.isRecording){
								continueRecord.call(this);
							}
						});
					}
				})
			},
			start(){
				if(this.isRecording){
					return;
				}
				if(this.recordTime>=this.maxTime-1000){
					//已达到最大时长
					uni.showToast({
						icon:'none',
						title:'已经达到最大录音时长'
					})
					return;
				}
				this.isRecording=true;
				startRecord.call(this);
				this.timer = setInterval(()=> {
					if(this.isRecording){
						this.recordTime+=1000;
						if(this.recordTime>=this.maxTime) this.pause();
					}
				},1000);
			},
			async pause(){
				if(!this.isRecording){
					return;
				}
				const p=new Promise((resolve,reject)=>{
					this.pauseFinish=()=>{
						resolve();
						this.isRecording=false;
						if(this.timer){
							clearInterval(this.timer);
							this.timer=null;
						}
					};
				})
				recorderManager.stop();
				return p;
			},
			async save(){
				const _save=async ()=>{
					this.animate.close(()=>{
						this.$emit('end',[...this.recordFiles]);
						reset.call(this);
					});
				}
				if(this.isRecording){
					await this.pause();
					_save();
				}else{
					_save();
				}
			},
			async cancel(confirm){
				if(!confirm && 
					(this.isRecording || this.recordFiles.length>0)){
					const result=await uni.showModal({
						content:'录音未保存,确定要退出?',
					})
					if(result[1].confirm){
						this.animate.close(()=>{
							this.isShow = false;
							this.$emit('cancel');
							reset.call(this);
						});
					}
				}else{
					this.animate.close(()=>{
						this.isShow = false;
						this.$emit('cancel');
						reset.call(this);
					});
				}
			}
		}
	}
</script>

<style lang="scss">
	@font-face {
	  font-family: "custom-icon";
	  src: url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2');
	}
	.custom-icon {
	  font-family: "custom-icon" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	.g-record{
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content:flex-end;
		height:100%;
		width: 100%;
		background-color: #0E0F14;
		overflow: hidden;
		.record_draw{
			flex-grow:1;
			display: flex;
			flex-direction: column;
			justify-content:center;
			align-items: center;
			.line {
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.line2{
					width: 100%;
					height:100%;
					display: flex;
					align-items: flex-end;
				}
			}
			.time {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				color: #ffffff;
				font-size: 60px;
			}
		}
		.record_control{
			height: 450upx;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 30px;
			position: relative;
			.maxtips{
				height: 100upx;
				line-height: 100upx;
				position: absolute;
				left:0rpx;
				bottom: 10rpx;
				width: 100%;
				color:#5C6270;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.cancel{
				margin-left: 30upx;
			}
			.save{
				margin-right: 30upx;
			}
			.cancel .animate{
				position: absolute;
				left:-90upx;
			}
			.save .animate{
				position: absolute;
				right:-90upx;
			}
			.cancel,.save{
				flex: 1;
				display: flex;
				align-items: center;
				position: relative;
				.cancel_bg,.save_bg{
					position: relative;
					background-color: #FFFFFF;
					border-radius: 50%;
					height: 50upx;
					width: 50upx;
				}
				.text{
					position: absolute;
					left:-10upx;
					top:-10upx;
					font-size: 70upx;
					color: #5C6270;
				}
			}
			.record{
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.action{
				position: relative;
				background-color: #FFFFFF;
				border-radius: 50%;
				height: 150upx;
				width: 150upx;
				.text{
					position: absolute;
					left:-25upx;
					top:-25upx;
					font-size: 200upx;
					color: #F6352B;
				}
			}
		}
	}
</style>
