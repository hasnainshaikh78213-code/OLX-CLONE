import { useParams, Link } from "react-router-dom";
import products from "./data";

function ProductListing() {
  const { category } = useParams();
  const selectedProducts = products[category] || [];

  return (
    <div className="product-listing">
      <h2>Showing Products for: {category}</h2>
      {selectedProducts.length > 0 ? (
        <div className="product-grid">
          {selectedProducts.map((item) => (
            <Link
              key={item.id}
              to={`/Product/${item.id}`}
              className="product-card"
            >
              <img src={item.img} alt={item.title} />
              <div className="product-info">
                <h3>{item.price}</h3>
                <p>{item.title}</p>
                <p className="time">{item.time}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
}

export default ProductListing;
