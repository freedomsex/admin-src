const hosts = {
  static: '//localhost:8080',
};

if (process.env.NODE_ENV === 'production') {
  Object.assign(hosts, {
    static: '',
  });
}

module.exports = hosts;
