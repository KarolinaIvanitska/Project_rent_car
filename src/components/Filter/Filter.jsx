import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../../redux/cars/actions";
import { selectFilter } from "../../redux/selectors";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilter({ [name]: value }));
  };

  return (
    <div>
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
    </div>
  );
};

export default Filter;
