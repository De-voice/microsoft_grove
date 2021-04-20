import React from "react";
import {Link} from "react-router-dom"

function NavTab() {
	return (
		<>
			<h1 className="mt-8">My Music</h1>
			<nav className="mt-5 ">
				<ul className="flex ">
					<li>
						<Link to="/">Songs</Link>
					</li>
					<li className="ml-6 ">
						<Link to="/artists">Artists</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default NavTab;
