import { Card, Button, Badge } from "react-bootstrap";
import "./ProductsCSS.css"

const CartsApp = ({ carts, setCart }) => {
    return (<h2>
        <div className="carts-container">
            <div className="carts-items-container">
                {carts.map((cart) => {
                    return (
                        <Card style={{ width: '18rem' }} key={cart.id}>
                            <Card.Img variant="top" src={cart.thumbnailUrl} />
                            <Card.Body>
                                <Card.Title>{cart.title}</Card.Title>
                                <Card.Text>
                                    <b>${cart.price.toFixed(2)}</b>
                                </Card.Text>
                                <Button variant="outline-danger" onClick={() => {
                                    setCart(carts.filter((c) => c.id !== cart.id))
                                }}>Remove from Cart</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
            <h4>Items: <Badge bg="danger">{carts.length}</Badge> items - Total Price: <Badge bg="success">${carts.reduce((prev, cart) => { return prev + cart.price }, 0).toFixed(2)}</Badge></h4>
            <button type="button" className="btn btn-warning">Check Out <i className="bi bi-credit-card-2-back-fill"></i> </button>
        </div>
    </h2>);
}

export default CartsApp;