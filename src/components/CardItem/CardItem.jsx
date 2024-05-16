import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selectors";
import { addFavorite, removeFavorite } from "../../redux/cars/actions";

const CardItem = ({ car }) => {
  const { make, price, mileage } = car;
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const isFavorite = favorites.some((fav) => fav.id === car.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(car.id));
    } else {
      dispatch(addFavorite(car));
    }
  };
  return (
    <li>
      <h2>{make}</h2>
      <p>{mileage}</p>
      <p>{price}</p>
      <button
        onClick={toggleFavorite}
        style={{ color: isFavorite ? "red" : "black" }}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </li>
  );
};

export default CardItem;
