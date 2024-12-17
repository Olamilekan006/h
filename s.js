const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	// Send the username and password to the server
	fetch('login.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: `username=${username}&password=${password}`
	})
	.then((response) => response.text())
	.then((message) => console.log(message))
	.catch((error) => console.error(error));
});

