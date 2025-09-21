import { Link } from "react-router-dom";


function Home() {
  const categories = [
    { name: "mobiles", img: "https://www.olx.com.pk/assets/mobiles.73f961c6ad58605c032eb7c2cf12aeaa.png" },
    { name: "vehicles", img: "https://www.olx.com.pk/assets/vehicles.354a5ebfb7f21e87991a277dd4b40f4b.png" },
    { name: "property", img: "https://www.olx.com.pk/assets/property-for-sale.69b01e8dafc182fa3bd469d0ed4fc801.png" },
    { name: "rent", img: "https://www.olx.com.pk/assets/property-for-rent.49f99cc528b9b88da4f33fbe1f0b3346.png" },
    { name: "electronics", img: "https://www.olx.com.pk/assets/electronics-home-appliances.0a30101e6fd7d9ccc8cd6b85b9b44cee.png" },
    { name: "bikes", img: "https://www.olx.com.pk/assets/bikes.0a5064ae987f3bd72801b7bc2c3b6e02.png" },
    { name: "business", img: "https://www.olx.com.pk/assets/business-industrial-agriculture.2ec28979a1bde0183c777a0ce51b37c6.png" },
    { name: "services", img: "https://www.olx.com.pk/assets/services.23d8eb1535f319324813848887961a59.png" },
    { name: "jobs", img: "https://www.olx.com.pk/assets/jobs.dc882b8ff65e94850cc12f5abd605420.png" },
    { name: "animals", img: "https://www.olx.com.pk/assets/animals.476fa9caaf88a12dfbcd6db4c8c6f17a.png" },
    { name: "furniture", img: "https://www.olx.com.pk/assets/furniture-home-decor.47a1998de5f4a8a9e84702dcb40bb313.png" },
    { name: "fashion", img: "https://www.olx.com.pk/assets/fashion-beauty.6ef7c1f060c92b55a6b28bfcfb16a1d2.png" },
    { name: "books", img: "https://www.olx.com.pk/assets/books-sports-hobbies.9406daf905b451fa283048652f414054.png" },
    { name: "kids", img: "https://www.olx.com.pk/assets/kids.5de42a58bc91f81fa22ccc401d7ac285.png" },
  ];


  const products = [
    {
      img: "	https://images.olx.com.pk/thumbnails/566596844-400x300.webp",
      price: "Rs 70,000",
      title: "Samsung Galaxy S21 8/128 Official PTA Approved",
      location: "Allama Iqbal Town, Lahore",
      time: "1 week ago",
      link: "#",
    },
    {
      img: "	https://images.olx.com.pk/thumbnails/567430484-400x300.webp",
      price: "Rs 2.50 Lac",
      title: "Samsung Galaxy S25 – 512GB Warranty Available",
      location: "Gulshan-e-Iqbal, Karachi",
      time: "2 weeks ago",
      link: "#",
    },
    {
      img: "	https://images.olx.com.pk/thumbnails/568371605-400x300.webp",
      price: "Rs 1.10 Lac",
      title: "iPhone 13 Pro Max PTA Approved",
      location: "D Ground, Faisalabad",
      time: "1 day ago",
      link: "#",
    },
    {
      img: "	https://images.olx.com.pk/thumbnails/567171775-400x300.webp",
      price: "Rs 85,000",
      title: "Vivo X80 5G",
      location: "Satellite Town, Bahawalpur",
      time: "4 days ago",
      link: "#",
    },
  ];

  return (
    <div className="home">
      {/* Banner Section */}
      <div className="banner">
        <img
          src="https://images.olx.com.pk/thumbnails/563565690-800x600.webp"
          alt="Banner"
        />
      </div>
      <div className="categories">
        <h2>All Categories</h2>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div key={index} className="category-wrapper">
              <Link to={`/ProductListing/${cat.name}`}>
                <div className="category-card">
                  <div className="image-container">
                    <img src={cat.img} alt={cat.name} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* product */}
      <div className="product-section">
      <div className="section-header">
        <h2>Mobile Phones</h2>
        <a href="#">View More</a>
      </div>

      <div className="product-grid">
        {products.map((item, i) => (
          <a href={item.link} className="product-card" key={i}>
            <img src={item.img} alt={item.title} />
            <div className="product-info">
              <h3>{item.price}</h3>
              <p className="title">{item.title}</p>
              {/* <p className="location">{item.location}</p> */}
              <p className="time">{item.time}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Home;
