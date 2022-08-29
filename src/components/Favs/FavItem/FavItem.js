import React from "react";
import styles from "../../Products/Product/Product.module.css"
import trashCan_img from '../../../images/trash-can.png';

// Redux
import { connect } from "react-redux";
import {
	adjustItemQty,
	addToCart,
	removeFromFav,
	updProducts,
} from "../../../redux/Shopping/shopping-actions";


const FavItem = ({ item, addToCart, removeFromFav, updProducts }) => {


	function onClick_delete(productId) {
		removeFromFav(productId);
		updProducts(productId);
	};

	return (

		<div className={styles.product}>
			<img
				className={styles.product__image}
				src={item.image}
				alt={item.title}
			/>

			<div className={styles.product__details}>
				<p className={styles.details__title}>{item.title}</p>
				<p className={styles.details__desc}>{item.description}</p>
				<p className={styles.details__price}>Lps. {item.price}</p>
			</div>

			<div className={styles.product__buttons}>
				<button
					onClick={() => addToCart(item.id)}
					className={`${styles.buttons__btn} ${styles.buttons__add}`}
				>
					Ordenar
				</button>

				<div className={styles.center__div}>
					<button
						onClick={() => onClick_delete(item.id)}
						className={styles.actions__deleteItemBtn}>
						<img
							className={styles.delete__button_img}
							src={trashCan_img}
							alt="delte fav"
						/>
					</button>

				</div>

			</div>


		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (id) => dispatch(addToCart(id)),
		adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
		removeFromFav: (id) => dispatch(removeFromFav(id)),
		updProducts: (id) => dispatch(updProducts(id))
	};
};

export default connect(null, mapDispatchToProps)(FavItem);
