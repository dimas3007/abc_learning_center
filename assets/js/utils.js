class HTMLInclude extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = 'Loading...';
    this.loadContent();
  }

  async loadContent() {
    const source = this.getAttribute('src');
    if (!source) {
      throw new Error('No src attribute given.');
    }
    const response = await fetch(source);
    if (response.status !== 200) {
      throw new Error(`Could not load resource: ${source}`);
    }

    const content = await response.text();
    this.innerHTML = content;

    if (content) {
      $('#navbar').menu();
      $('#navbar-user').menu();

      const btnLogin = $('.btn-login');
      const userLogin = $('.user-login');
      const user = localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : {};

      if (Object.keys(user).length) {
        btnLogin.hide();
        userLogin.show();
        userLogin.find('.text-highlight').html(user.username);
      } else {
        btnLogin.show();
        userLogin.hide();
      }

      $('[logout]').click(function () {
        localStorage.setItem('user', []);
      });
    }
  }
}

window.customElements.define('html-include', HTMLInclude);
