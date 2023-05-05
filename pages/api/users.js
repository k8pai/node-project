import { findUser } from '../../database/controller';

export default async function handler(req, res) {
	try {
		findUser(req, res);
	} catch (error) {
		res.status(404).json({ error: 'Error from catch register' });
	}
}
