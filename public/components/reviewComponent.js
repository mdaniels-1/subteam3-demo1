class UserReview extends HTMLElement {
  constructor() {
    super();
    this.user_id = "";
    this.review_date = "";
    this.review_text = "";
  }

  connectedCallback() {
    this.user_id = this.getAttribute("user-id");
    this.review_date = this.getAttribute("review-date");
    this.review_text = this.getAttribute("review-text");
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
              <div id="user-id" class="text">${this.user_id}</div>
              <div id="review-date" class="text">${this.review_date}</div>
          </div>
          <button id="comment-menu" class="comment_menu" type="button">⋮</button>
          <div id="menu-container" class="menu_container" style="display: none">
              <ul id="menu" class="menu">
                  <li><button id="edit" type="button">Edit</button></li>
                  <li><button id="delete" type="button">Delete</button></li>
              </ul>
          </div>
          <div id="modify-buttons" style="display: none">
              <button id="save" class="modify_button">Save</button>
              <button id="cancel" class="modify_button">Cancel</button>
          </div>
      </div>
      <div id="review-text-container" class="review_text_container">
          <p id="review-text" class="text" contenteditable="false">${this.review_text}</p>
      </div>
    </div>

      `;

      //give access to custom menu object (via script insert)
      const script = document.createElement('script');
      script.src = '../src/reviewMenu.js';
      document.body.appendChild(script);

      // create script/event listener that will toggle menu on button click
      const elipsisButton = this.querySelector('#comment-menu');
      const menu = this.querySelector('#menu-container');
      elipsisButton.addEventListener('click', () => {
        menu.style.display = (menu.style.display === 'none') ? 'flex' : 'none';

      });

      //ADD EVENT LISTENERS FOR MENU
      const content = this.querySelector('#review-text'); // this is the text content of the review
      let originalText = content.textContent;
      const modifyingButtons = this.querySelector('#modify-buttons');
      const saveButton = this.querySelector('#save');
      const cancelButton = this.querySelector('#cancel');


      //EDIT REVIEW
      const editButton = this.querySelector('#edit');
      editButton.addEventListener('click', () => {
        console.log("edit");

        // set up for review changing
        modifyingButtons.style.display = "flex";
        menu.style.display = "none";
        elipsisButton.style.display = "none";

        content.parentElement.style.border = "2px solid blue"; // creates border for text area
        content.contentEditable = true;

      });

      // DELETE REVIEW
      const deleteButton = this.querySelector('#delete');
      deleteButton.addEventListener('click', () => {
        console.log("delete");
        menu.style.display = "none";
        // button.disabled = false;

      });

      // SAVE EDIT
      saveButton.addEventListener('click', () => {
        console.log(content.textContent);
        console.log('original: ', originalText);
        originalText = content.textContent;
        content.contentEditable = false; // stop edits

        // reset display of buttons
        elipsisButton.style.display = "flex";
        modifyingButtons.style.display = "none";

        //send request to server
      });

      // CANCEL EDIT
      cancelButton.addEventListener('click', () => {
        content.textContent = originalText;
        console.log(content.textContent);
        content.contentEditable = false; // stop edits

        // reset display of buttons
        elipsisButton.style.display = "flex";
        modifyingButtons.style.display = "none";
      });

    
  }

}

customElements.define("user-review", UserReview)

// NOTE: CUSTOM ELEMENTS NEED AT LEAST 1 HYPHEN