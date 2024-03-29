import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Container, InputSearchContainer, Header, ListHeader, Card } from './styles';
import Modal from '../../components/Modal';
import Loader from '../../components/Loader';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import ContactsService from '../../services/ContactsService';

export default function Home() {
	const [contacts, setContacts] = useState([]);
	const [orderBy, setOrderBy] = useState('asc');
	const [searchTerm, setSearchTerm] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const filteredContacts = useMemo(() => contacts.filter(contact => (
		contact.name.toLowerCase().includes(searchTerm.toLowerCase())
	)), [contacts, searchTerm]);

	useEffect(() => {
		const loadContacts = async () => {
			try{
				setIsLoading(true);

				const contactsList = await ContactsService.listContacts(orderBy);
				
				setContacts(contactsList);
			} catch(error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		}

		loadContacts();
	}, [orderBy])

	const handleToggleOrderBy = () => {
		setOrderBy((prevState) => prevState === 'asc' ? 'desc' : 'asc');
	}

	const handleChangeSearchTerm = (event) => {
		setSearchTerm(event.target.value);
	}

	return (
		<Container>
			<Loader isLoading={isLoading}/>
			<InputSearchContainer>
				<input 
					type="text" 
					placeholder="Pesquise pelo nome..." 
					value={searchTerm}
					onChange={handleChangeSearchTerm}
					/>
			</InputSearchContainer>

			<Header>
				<strong>
					{filteredContacts.length}
					{filteredContacts.length === 1 ? ' contato' : ' contatos'}
				</strong>
				<Link to="/new">Novo contato</Link>
			</Header>

				{filteredContacts.length > 0 && (
					<ListHeader orderBy={orderBy}>			
						<button type="button" className="sort-button" onClick={handleToggleOrderBy}>
							<span>Nome</span>
							<img src={arrow} alt="Arrow"/>
						</button>
					</ListHeader>
			)}

			{filteredContacts.map((contact) => (
					<Card key={contact.id}>
						<div className="info">
							<div className="contact-name">
								<strong>{contact.name}</strong>
								{contact.category_name && (
									<small>{contact.category_name}</small>
								)}
							</div>
							<span>{contact.email}</span>
							<span>{contact.phone}</span>
						</div>

						<div className="actions">
							<Link to={`/edit/${contact.id}`}>
								<img src={edit} alt="Edit" />
							</Link>

							<button>
								<img src={trash} alt="Trash" />
							</button>	
						</div>	
					</Card>	
				))}

		</Container>	
	);
}