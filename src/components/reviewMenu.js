class ReviewMenu extends HTMLElement {
    constructor() {
      super();
  
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
        this.innerHTML = `
        <div>
            <p>Edit</p>
        </div>
        `;
    }
  }
  
  customElements.define("review-menu", ReviewMenu);
  
  // NOTE: CUSTOM ELEMENTS NEED AT LEAST 1 HYPHEN