
import request from '@/widget/request'

export const getLizardCode = (data) => request('/webapp-static/lizard/index.js',data)

//本地启vue服务访问github接口不通 TODO 如何解决？？
// export const getSearchList = (data) => request("https://api.github.com/search/users",data)


//
export const getSearchList = (data) => request("/api/read/product/recommendProductList",data)
