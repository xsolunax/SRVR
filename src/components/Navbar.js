import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
	return (
		<div className="navbar">
			<Link to="/" className="logo"></Link>
			<div className="nav-buttons">
				<Link to="/merch">Merch</Link>
				<Link to="/news">News</Link>
				<Link to="/schedule">Schedule</Link>
				<Link to="/teams">Teams</Link>
			</div>
			<div className="social-medias">
				<a href="https://www.discord.gg/srvr" target="_new">
					<FontAwesomeIcon icon={faDiscord} size="xl" style={{ color: '#ffffff' }} />
				</a>
				<a href="https://www.instagram.com/srvr.esports/" target="_new">
					<FontAwesomeIcon icon={faInstagram} size="xl" style={{ color: '#ffffff' }} />
				</a>
				<a href="https://twitter.com/SRVR_Esports" target="_new">
					<FontAwesomeIcon icon={faTwitter} size="xl" style={{ color: '#ffffff' }} />
				</a>
				<a href="https://www.facebook.com/SRVR.Esports/" target="_new">
					<FontAwesomeIcon icon={faFacebook} size="xl" style={{ color: '#ffffff' }} />
				</a>
				<a href="https://www.tiktok.com/@srvr.esports" target="_new">
					<FontAwesomeIcon icon={faTiktok} size="xl" style={{ color: '#ffffff' }} />
				</a>
			</div>
		</div>
	);
};

export default Navbar;
