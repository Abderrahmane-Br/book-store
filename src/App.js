import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./components/Home";
import ShoppingMain from "./components/shopping/ShoppingMain";
import { getBooks } from "./redux/books/booksSlice";
import { updateAmount } from "./redux/cart/cartSlice";
import "./styles/main.css";
import BookDetails from "./components/single product/BookDetails";
import Cart from "./components/cart/Cart";
import Wishlist from "./components/wishlist/Wishlist";

function App() {
  const dispatch = useDispatch();
  // const { items } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(getBooks());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(() => { dispatch(updateAmount()) }, [items]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />}>
          <Route index element={<ShoppingMain />}></Route>
          <Route path="/:bookId" element={<BookDetails />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;