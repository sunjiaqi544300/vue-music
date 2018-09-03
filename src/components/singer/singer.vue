<template>
	<div>
		{{singers}}
	</div>
</template>

<script type="text/ecmascript-6">
	import {getSingerList} from '../../api/singer.js'
	import {ERR_OK} from '../../api/config.js'
	export default{
		data() {
			return {
				singers:[]
			}
		},
		created() {
			this._SingerList()
		},
		methods: {
			_SingerList() {
				getSingerList().then((res) => {
					if(res.code === ERR_OK){
						this.singers = res.data.list
					}
				})
			}
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>