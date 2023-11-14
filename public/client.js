async function fetchReviewInfo() {
    const username = document.getElementById('fetchReview').value;
    const apiUrl = `http://localhost:8080/api/reviews/getreview?username=${username}`;
    
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Failed to fetch review information');
        }

        const data = await response.json();
        document.getElementById('displayUserID').textContent = data.user_id || 'N/A';
        document.getElementById('displayReviewDate').textContent = data.review_date || 'N/A';
        document.getElementById('displayReviewText').textContent = data.review_text || 'N/A';

    } catch (error) {
        alert(error.message);
    }
}