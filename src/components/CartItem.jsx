import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io"

import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";


const CartItem = ({ item }) => {

  const { id, title, image, price, amount } = item;

  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);


  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`} >
          <img className="max-w-[80px]" src={image} alt="product image" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2" >
            <Link to={`/product/${id}`} className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">{title}</Link>
            <div onClick={() => removeFromCart(id)} className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div className="flex-1 flex justify-center items-center cursor-pointer">
                <IoMdRemove className="flex-1 flex justify-center items-center cursor-pointer" onClick={() => decreaseAmount(id)} />
              </div>

              <div className="h-full flex justify-center items-center px-2 flex-1">{amount}</div>

              <div>
                <IoMdAdd className="flex-1 flex justify-center items-center cursor-pointer" onClick={() => increaseAmount(id)} />
              </div>

            </div>

            <div className="flex-1 flex items-center justify-around">$ {price}</div>
            <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  )
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
