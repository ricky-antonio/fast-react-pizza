import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartCost, getTotalCartQty } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

const CartOverview = () => {
    const totalQty = useSelector(getTotalCartQty);
    const totalCost = useSelector(getTotalCartCost);

    return (
        <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
            <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
                {totalQty > 0 && (
                    <>
                        <span>{totalQty} pizzas</span>
                        <span>{formatCurrency(totalCost)}</span>
                    </>
                )}
            </p>
            <Link to="/cart">Open cart &rarr;</Link>
        </div>
    );
};

export default CartOverview;
