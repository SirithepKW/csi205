import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppNavBar = ({ products, carts, setToken }) => {
    return (<div className="d-flex justify-content-center gap-2" style={{ backgroundColor: '#e0f7fa', padding: "2rem" }}>
        <Link to={"home"}><Button variant="outline-primary">Home</Button></Link>
        <Link to={"calculator"}><Button variant="outline-primary">Calculator</Button></Link>
        <Link to={"animation"}><Button variant="outline-primary">Animation</Button></Link>
        <Link to={"components"}><Button variant="outline-primary">Component</Button></Link>
        <Link to={"products"}><Button variant="outline-primary">Products ({products.length})</Button></Link>
        <Link to={"carts"}><Button variant="outline-primary" className="position-relative">Carts
            {carts.length > 0 && (
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {carts.length < 10 ? carts.length : "9+"}
                    <span class="visually-hidden">unread messages</span>
                </span>
            )}
        </Button></Link>
        <Link to={"Todo"}><Button variant="outline-primary">ToDo</Button></Link>
        <Button variant="outline-danger" style={{marginLeft: "1rem"}} onClick={() => {setToken('')}}>Logout</Button>
    </div>);
}

export default AppNavBar;