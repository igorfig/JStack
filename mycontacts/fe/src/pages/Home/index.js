import { Link } from 'react-router-dom';
import { Container, InputSearchContainer, Header, ListContainer, Card } from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
	return (
		<Container>
			<InputSearchContainer>
				<input type="text" placeholder="Pesquise pelo nome..."/>
			</InputSearchContainer>

			<Header>
				<strong>3 contatos</strong>
				<Link to="/new">Novo contato</Link>
			</Header>

			<ListContainer>
				<header>
					<button type="button" className="sort-button">
						<span>Nome</span>
						<img src={arrow} alt="Arrow" />
					</button>
				</header>


				<Card>
					<div className="info">
						<div className="contact-name">
							<strong>Igor Figueiredo</strong>
							<small>instagram</small>
						</div>
						<span>igorfs@gmail.com</span>
						<span>(31) 99999-9999</span>
					</div>

					<div className="actions">
						<Link to="/edit/4546454">
							<img src={edit} alt="Edit" />
						</Link>

						<button>
							<img src={trash} alt="Trash" />
						</button>	
					</div>	
				</Card>
			</ListContainer>

		</Container>	
	);
}