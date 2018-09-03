<template>
	<div ref="wrapper">
		<slot>
			
		</slot>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	
	export default {
		props: {
			//指定缓慢，还是可快速
			probeType: {
				type: Number,
				default:1
			},
			click: {
				type: Boolean,
				default: true
			},
			data: {
				type: Array,
				default: null
			}
		},
		mounted() {
			setTimeout(()=> {
				this._initScroll()
			}, 20)
		},
		methods: {
			_initScroll() {
				if(!this.$refs.wrapper) {
					return
				}
				this.scroll = new BScroll(this.$refs.wrapper, {
					probeType: this.probeType,
					click: this.click
				})
			},
			enable() {
				this.scroll && this.scroll.enable()
			},
			disable() {
				this.scroll && this.scroll.disable()
			},
			//刷新重新计算
			refresh() {
				this.scroll && this.scroll.refresh()
			}
		},
		watch: {
			//监听data
			data (){
				setTimeout(() =>{
					this.refresh()
				}, 20)
			}
		}
	} 
</script>

<style>
</style>