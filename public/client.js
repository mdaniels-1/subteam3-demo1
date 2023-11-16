function fetchReviewDetails(reviewId) {
    const url = new URL('/api/reviews/getreview', 'http://localhost:8080');
    url.searchParams.append('review_id', reviewId);
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Here you would use the data to populate your custom element or another part of your page
        //console.log(data);
        // For example, if you had a div with an id of 'review-container' where you want to display the review
        const reviewContainer = document.getElementById('customReviewsContainer');
        const userReview = document.createElement('user-review');
        userReview.setAttribute('user-id', data.user_id);
        userReview.setAttribute('review-date', data.review_date);
        userReview.setAttribute('review-text', data.review_text);
        reviewContainer.appendChild(userReview);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }
