async function fetchUserData() {
    try {
        const response = await fetch('https://random-data-api.com/api/v2/users');
        const data = await response.json();
        displayUserData(data);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

function displayUserData(user) {
    const userDetails = document.getElementById('user-details');
    userDetails.innerHTML = `
        <img src="${user.avatar}" alt="User Photo" class="user-photo">
        <p><strong>Name:</strong> ${user.first_name} ${user.last_name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Phone number:</strong> ${user.phone_number}</p>
        <p><strong>Address:</strong> ${user.address.street_address}, ${user.address.city}, ${user.address.state}, ${user.address.country}</p>
        <p><strong>Employment:</strong> ${user.employment.title},
    `;
}

document.addEventListener('DOMContentLoaded', fetchUserData);