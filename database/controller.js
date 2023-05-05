import Users from '../model/user';
import connectMongo from './conn';

export const registerUser = async (req, res) => {
	try {
		connectMongo();
		const { username, password } = req.body;
		const newUser = await Users.create({
			name: username,
			password: password,
		});
		res.status(200).json({
			message: 'User created successfully',
			user: newUser,
		});
	} catch (error) {
		res.status(404).json({ error: 'Error occured' });
	}
};

export const findUser = async (req, res) => {
	try {
		connectMongo();
		const { name, pass } = req.query;
		const user = await Users.findOne({
			name: name,
			password: pass,
		});
		res.status(200).json({
			message: 'User found',
			user: user,
		});
	} catch (error) {
		res.status(404).json({ error: 'Error from catch' });
	}
};
