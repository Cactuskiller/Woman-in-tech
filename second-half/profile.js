document.getElementById('save-btn').addEventListener('click', function() {
    // Get the values from the input fields
    const city = document.getElementById('city').value;
    const phone = document.getElementById('phone').value;

    // Only allow updates to the city and phone number fields
    alert(`City: ${city}, Phone: ${phone} updated!`);

    // You can add logic here to send the data to a server or update in a database
});