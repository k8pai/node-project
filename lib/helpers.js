export const isUser = async (username, password) => {
	return await fetch(`/api/users?name=${username}&pass=${password}`)
		.then((data) => data.json())
		.then((res) => {
			console.log(res.user);
			return res.user;
		})
		.catch((err) => {
			console.log('error: ', err);
			return null;
		});
};

// export const isUserWrongPass = async (username, password) => {
// 	return await fetch(`/api/users?name=${username}&pass=${password}`)
// }
