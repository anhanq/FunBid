class Auth {
  constructor () {
    this.listeners = [];
    this.accessToken = localStorage.getItem('accessToken');
  }

  isAuth () {
    return !!this.getAccessToken();
  }

  setAccessToken (accessToken) {
    this.accessToken = accessToken;
    localStorage.setItem('accessToken', accessToken);
    this.listeners.forEach(listener => listener());
  }

  getAccessToken () {
    return this.accessToken;
  }

  addListener (listener) {
    this.listeners.push(listener);
    return () => this.removeListener(listener);
  }

  removeListener (listener) {
    const index = this.listeners.indexOf(listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }
}

export default new Auth();
