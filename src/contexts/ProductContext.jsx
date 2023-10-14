import { createContext, useState, useEffect } from "react"
import PropTypes from 'prop-types';


export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchProducts = async () => {

            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        }

        fetchProducts();

    }, [])

    return <ProductContext.Provider value={{products, loading} }>{children}</ProductContext.Provider>
}

ProductProvider.propTypes = {
    children: PropTypes.node.isRequired,
};