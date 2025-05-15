
//include images into your bundle

// 6.- Importamos nuestros componentes 
import { Jumbotron } from "./Jumbotron.jsx";
import { Navbar } from "./Navbar.jsx";


const Home = () => {

	return (
		<>
			<Navbar />
			<Jumbotron title="Hola!" />
		</>
	)
};

export default Home