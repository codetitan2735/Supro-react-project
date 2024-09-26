import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import ProductOnCart from "~/components/elements/products/ProductOnCart";
import { addItem } from "~/store/cart/action";
import { removeWishlistItem } from "~/store/wishlist/action";
import { getWishListItemsHelper } from "~/utilities/ecomerce-helpers";

const Wishlist = ({ wishlist }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  async function getProductsByWishlist(wishlist) {
    const items = await getWishListItemsHelper(wishlist);
    if (items) {
      setProducts(items);
      setTimeout(() => {
        setLoading(false);
      }, 250);
    }
  }

  function handleRemoveItemFromWishlist(e, productId) {
    e.preventDefault();
    dispatch(removeWishlistItem(productId));
  }

  function handleAddItemToCart(e, productId) {
    e.preventDefault();
    dispatch(addItem({ id: productId, quantity: 1 }));
  }

  useEffect(() => {
    getProductsByWishlist(wishlist);
  }, [wishlist]);

  // Views
  let wishlistItemsView;
  if (!loading) {
    if (products && products.length > 0) {
      wishlistItemsView = products.map((item) => (
        <tr key={item.id}>
          <td>
            <ProductOnCart product={item} />
          </td>
          <td>${item.price}</td>
          <td>
            {!item.out_of_stock ? (
              <span className="ps-instock">In Stock</span>
            ) : (
              <span className="ps-outstock">Out of stock</span>
            )}
          </td>
          <td>
            <a
              href="/"
              className="ps-btn ps-btn--outline ps-btn--sm mr-10"
              onClick={(e) => handleAddItemToCart(e, item.id)}
            >
              Add to cart
            </a>
            <a
              href="#"
              onClick={(e) => handleRemoveItemFromWishlist(e, item.id)}
            >
              <i className="icon-cross"></i>
            </a>
          </td>
        </tr>
      ));
    }
  } else {
    wishlistItemsView = (
      <tr>
        <td colSpan={4} className="text-left">
          No product found!
        </td>
      </tr>
    );
  }

  return (
    <table className="table ps-table ps-table--whishlist">
      <thead>
        <tr>
          <th>Product</th>
          <th>Unit Price</th>
          <th>Stock Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{wishlistItemsView}</tbody>
    </table>
  );
};

export default connect((state) => state.wishlist)(Wishlist);
