export default function (req, res) {
	const { username, password } = req.body;

	console.log(req.body);
	if (username && password) {
		res.status(200).json({
			status: 'OK',
			username,
			password,
		});
	} else {
		res.status(400).json({ status: 'Error' });
	}
}
