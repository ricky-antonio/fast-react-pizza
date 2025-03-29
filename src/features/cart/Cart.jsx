import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem"
import { useSelector } from "react-redux";

const Cart = () => {
    const cart = useSelector(state => state.cart.cart)
    const username = useSelector((state) => state.user.username);

    return (
        <div className="px-4 py-3">
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>

            <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

            <ul className="divide-y divide-stone-200 border-b mt-3">
                {cart.map((item) => (
                    <CartItem item={item} key={item.id}/>
                ))}
            </ul>

            <div className="mt-6 space-x-6">
                <Button to="/order/new" type="primary">
                    Order Pizzas
                </Button>
                <Button type="secondary">Clear Cart</Button>
            </div>
        </div>
    );
};

export default Cart;
