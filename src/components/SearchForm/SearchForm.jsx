import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/selectors";
import { setFilter } from "../../redux/cars/actions";
import { changeFilter } from "../../redux/filter/filterSlice";

const carBrands = ["Toyota", "Honda", "Ford", "BMW", "Mercedes"];
const priceOptions = [50, 100, 150, 200];
const mileageOptions = [5000, 10000, 15000, 20000];

const SearchForm = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilter({ [name]: value }));
  };
  const handleSearch = () => {
    const filter = {
      carBrands,
      priceOptions,
      mileageOptions,
    };
    dispatch(changeFilter(filter));
  };
  return (
    <div>
      <label>
        Car Brand:
        <select name="make" value={filter.make} onChange={handleFilterChange}>
          <option value="">Select a brand</option>
          {carBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </label>
      <label>
        Price/ 1 hour:
        <select name="price" value={filter.price} onChange={handleFilterChange}>
          <option value="">Select a price</option>
          {priceOptions.map((price) => (
            <option key={price} value={price}>{`$${price}`}</option>
          ))}
        </select>
      </label>
      <label>
        Mileage/ km:
        <select
          name="mileage"
          value={filter.mileage}
          onChange={handleFilterChange}
        >
          <option value="">Select a mileage</option>
          {mileageOptions.map((mileage) => (
            <option key={mileage} value={mileage}>
              {mileage.toLocaleString()}
            </option>
          ))}
        </select>
      </label>
      <button onClick={() => handleSearch()}>Search</button>
    </div>
  );
};

export default SearchForm;
