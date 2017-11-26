import configs from './config';
import Requests from './axiosRequestsWrapper';

export default class extends Requests {
  loadConfig(id) {
    const config = configs[id || 'default'];
    const { accessKey } = config.headers;

    this.setRoot(config);
    this.setConfig(this.root, accessKey);
    this.setRouter(config.routing);
    // Delay requests sec
    // [!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!]
    this.setDelay(NET_DELAY);
    return this;
  }

  setRoot({ host, version }) {
    const ver = version ? `v${version}/` : '';
    const root = host || '/';
    this.root = root + ver;
  }

  setBaseURL(url) {
    Object.assign(this.config, {
      baseURL: url,
    });
  }

  setAuthKey(key) {
    Object.assign(this.config.headers, {
      Authorization: `Bearer ${key}`,
    });
    this.key = key;
  }
}
