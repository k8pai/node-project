import { registerUser } from '../../database/controller';

export default async function handler(req, res) {
	try {
		registerUser(req, res);
	} catch (error) {
		res.status(404).json({ error: 'Error from catch register' });
	}
}
