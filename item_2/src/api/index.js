import axios from 'axios';
import base from './address';

const api = {
    //获取商品列表
    getGoodList(params) {
        return axios.get(base.projectList, {
            params
        });
    },
    getSearchList(params){
        return axios.get(base.search, {
            params
        });
    }
};

export default api;