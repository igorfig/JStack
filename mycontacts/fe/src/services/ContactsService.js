
import HttpClient from './utils/HttpClient';

class ContactsService {
	constructor() {
		this.httpClient = new HttpClient('http://localhost:3002');
	}

	async listContacts(orderBy = 'asc') {
		return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
	}
}

export default new ContactsService();