import { useDispatch, useSelector } from "react-redux";

import { addFavorite, removeFavorite } from "../../redux/cars/actions";
import { selectFavorites } from "../../redux/selectors";

const CardItem = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some((fav) => fav.id === car.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(car.id));
    } else {
      dispatch(addFavorite(car));
    }
  };

  return (
    <div>
      <h2>{car.name}</h2>
      <p>Price: {car.price}</p>
      <p>Mileage: {car.mileage.toLocaleString()}</p>
      <button
        onClick={toggleFavorite}
        style={{ color: isFavorite ? "red" : "black" }}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      <button>Learn more</button>
    </div>
  );
};

export default CardItem;
