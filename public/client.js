function fetchReviewDetails(reviewId) {
  const url = new URL('/api/reviews/get-one-review', 'http://localhost:8080');
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
      userReview.setAttribute('user-id', data.user_id);
      userReview.setAttribute('review-date', data.review_date);
      userReview.setAttribute('review-text', data.review_text);
      reviewContainer.appendChild(userReview);
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
}

function fetchNLatestReviewsOfParty(partyID, num) {
  const url = new URL('/api/reviews/get-latest-reviews', 'http://localhost:8080');
  url.searchParams.append('party_id', partyID);
  url.searchParams.append('N', num);

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Assuming there's a div with the id 'reviews-container' where we want to display the reviews
      const reviewsContainer = document.getElementById('reviews-container');
      reviewsContainer.innerHTML = ''; // Clear existing reviews
      
      data.forEach(review => {
        // Create elements for each piece of data you want to display
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';
        
        // Assuming the review object contains 'username', 'party_title', and 'review_id'
        reviewElement.innerHTML = `
          <h3>${review.party_info.party_title}</h3>
          <p>Review by ${review.user_info.username}</p>
          <p>Review ID: ${review.review_text}</p>
          // Add more details from the review as needed
        `;

        // Append the review element to the container
        reviewsContainer.appendChild(reviewElement);
      });

    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
}