import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import BackTab from "./utilities/BackTab";

function Home() {

    function closeNavMenu() {
        const menu = document.querySelector(".main__navMenu");
        menu.classList.remove("visible");
        setTimeout(() => menu.classList.remove("active"), 500);
    }

    return (
        <section className="main">
            <Outlet />
            <Sidebar />
            <div className="main__navMenu">
                <span className="main__navMenu__close" onClick={closeNavMenu}>
                    x
                </span>
                {/* <h3 className="main__navMenu__sectionTitle">Navigate to</h3> */}
                <ul className="main__navMenu__list">
                    <li>
                        <Link className="bookDetails__cartButton --cart-color --space-between" to="/cart" onClick={closeNavMenu}>
                            My Cart
                            <div className="bookDetails__cartButton__iconCont --cart-color">
                                <svg className="bookDetails__cartButton__icon cartIcon" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.3887 18.8975H10.2994C9.8095 18.8975 9.37722 18.5445 9.23398 18.0274L4.99745 2.74418H1.27342C0.65811 2.74418 0.159302 2.19377 0.159302 1.51481C0.159302 0.83584 0.65811 0.285431 1.27342 0.285431H5.8219C6.3118 0.285431 6.74408 0.638437 6.88732 1.15513L11.1238 16.4387H22.6483L26.0177 7.59038H14.4837C13.8684 7.59038 13.3696 7.03997 13.3696 6.361C13.3696 5.68204 13.8684 5.13163 14.4837 5.13163H27.694C28.0671 5.13163 28.4156 5.33781 28.6219 5.68063C28.8282 6.02345 28.8657 6.4576 28.7212 6.8373L24.4156 18.1444C24.2418 18.6007 23.8372 18.8975 23.3887 18.8975Z" />
                                    <path d="M9.35233 26.4479C10.4353 26.4479 11.3132 25.4792 11.3132 24.2842C11.3132 23.0893 10.4353 22.1205 9.35233 22.1205C8.26938 22.1205 7.39148 23.0893 7.39148 24.2842C7.39148 25.4792 8.26938 26.4479 9.35233 26.4479Z" />
                                    <path d="M23.9029 26.4479C24.9858 26.4479 25.8637 25.4792 25.8637 24.2842C25.8637 23.0893 24.9858 22.1205 23.9029 22.1205C22.8199 22.1205 21.942 23.0893 21.942 24.2842C21.942 25.4792 22.8199 26.4479 23.9029 26.4479Z" />
                                </svg>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className="bookDetails__cartButton --space-between" to="/wishlist" onClick={closeNavMenu}>
                            My Wishlist
                            <div className="bookDetails__cartButton__iconCont --heart-color">
                                <svg className="bookDetails__cartButton__icon heartIcon" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.9292 1.7325C15.1108 -0.495963 11.667 -0.772379 8.99996 2.07314C6.33295 -0.772379 2.88914 -0.495963 1.07074 1.7325C-0.863462 4.10308 -0.0510605 8.52746 2.49534 12.0634C3.78615 13.8557 6.97475 16.7744 8.99996 18C11.0252 16.7744 14.2138 13.8557 15.5046 12.0634C18.051 8.52746 18.8636 4.10308 16.9292 1.7325Z" />
                                </svg>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <a className="bookDetails__cartButton" href="#Social" onClick={closeNavMenu}>Social</a>
                    </li>
                    <li>
                        <a className="bookDetails__cartButton" href="#Fiction" onClick={closeNavMenu}>Fiction</a>
                    </li>
                    <li>
                        <a className="bookDetails__cartButton" href="#History" onClick={closeNavMenu}>History</a>
                    </li>
                    <li>
                        <a className="bookDetails__cartButton" href="#Nature" onClick={closeNavMenu}>Nature</a>
                    </li>
                    <li>
                        <a className="bookDetails__cartButton" href="#Art" onClick={closeNavMenu}>Art</a>
                    </li>
                </ul>
                <span className="main__navMenu__back bookDetails__cartButton" onClick={closeNavMenu}>
                    Go back
                </span>
            </div>
            <BackTab />
            <div
                className="modal"
                onAnimationEnd={(e) => e.target.style.display = "none"}
            >
                Item has been added already !</div>
            <div
                className="modal"
                onAnimationEnd={(e) => e.target.style.display = "none"}
            >
                Item successfully added</div>
            <div
                className="modal"
                onAnimationEnd={(e) => e.target.style.display = "none"}
            >
                Item successfully updated</div>
        </section>
    )
}
export default Home