async function fetchUserInfo() {
    const username = document.getElementById('fetchUsername').value;
    const apiUrl = `http://localhost:8000/api/userinfo?username=${username}`;
    
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Failed to fetch user information');
        }

        const data = await response.json();
        document.getElementById('displayEmail').textContent = data.email || 'N/A';
        document.getElementById('displayAge').textContent = data.age || 'N/A';
        document.getElementById('displayPhone').textContent = data.phone || 'N/A';

    } catch (error) {
        alert(error.message);
    }
}

async function submitNewUser() {
    const username = document.getElementById('inputUsername').value;
    const age = parseInt(document.getElementById('inputAge').value);
    const email = document.getElementById('inputEmail').value;
    const phone = document.getElementById('inputPhone').value;

    const apiUrl = 'http://localhost:8000/api/adduser';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, age, email, phone })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error);
        }

        alert('User added successfully');
    } catch (error) {
        alert('Error: ${error.message}');
    }
}



// async function submitData() {
//     const username = document.getElementById('inputUsername').value;
//     const age = document.getElementById('inputAge').value;
//     const email = document.getElementById('inputEmail').value;
//     const phone = document.getElementById('inputPhone').value;
//     const apiUrl = 'http://localhost:8000/api/adduser';
    
//     try {
//         const response = await fetch(apiUrl, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ username, age, email, phone })
//         });
        
//         if (!response.ok) {
//             throw new Error('Failed to add user');
//         }

//         alert('User added successfully');

//     } catch (error) {
//         alert(error.message);
//     }
// }
