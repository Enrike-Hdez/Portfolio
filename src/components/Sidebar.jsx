import "../styles/sidebar.css"
import { Link } from 'react-router-dom';

export default function Sidebar (){


	return (
		<div className="sidebar">
			<nav className="links">
				<Link to="/" className="sidebar-link">
					<img src="./imgs/home.svg" alt="Home" className="sidebar-icon" />
					Home
				</Link>
				<Link to="/projects" className="sidebar-link">
					<img src="./imgs/projects.svg" alt="Projects" className="sidebar-icon" />
					Projects
				</Link>
				<Link to="/about-me" className="sidebar-link">
					<img src="./imgs/about-me.svg" alt="About Me" className="sidebar-icon" />
					About Me
				</Link>
			</nav>
		</div>
	);
}