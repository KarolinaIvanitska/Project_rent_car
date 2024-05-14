import { useSelector } from "react-redux";
import { selectFilteredCars } from "../../redux/selectors";
import CarItem from "../CarItem/CarItem";

const CarList = () => {
  const filteredCars = useSelector(selectFilteredCars);
  if (!filteredCars.length) {
    return "No cars to show...";
  }
  return (
    <>
      <ul>
        {filteredCars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>
    </>
  );
};

export default CarList;
