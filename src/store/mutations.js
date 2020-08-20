// 存储数据的逻辑
import * as types from './mutationTypes';

const mutations = {
  [types.SET_CONTACT_INFO](state, obj) {
    state.contactInfo = obj;
  },
};

export default mutations;
