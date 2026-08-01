

const foodItems = [
  {
    name: "Burger",
    price: "₹120",
    image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
  },
  {
    name: "Cock",
    price: "₹180",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  },
  {
    name: "Pizza",
    price: "₹250",
    image: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png",
  },
];

function Resturant() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>

      <div className="cards">
        {foodItems.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} />
            <p>{item.price}</p>
          </div>
        ))}
      </div>

      <p className="description">
        This hotel is good for food.
      </p>
    </div>
  );
}

export default Resturant;