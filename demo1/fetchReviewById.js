async function fetchReviewById(reviewId) {
  const apiUrl = `http://localhost:8080/api/reviews/${reviewId}`;
  
  try {
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
          throw new Error('Failed to fetch review information');
      }

      const review = await response.json();
      return review;

  } catch (error) {
    console.error(`Could not fetch review with id ${reviewId}:`, error);
  }
}

  module.exports = fetchReviewById;