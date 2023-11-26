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

function login(username, password) {
  const url = new URL('/api/users/login', 'http://localhost:8080');
  url.searchParams.append('username', username);
  url.searchParams.append('password', password);

  fetch(url)
    .then(response => {
      const databaseResponse = document.getElementById('database-response');
      if (!response.ok) {
        sessionStorage.setItem('user_id', '');
        databaseResponse.textContent = 'Login failed. Please try again.';
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const databaseResponse = document.getElementById('database-response');
      if (data.user_id) {
        sessionStorage.setItem('user_id', data.user_id);
        databaseResponse.textContent = 'Login successful. User_id: ' + data.user_id;
      } else {
        console.error('Login failed:', data);
      }
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}

function fetchLatestParties(num) {
  const url = new URL('/api/parties/get-latest-n', 'http://localhost:8080');
  url.searchParams.append('N', num);
  
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Assuming 'data' is an array of party objects or names
      sessionStorage.setItem('party_id_array', data);
      populateDropdown('dev-party-dropdown', data);
    })
    .catch(error => {
      console.error('Fetching error:', error);
    });
}

function populateDropdown(dropdownId, parties) {
  // Get the select element by its ID
  const select = document.getElementById(dropdownId);
  select.innerHTML = ''; // Clear existing options

  // Create and append the options
  parties.forEach(party => {
    const option = document.createElement('option');
    
    option.textContent = party.Name || party // use 'party' if it's a string
    //option.value = party.id || party; // use 'party' if it's a string

    select.appendChild(option);
  });
}

function submitReview(partyID, userID, rating, reviewTitle, reviewText) {
  const url = new URL('/api/reviews/create', 'http://localhost:8080');
  url.searchParams.append('user_id', userID);
  url.searchParams.append('party_id', partyID);
  url.searchParams.append('rating', rating);
  url.searchParams.append('review_title', reviewTitle);
  url.searchParams.append('review_text', reviewText);
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
  url.searchParams.append('party_id', partyID);
  url.searchParams.append('user_id', userID);
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
        userReview.setAttribute('review-id', review._id);
        userReview.setAttribute('review-title', review.review_title);
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
