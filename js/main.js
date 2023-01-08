const requestUrl = 'https://reqres.in/api/users?page=2';
const postWrapper = document.getElementById('post-wrapper');
let users = [];

const createTemplate = data => {
	return template = `
		<div class="wrapper-post">
			<div class="wrapper__adres"><img class="img" src="${data.avatar}" alt="#"</div>
			<div class=" wrapper__name">
				<div class="id">ID: ${data.id}</div>
				<div class="email">email: ${data.email}</div>
				<div class="first_name">First_name: ${data.first_name}</div>
				<div class="last_name">last_name: ${data.last_name}</div>
			</div>
		</div>
	`
}

const getUsers = url => {
	fetch(url)
		.then(response => response.json())
		.then(json => {
			users = json.data;
			console.log(json);
			users.forEach(item =>{
				postWrapper.innerHTML += createTemplate(item)
			})
		})
}

getUsers(requestUrl);