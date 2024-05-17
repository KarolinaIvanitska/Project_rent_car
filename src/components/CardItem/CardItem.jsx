// import { useDispatch, useSelector } from "react-redux";
// import { selectFavorites } from "../../redux/selectors";
// import { addFavorite, removeFavorite } from "../../redux/cars/actions";

// const CardItem = ({ car }) => {
//   const favorites = useSelector(selectFavorites);
//   const dispatch = useDispatch();
//   const isFavorite = favorites.some((fav) => fav.id === car.id);

//   const toggleFavorite = () => {
//     if (isFavorite) {
//       dispatch(removeFavorite(car.id));
//     } else {
//       dispatch(addFavorite(car));
//     }
//   };
//   const {
//     img,
//     model,
//     make,
//     year,
//     rentalPrice,
//     address,
//     rentalCompany,
//     type,
//     mileage,
//     functionalities,
//   } = item;
//   return (
//     <>
//       <li>
//         <img src={img} alt={model} width="274" height="268" />
//         <div>
//           <div>
//             <h3>
//               {make} {model}, {year}
//             </h3>
//             <p>{rentalPrice}</p>
//           </div>
//           <p>
//             {address} | {rentalCompany} | {type} | {model} | {mileage} |
//             {functionalities[0]}
//           </p>
//         </div>
//       </li>
//     </>
//   );
// };

// export default CardItem;

import PropTypes from "prop-types";
import "./CardItem.module.css";

const CarItem = ({ car }) => {
  return (
    <li className="car-item">
      <img src={car.img} alt={`${car.make} ${car.model}`} />
      <div className="car-details">
        <h3>
          {car.make} {car.model}
        </h3>
        <p>
          <strong>Year:</strong> {car.year}
        </p>
        <p>
          <strong>Type:</strong> {car.type}
        </p>
        <p>
          <strong>Price:</strong> ${car.rentalPrice} per hour
        </p>
        <p>
          <strong>Mileage:</strong> {car.mileage.toLocaleString()} km
        </p>
        <p>
          <strong>Fuel Consumption:</strong> {car.fuelConsumption}
        </p>
        <p>
          <strong>Engine Size:</strong> {car.engineSize}
        </p>
        <p>
          <strong>Rental Company:</strong> {car.rentalCompany}
        </p>
        <p>
          <strong>Address:</strong> {car.address}
        </p>
        <p>
          <strong>Rental Conditions:</strong> {car.rentalConditions}
        </p>
        <p>
          <strong>Description:</strong> {car.description}
        </p>
        <p>
          <strong>Accessories:</strong> {car.accessories.join(", ")}
        </p>
        <p>
          <strong>Functionalities:</strong> {car.functionalities.join(", ")}
        </p>
        <button onClick={() => handleAddToFavorites(car.id)}>
          ❤️ Add to Favorites
        </button>
        <button onClick={() => handleLearnMore(car.id)}>Learn More</button>
      </div>
    </li>
  );
};

CarItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fuelConsumption: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
    rentalPrice: PropTypes.number.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalConditions: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
  }).isRequired,
};

const handleAddToFavorites = (id) => {
  // Додайте обробник для додавання до улюблених
  console.log(`Add car with id ${id} to favorites`);
};

const handleLearnMore = (id) => {
  // Додайте обробник для відображення додаткової інформації
  console.log(`Learn more about car with id ${id}`);
};

export default CarItem;
