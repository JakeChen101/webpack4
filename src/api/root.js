import axios from './index'

// 新建权限列表
export const getNewList = param => axios.get(`/1.0/admin/permssion/index`, param);
export const getImg = param => axios.post(`http://172.16.5.23:8921/yun/pcUser/checkImgCode`, param);
