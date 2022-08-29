import React from "react";
import styles from "../Navbar/Navbar.module.css";

const Footer = () => {

	return (
		<div className={styles.div__footer}>
			<footer className={styles.footer}>
				Proyecto desarrollado por<strong> José Fabio Espinal.</strong>
			</footer>
		</div>
	);
};

export default Footer;