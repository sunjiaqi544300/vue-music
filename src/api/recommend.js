import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

export function getRecommend() {
	const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
	
	const data = Object.assign({},commonParams,{
		platform: 'h5',
		uin: 2412772489,   //默认0
		needNewCode: 1
	})
	
	return jsonp(url, data, options)
}


export function getDiscList () {
//	const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
	const url = '/api/getDiscList'
	
	const data = Object.assign({},commonParams,{
		platform: 'yqq',
		hostUin: 0,
		sin: 0,
		ein: 29,
		sortId: 5,
		needNewCode: 0,
		categoryId: 10000000,
		rnd: Math.random(0,1),    //随机值0.2127620346174548
		picmid: 1,
		loginUin: 0,
		inCharset: 'utf8',
		notice: 0,
		format: 'json'
	})
//	return jsonp(url, data, options)
		return axios.get(url, {
			params:data
		}).then((res) =>{
			return Promise.resolve(res.data)
		})
}
