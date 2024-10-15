document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin123') {
        alert('Login successful!');
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('signupform').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const messageElement = document.getElementById('message');
    if (username && email && password) {
        messageElement.textContent = 'Sign up successful!';
        messageElement.className = 'message success';
        messageElement.style.display = 'block';
        setTimeout(() => {
            window.location.href = 'index.html'; 
        }, 2000);
    } else {
        messageElement.textContent = 'Please fill all fields correctly.';
        messageElement.className = 'message error';
        messageElement.style.display = 'block';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderForm');
    const orderMessage = document.getElementById('orderMessage');

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const customerName = document.getElementById('customerName').value;
        const menuItem = document.getElementById('menuItem').value;
        const quantity = document.getElementById('quantity').value;

        if (customerName && menuItem && quantity) {
            orderMessage.innerHTML = `<p>Order placed successfully!<br>Customer: ${customerName}<br>Item: ${menuItem}<br>Quantity: ${quantity}</p>`;
            orderMessage.style.color = 'green';
        } else {
            orderMessage.innerHTML = '<p style="color: red;">Please fill out all fields.</p>';
        }
    });
});
