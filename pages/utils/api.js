import request from './request.js'


export const LoginApi = params=> request("/auth/loginByWeb",params);
export const HomeApi = ()=> request("/index/index"); 
export const GoodsDetailApi = params => request("/goods/detail",params);

export const RelatedGoodsApi = params=> request("/goods/related",params);