const api = {
  url: 'http://localhost:6105',
  suffix: '/api/',
  timeout: 3000,
  getBaseUrl() {
    return new URL(this.suffix, this.url).toString();
  },
  getFullUrl(route) {
    return this.getBaseUrl() + route;
  }
};
Object.freeze(api);

export default api;
