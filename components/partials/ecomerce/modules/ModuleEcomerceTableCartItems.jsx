import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import ProductOnCart from "~/components/elements/products/ProductOnCart";
import {
  decreaseItemQty,
  increaseItemQty,
  removeItem,
} from "~/store/cart/action";
import { getCartItemsHelper } from "~/utilities/ecomerce-helpers";

const ModuleEcomerceTableCartItems = ({ cart }) => {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();

  async function getProductByCardItems(cart) {
    const shoppingCart = await getCartItemsHelper(cart);
    if (shoppingCart) {
      setCartItems(shoppingCart.items);
    }
  }

  function handleIncreaseItemQty(e, productId) {
    e.preventDefault();
    dispatch(increaseItemQty({ id: productId }));
  }

  function handleDecreaseItemQty(e, productId) {
    e.preventDefault();
    dispatch(decreaseItemQty({ id: productId }));
  }

  function handleRemoveItem(e, productId) {
    e.preventDefault();
    dispatch(removeItem({ id: productId }));
  }

  useEffect(() => {
    getProductByCardItems(cart);
  }, [cart]);

  // View
  let cartItemsViews;
  if (cartItems) {
    if (cartItems.length > 0) {
      const items = cartItems.map((item) => (
        <tr key={item.id}>
          <td>
            <ProductOnCart product={item} />
          </td>
          <td>
            <strong>${item.price}</strong>
          </td>
          <td>
            <div className="form-group--number">
              <button
                className="up"
                onClick={(e) => handleIncreaseItemQty(e, item.id)}
              ></button>
              <button
                className="down"
                onClick={(e) => handleDecreaseItemQty(e, item.id)}
              ></button>
              <input
                className="form-control"
                type="text"
                value={item.quantity}
                placeholder={item.quantity}
              />
            </div>
          </td>
          <td>
            <p>
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
            </p>
          </td>
          <td>
            <a
              className="ps-icon"
              href="#"
              onClick={(e) => handleRemoveItem(e, item.id)}
            >
              <i className="icon-cross"></i>
            </a>
          </td>
        </tr>
      ));
      cartItemsViews = <tbody>{items}</tbody>;
    } else {
      cartItemsViews = (
        <tbody>
          <tr>
            <td colSpan={5} className="text-left">
              No product found.
            </td>
          </tr>
        </tbody>
      );
    }
  }
  return (
    <table className="table ps-table ps-table--shopping-cart ps-table--resonsive">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      {cartItemsViews}
    </table>
  );
};

export default connect((state) => state.cart)(ModuleEcomerceTableCartItems);
