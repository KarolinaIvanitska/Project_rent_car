// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCars } from "../../redux/cars/operations";
// import { selectFilteredCars } from "../../redux/selectors";
// import CarItem from "../CarItem/CarItem";

import { useDispatch, useSelector } from "react-redux";
import { selectFilter, selectFilteredCars } from "../../redux/selectors";
import CardItem from "../CardItem/CardItem";
import { useEffect } from "react";
import { fetchCars } from "../../redux/cars/operations";
import { setCars, setFilter } from "../../redux/cars/actions";

const CarList = () => {
  const cars = useSelector(selectFilteredCars);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    const loadCars = async () => {
      const response = await fetchCars();
      dispatch(setCars(response.data));
    };
    loadCars();
  }, [dispatch]);
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilter({ [name]: value }));
  };
  return (
    <>
      <ul>
        <label>
          Make:
          <input
            type="text"
            name="make"
            value={filter.make}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={filter.price}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Mileage:
          <input
            type="number"
            name="mileage"
            value={filter.mileage}
            onChange={handleFilterChange}
          />
        </label>
        {cars.map((car) => (
          <CardItem key={car.id} car={car} />
        ))}
        {cars.length > 12 && <button>Load more</button>}
        <button>Search</button>
      </ul>
    </>
  );
};
export default CarList;
