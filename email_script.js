
document.getElementById('login-btn').addEventListener('click', function (e) {
  e.preventDefault(); 

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  
  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return;
  }
  
  alert('Login successful!'); 
});
