import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProductCard.css'

interface ProductCardType {
    title: string;
    description: string;
    image: string;
    btnText: string;
    price: number;
    onSelect: () => void;
    addToCart: () => void;
}

function ProductCard(props: ProductCardType) {
    return (
        <Card
            style={{ width: '18rem', margin: 10, cursor: "pointer", boxShadow: "0px 0px 5px 0px rgb(0,0,0,0.2)" }}>
            <Card.Img
                onClick={() => {
                    props.onSelect();
                }}
                // style={{ height: 200, objectFit: "contain" }}
                className="card-image"
                variant="top"
                src={props.image}
            />
            <Card.Body>
                <Card.Title style={{ fontSize: 18, height: 50}}>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: 'justify', fontSize: 14, height: 120}}>{props.description}</Card.Text>
                <Card.Text style={{ textAlign: 'justify', fontSize: 18, height: 30}}><strong>&#8377;{props.price}</strong></Card.Text>
                <Button 
                onClick={() => {
                    props.addToCart();
                }}
                variant="primary"
            >
                {props.btnText}
            </Button>
            </Card.Body>
         
        </Card>
    );
}
export default ProductCard;