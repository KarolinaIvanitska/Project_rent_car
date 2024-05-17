import { useDispatch, useSelector } from "react-redux";
import { selectFilteredCars } from "../../redux/selectors";
import CardItem from "../CardItem/CardItem";
import { useEffect, useState } from "react";
import { fetchCars } from "../../redux/cars/operations";

const CarList = () => {
  const cars = useSelector(selectFilteredCars);
  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars({ page, limit }));
  }, [dispatch, page, limit]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <>
      <ul>
        {cars.map((car) => (
          <CardItem key={car.id} car={car} />
        ))}
        <button onClick={handleLoadMore}>Load more</button>
      </ul>
    </>
  );
};
export default CarList;
