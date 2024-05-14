const CarItem = ({ car }) => {
  const { name, img, price } = car;
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <p>{price}</p>
    </div>
  );
};
export default CarItem;
