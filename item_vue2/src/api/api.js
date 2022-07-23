import axios from 'axios';
import base from './address';

const api = {
    //获取商品列表
    getGoodList(params) {
        return axios.get(base.projectList, {
            params
        });
    }
};

export default api;