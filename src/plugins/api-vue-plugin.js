import Api from '~assets/rest-api/api';


function install(Vue) {
  const api = new Api();
  Vue.prototype.$res = api.loadConfig();
  Vue.prototype.$api = id => api.loadConfig(id);
}

export default install;
