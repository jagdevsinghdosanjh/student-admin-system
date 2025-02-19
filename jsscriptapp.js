document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
  
    const result = await response.json();
    if (response.ok) {
      document.getElementById('auth-result').innerText = 'Login successful!';
      localStorage.setItem('token', result.token);
      const role = parseJwt(result.token).role;
      if (role === 'admin') {
        document.getElementById('admin-section').style.display = 'block';
      } else {
        document.getElementById('student-section').style.display = 'block';
      }
      document.getElementById('auth-section').style.display = 'none';
    } else {
      document.getElementById('auth-result').innerText = `Error: ${result.message}`;
    }
  });
  
  function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }
  
  // Add more event listeners for admin and student functionalities
  