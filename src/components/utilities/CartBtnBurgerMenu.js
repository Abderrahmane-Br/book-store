function CartBtnBurgerMenu() {

    function openNavMenu() {
        const menu = document.querySelector(".main__navMenu");
        menu.classList.add("active");

        setTimeout(() => menu.classList.add("visible"), 50);
    }
    return (
        <div className="cartBtn burgerMenu"
            onClick={openNavMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15.458" height="14.281" viewBox="0 0 17.458 14.281" >
                <g id="burgerMenu" transform="translate(-1436.5 -92.5)">
                    <path id="Path_1" dataName="Path 1" d="M0,0H15.458" transform="translate(1437.5 93.5)" fill="none" stroke="#96a4ba" strokeLinecap="round" strokeWidth="2" />
                    <line id="Line_3" dataName="Line 3" x2="15.458" transform="translate(1437.5 99.641)" fill="none" stroke="#96a4ba" strokeLinecap="round" strokeWidth="2" />
                    <line id="Line_4" dataName="Line 4" x2="15.458" transform="translate(1437.5 105.781)" fill="none" stroke="#96a4ba" strokeLinecap="round" strokeWidth="2" />
                </g>
            </svg >
        </div>
    )
}
export default CartBtnBurgerMenu