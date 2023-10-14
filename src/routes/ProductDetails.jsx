import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { ProductContext } from "../contexts/ProductContext"

import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  const { id } = useParams();
  const { products, loading } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)

  if (loading) {
    return <div className="h-screen flex justify-center items-center">Loading...</div>;
  }

  const product = products.find((item) => {
    return item.id === parseInt(id)
  })

  const { title, price, description, image } = product

  return (
    <div className="pt-32 pb-20 lg:py-32  flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="pt-3 max-w-[200px] lg:max-w-sm" src={image} alt="imagem do produto" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
            <div className="text-xl font-medium mb-6">$ {price}</div>
            <p className="mb-8">{description}</p>
            <button onClick={() => addToCart(product, product.id)} className="bg-custom_accent font-bold py-4 px-4 text-white">Add to Shopping Bag</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails