import './ProductsDetails.css';
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router";

function ProductsDetails() {
    const [product, setProduct] = useState<any>({});
    const [loading, setLoading] = useState(true);

    let { id } = useParams();

    useEffect(() => {
      getProductById();
    }, []);

    function getProductById() {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((res) => {
          setProduct(res);
          setLoading(false);
        });
    }

    return (
        <>
          { loading ? (
            <section className="loader">
              <Spinner animation="border" variant="primary" />
            </section>
          ) : (
            <>
              <section className="product-details-container">
                <section className="products-details-image">
                    <img
                        src={product.images[0]}
                        className="product-details-image-listing"
                        alt={product.title}
                    ></img>
                </section>
                <section className="product-details">
                    <p style={{ padding: 2}}></p>
                    <h2>{product.title}</h2>
                    <h4>{Math.round(product.price)}</h4>
                    <p style={{ textAlign: "justify" }}>{product.description}</p>
                </section>
            </section>
            <section>
              <div>review</div>
            </section>
        </>
      )}
    </>
    );
}
export default ProductsDetails;