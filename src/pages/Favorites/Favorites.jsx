import { useSelector } from "react-redux";

import { selectFavorites } from "../../redux/selectors";
import CardItem from "../../components/CardItem/CardItem";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div>
      {favorites.length === 0 ? (
        <h1>No favorite cars to show...</h1>
      ) : (
        favorites.map((car) => <CardItem key={car.id} car={car} />)
      )}
    </div>
  );
};

export default Favorites;
