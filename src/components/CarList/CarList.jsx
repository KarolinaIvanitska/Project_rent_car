import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { selectFilteredCars } from "../../redux/selectors";
import CarItem from "../CarItem/CarItem";

const CarList = () => {
  const dispatch = useDispatch();
  const filteredCars = useSelector(selectFilteredCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (!filteredCars.length) {
    return <div>No cars to show...</div>;
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
