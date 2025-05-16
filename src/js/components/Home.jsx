import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";


const Home = () => {

	return (
		<>
			<Navbar />
			<div className="container d-flex flex-wrap gap-4 justify-content-center align-content-center">
				<Jumbotron />
				<Card imageUrl="https://images.unsplash.com/photo-1746817066768-c395734a1430?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8cVBZc0R6dkpPWWN8fGVufDB8fHx8fA%3D%3D" title="Adibase" description="Más que sneakers, es cultura callejera. Mix perfecto entre estilo raw y rendimiento. Lleva la ciudad en tus pies, domina el asfalto." />
				<Card imageUrl="https://t4.ftcdn.net/jpg/03/89/92/27/360_F_389922799_AZFyYZguDeEMoUdoROgEiJqfDPih1S12.jpg" title="Myke" description="Actitud sobre el asfalto. Innovación en tus pies, fuego en tu actitud. La calle es tu canvas, los sneakers tu firma." />
				<Card imageUrl="https://about.puma.com/sites/default/files/styles/dd_hero_tablet/public/media/news/images/puma-hyrox-4.png?itok=XVRhr1ur" title="Espuma" description="Rebeldía con estilo. Rendimiento que grita en las calles. Tus zapatos, tu revolución personal." />
				<Card />
			</div>
		</>
	)
};

export default Home