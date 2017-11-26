export default class {
  load(routing) {
    this.routing = {
      route: '',
      load: '',
      get: '{resource_id}',
      cget: '',
      send: '',
      post: '',
      save: '',
      remove: '',
      delete: '{resource_id}',
      put: '{resource_id}',
      patch: '{resource_id}',
      option: '{resource_id}',
    };
    Object.assign(this.routing, routing);
  }

  setParams(params, url) {
    const result = url.replace(/\{(.*?)\}/ig, (match, token) => {
      const slug = params[token];
      delete params[token];
      return slug;
    });
    // console.log('url: ', [this.root, result, params]);
    return {
      url: result,
      query: params,
    };
  }

  getUrl(method, params, url) {
    // this.refresh();
    const { route } = this.routing;
    let result = url;
    if (!url) {
      const action = this.routing[method];
      result = route || '';
      if (result && action) {
        result = `${result}/${action}`;
      } else if (action) {
        result = action;
      }
    }
    return this.setParams(params, result);
  }
}
