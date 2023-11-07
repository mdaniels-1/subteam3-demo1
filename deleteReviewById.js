async function deleteReviewById(reviewId) {
    const apiUrl = `http://localhost:8080/api/deletereview/${reviewId}`;
  
    try {
        // Specify the method in the fetch options
        const response = await fetch(apiUrl, { method: 'DELETE' });
        
        // Check if the response is not ok
        if (!response.ok) {
            // The server responded with a status in the 4xx-5xx range
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to delete review');
        }
  
        // If you expect a response body (you may not if you're just deleting)
        const result = await response.json();
        return result;
  
    } catch (error) {
      console.error(`Could not delete review with id ${reviewId}:`, error);
    }
  }