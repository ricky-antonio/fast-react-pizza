import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
    return (
        <header>
            <Link to="/">Fast React Pizza Co.</Link>
            <SearchOrder />
            <p>Guest</p>
        </header>
    );
};

export default Header;
