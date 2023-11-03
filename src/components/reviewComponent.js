class UserReview extends HTMLElement {
  constructor() {
    super();

    this.username = "";
    this.date = "";
    this.review = "";

  }

  connectedCallback() {
    this.username = this.getAttribute("username");
    this.date = this.getAttribute("date");
    this.review = this.getAttribute("review");


    this.render();
  }

  render() {

    // create inner html
    // NOTE: the script tag doesn't work here; it needs to be added via code
    this.innerHTML = `
    <div id="user-review-container" class="user_review_container">
      <div id="profile-container" class="profile_container">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" loading="lazy" width="52" id="profile_picture" alt="" class="pfp">
          <div id="review_user_data" class="review_user_data">
              <div id="username" class="text">${this.username}</div>
              <div id="time_of_post" class="text">${this.date}</div>
          </div>
          <button id="comment-menu" class="comment_menu" type="button">⋮</button>
          <div id="menu-container" class="menu_container">
              <ul id="menu" class="menu">
                  <li><button id="edit" type="button">Edit</button></li>
                  <li><button id="delete" type="button">Delete</button></li>
              </ul>
          </div>
      </div>
      <div id="review-text-container" class="review_text_container">
          <p id="review" class="text" contenteditable="false">${this.review}</p>
      </div>
    </div>

      `;

      //give access to custom menu object (via script insert)
      const script = document.createElement('script');
      script.src = '../src/reviewMenu.js';
      document.body.appendChild(script);

      // create script/event listener that will toggle menu on button click
      const button = this.querySelector('#comment-menu');
      const menu = this.querySelector('#menu-container');
      button.addEventListener('click', () => {
        menu.style.display = (menu.style.display === 'none') ? 'flex' : 'none';

      });

      //ADD EVENT LISTENERS FOR MENU
      const content = this.querySelector('#review'); // this is the text content of the review

      //EDIT
      const editButton = this.querySelector('#edit');
      editButton.addEventListener('click', () => {
        console.log("edit");
        // button.disabled = false;
      });

      // DELETE
      const deleteButton = this.querySelector('#delete');
      deleteButton.addEventListener('click', () => {
        console.log("delete");
        // button.disabled = false;

      });


    
  }

}

customElements.define("user-review", UserReview)

// NOTE: CUSTOM ELEMENTS NEED AT LEAST 1 HYPHEN