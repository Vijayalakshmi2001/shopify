import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Img from "../../assets/images/image1.jpg";
import Img2 from "../../assets/images/image2.jpg";
import Img3 from "../../assets/images/image3.jpg";
import Img4 from '../../assets/images/image4.jpg';
import Img5 from '../../assets/images/image5.jpg';
import Img6 from '../../assets/images/image6.jpg';
import ProductCard from "../../common/productcard/ProductCard";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { homeSlice } from '../../redux/home/homeSlice';
import { cartSlice } from '../../redux/cart/cartSlice';
import { Toast } from 'react-bootstrap';

function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [showA, setShowA] = useState(false);
  const [showB, setSHowB] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const selector: any = useSelector((state) => state);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setSHowB(!showB);

  useEffect(() => {
    getAllproducts();
  }, []);

  function getAllproducts() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
        setLoading(false);

      });
  }
  return (
    <>
      <section className="slider">
        <Carousel>
          <Carousel.Item>
            <img src={Img4} alt="image" className="slider-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Img5} alt="image" className="slider-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Img6} alt="image" className="slider-image" />
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="product-listing-sec">
        {loading ? (
          <section className="loader">
            <Spinner animation="border" variant="primary" />
          </section>
        ) : (
          <section className="product-listing-home">
            {products.map((item: any) => {
              return (
                <ProductCard
                  title={item.title}
                  description={item.description}
                  image={item.images[0]}
                  price={item.price}
                  btnText="Add to cart"
                  onSelect={() => {
                    navigate(`/product/${item.id}`);
                  }}
                  addToCart={() => {
                    setShowA(false);
                    if (
                      selector.cart.selectedProducts.filter(
                        (items: any) => items.id === item.id
                      ).length === 0
                    ) {
                      dispatch(cartSlice.actions.setProducts(item));
                      setSelectedItem(item.title);
                      toggleShowA();
                    } else {
                      setSelectedItem(item.title);
                      toggleShowB();
                    }
                  }}
                ></ProductCard>
              );
            })}
          </section>
        )}
      </section>
      <Toast
        autohide
        delay={5000}
        bg="success"
        className="toast"
        show={showA}
        onClose={toggleShowA}
      >
        <Toast.Header>
          <strong className="me-auto">Cart</strong>
        </Toast.Header>
        <Toast.Body style={{ color: "white" }}>
          <strong>{selectedItem}</strong>added to cart successfully
        </Toast.Body>
      </Toast>
      <Toast 
        autohide
        delay={2000}
        bg="danger"
        className="toast"
        show={showB}
        onClose={toggleShowB}
      >
        <Toast.Header>
          <strong className="me-auto">Cart</strong>
        </Toast.Header>
        <Toast.Body style={{color: "white" }}>
          <strong>{selectedItem}</strong>already exist in the cart
        </Toast.Body>
      </Toast>
    </>

  );
}
export default Home;