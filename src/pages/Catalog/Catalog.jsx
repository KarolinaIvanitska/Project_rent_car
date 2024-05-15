import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCars } from "../../redux/cars/operations";
import { setCars } from "../../redux/cars/actions";
import { selectFilteredCars } from "../../redux/selectors";
import CardItem from "../../components/CardItem/CardItem";
import Filter from "../../components/Filter/Filter";

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectFilteredCars);

  useEffect(() => {
    const loadCars = async () => {
      const response = await fetchCars();
      dispatch(setCars(response.data));
    };
    loadCars();
  }, [dispatch]);

  return (
    <div>
      <Filter />
      <div>
        {cars.slice(0, 12).map((car) => (
          <CardItem key={car.id} car={car} />
        ))}
        {cars.length > 12 && <button>Load more</button>}
      </div>
    </div>
  );
};

export default Catalog;
