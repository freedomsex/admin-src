import hosts from './config_dev';

if (process.env.NODE_ENV === 'production') {
  Object.assign(hosts, {
    a4sex: '//a4sex.net/',
  });
}

const defaultConfig = {
  host: '/',
  version: null,
  headers: {
    accessKey: null,
  },
  routing: null,
};

export default {
  default: defaultConfig,
  a4sex: Object.assign(defaultConfig, {
    host: hosts.a4sex,
  }),
};
