import CartBtn from "./utilities/CartBtn";
import Searchbar from "./utilities/Searchbar";
import CartBtnBurgerMenu from "./utilities/CartBtnBurgerMenu";
import BackBtn from "./utilities/BackBtn";
function ContentHeader() {
    return (
        <div className="content__header">
            <BackBtn />
            <Searchbar />
            <CartBtn type="cart" />
            <CartBtn type="wishlist" />
            <CartBtnBurgerMenu />
        </div>
    )
}
export default ContentHeader