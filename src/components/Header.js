import "./css/Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <StorefrontIcon fontSize="large" className="header_logoImage" />
        <h2 className="header_logoImage">eSHOP</h2>
      </div>
      <div className="header_search">
        <input
          type="text"
          className="header_searchInput"
          placeholder="Search products..."
        />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_itemLineTwo">Sign In</span>
        </div>
        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>
        <div className="nav_item">
          <span className="nav_itemLineOne">
            <ShoppingCartIcon className="itemBasket" />
          </span>
          <span className="nav_itemLineTwo basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
