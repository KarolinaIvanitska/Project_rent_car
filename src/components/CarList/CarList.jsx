import { useDispatch, useSelector } from "react-redux";
import { selectFilteredCars } from "../../redux/selectors";
import CarItem from "../CarItem/CarItem";
import { useEffect } from "react";
import { fetchCars } from "../../redux/cars/operations";

const CarList = () => {
  const filteredCars = useSelector(selectFilteredCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (!filteredCars || filteredCars.length === 0) {
    return <h1>No cars to show...</h1>; // Використовуємо JSX-елемент для повідомлення
  }

  return (
    <ul>
      {filteredCars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </ul>
  );
};

export default CarList;
