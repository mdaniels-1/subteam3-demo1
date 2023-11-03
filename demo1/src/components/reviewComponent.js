class UserReview extends HTMLElement {
  constructor() {
    super();

    this.user_id = "";
    this.date = "";
    this.review_text = "comment here";
  }

  connectedCallback() {
    this.user_id = this.getAttribute("review_text");
    this.date = this.getAttribute("date");
    this.review_text = this.getAttribute("review_text");


    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="user-review-container" class="user_review_container">
      <div id="profile-container" class="profile_container">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" loading="lazy" width="52" id="profile_picture" alt="" class="pfp">
        <div id="review_user_data" class="review_user_data">
          <div id="user_id" class="text">${this.user_id}</div>
          <div id="time_of_post" class="text">${this.date}</div>
        </div>
        <button id="comment_menu" class="comment_menu" onclick="">⋮</a>
      </div>
      <div id="review-text-container" class="review_text_container">
        <p id="review_text" class="text">${this.review_text}</p>
      </div>
    </div>
      `;
  }
}

customElements.define("user-review", UserReview);

// NOTE: CUSTOM ELEMENTS NEED AT LEAST 1 HYPHEN