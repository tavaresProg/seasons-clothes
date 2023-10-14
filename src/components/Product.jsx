import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import { BsPlus, BsEyeFill } from "react-icons/bs"

import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {

  const { addToCart } = useContext(CartContext)

  const { id, image, category, title, price } = product

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">

        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img className="max-h-[160px] group-hover:scale-110 transition duration-300 cursor-pointer" src={image} alt="Imagem do produto" />
          </div>
        </div>

        <div className="absolute top-6 right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12  bg-custom_secondary">
              <BsPlus className="text-3x1  w-6 h-6"/>
            </div>
          </button>
          <Link to={`/product/${id}`} className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shado-xl "><BsEyeFill /></Link>
        </div>



      </div>

      <div>
        <div className="text-sm capitalize text-gray-500">{category}</div>

        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>

        <div className="font-semibold">$ {price}</div>

      </div>
    </div>
  )
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;

