import axios from 'axios';
import _ from 'underscore';

import Router from './restRouter';

export default class {
  constructor() {
    this.router = new Router();
  }

  setRouter(routing) {
    this.router.load(routing);
    return this;
  }

  setConfig(base, key) {
    this.config = {
      baseURL: base,
      headers: {
        Authorization: `Bearer ${key}`,
      },
    };
  }

  setDelay(sec) {
    this.wait = sec * 1000;
    if (NODE_ENV == 'production') {
      this.wait = 0; //
    }
  }

  setUrl(method, params, url) {
    const { url: result, query } = this.router.getUrl(method, params, url);
    this.config.params = query || {};
    return result;
  }

  get(params, url) {
    url = this.setUrl('get', params, url);
    return this.delay(axios.get(url, this.config), 0);
  }
  load(params, url) {
    url = this.setUrl('load', params, url);
    return this.delay(axios.get(url, this.config), 0);
  }
  cget(params, url) {
    url = this.setUrl('cget', params, url);
    return this.delay(axios.get(url, this.config), 0);
  }
  send(params, url) {
    url = this.setUrl('send', params, url);
    return this.delay(axios.get(url, this.config), 0);
  }
  post(data, params, url) {
    url = this.setUrl('post', params, url);
    return this.delay(axios.post(url, data, this.config), 0);
  }
  save(data, params, url) {
    url = this.setUrl('save', params, url);
    return this.delay(axios.post(url, data, this.config), 0);
  }
  remove(data, params, url) {
    url = this.setUrl('remove', params, url);
    return this.delay(axios.post(url, data, this.config), 0);
  }
  delete(params, url) {
    url = this.setUrl('delete', params, url);
    return this.delay(axios.delete(url, this.config), 0);
  }
  put(data, params, url) {
    url = this.setUrl('put', params, url);
    return this.delay(axios.put(url, data, this.config), 0);
  }
  patch(data, params, url) {
    url = this.setUrl('patch', params, url);
    return this.delay(axios.patch(url, data, this.config), 0);
  }

  request(method, action, data, params, url) {
    // this.config.method = method;
    // this.config.url = this.setUrl(action, url);
    // this.config.data = data;
    // this.config.params = params;
    // return this.delay(axios.request(this.config), 0);
    url = this.setUrl(action, params, url);
    if (data) {
      return this.delay(axios[method](url, data, this.config), 0);
    }
    return this.delay(axios[method](url, this.config), 0);
  }

  delay(result, wait) {
    let msec = wait || this.wait;
    if (msec < this.wait) {
      msec = this.wait;
    }
    if (msec == 0 || typeof Promise == 'undefined') {
      return result;
    }
    return new Promise((resolve) => {
      _.delay(resolve, msec, result);
    });
  }
}
