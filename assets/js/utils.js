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
      const logo = document.getElementById('brand-logo');

      const currentLocation = window.location.pathname;
      const currentHtmlFile = () => {
        const arr = currentLocation.split('/');
        return arr[arr.length - 2];
      };

      if (currentHtmlFile() === 'pages') {
        logo.src = '../assets/img/logo.png';
      } else {
        logo.src = '../../assets/img/logo.png';
      }
    }
  }
}

window.customElements.define('html-include', HTMLInclude);
