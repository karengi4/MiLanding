import { createContext, useContext, useState, useEffect } from 'react';
import productsData from '../data/products.json';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData || []); 

  useEffect(() => {
    const fetchProducts = () => {
      try {
        setProducts(productsData);
      } catch (error) {
        console.error("Error al cargar los productos: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);