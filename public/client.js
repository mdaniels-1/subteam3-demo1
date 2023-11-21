function formatDate(dateString) {
  // Create a new instance of DateTimeFormat with desired options
  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short', // omit time zone information if not needed
    hour12: true // Use 12-hour time (use `false` for 24-hour format)
  });
  // Convert the input date string to a Date object
  const date = new Date(dateString);
  // Use the formatter to get the formatted date string
  return formatter.format(date);
}

function fetchOneReviewByReviewID(reviewId) {
  const url = new URL('/api/reviews/get-one', 'http://localhost:8080');
  url.searchParams.append('review_id', reviewId);

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const reviewContainer = document.getElementById('reviews-container');
      const userReview = document.createElement('user-review');
      userReview.setAttribute('username', data.user_id);
      userReview.setAttribute('review-date', data.review_date);
      userReview.setAttribute('review-text', data.review_text);
      reviewContainer.appendChild(userReview);
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
}

function fetchNLatestReviewsByID(partyID, userID, num) {
  const url = new URL('/api/reviews/get-latest-n', 'http://localhost:8080');

  if (partyID) {
    url.searchParams.append('party_id', partyID);
  }
  if (userID) {
    url.searchParams.append('user_id', userID);
  }
  url.searchParams.append('N', num);

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const reviewsContainer = document.getElementById('reviews-container');
      reviewsContainer.innerHTML = ''; // Clear existing reviews

      data.forEach(review => {
        const userReview = document.createElement('user-review');
        userReview.setAttribute('username', review.username);
        userReview.setAttribute('review-date', formatDate(review.review_date));
        userReview.setAttribute('rating', review.rating);
        userReview.setAttribute('party-name', review.party_name);
        userReview.setAttribute('review-text', review.review_text);

        // userReview.innerHTML = `<div>...</div>`; 
        reviewsContainer.appendChild(userReview);
      });
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
}
