import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getUsername } from "./cartSlice";

const Cart = () => {
    const cart = useSelector(getCart);
    const username = useSelector(getUsername);
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(clearCart())
    }

    if (!cart.length) return <EmptyCart />

    return (
        <div className="px-4 py-3">
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>

            <h2 className="mt-7 text-xl font-semibold">
                Your cart, {username}
            </h2>

            <ul className="mt-3 divide-y divide-stone-200 border-b">
                {cart.map((item) => (
                    <CartItem item={item} key={item.pizzaId} />
                ))}
            </ul>

            <div className="mt-6 space-x-6">
                <Button to="/order/new" type="primary">
                    Order Pizzas
                </Button>
                <Button type="secondary" onClick={handleClick}>Clear Cart</Button>
            </div>
        </div>
    );
};

export default Cart;
