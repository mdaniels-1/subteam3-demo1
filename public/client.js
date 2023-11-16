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
