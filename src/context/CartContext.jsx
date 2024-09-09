import { createContext, useContext, useState } from "react";

export const CartContext = createContext ()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, cantidad) => {
        if (!isInCart(idem.id)) {
            setCart(prev => [...prev, {...item, cantidad}])
        } else {
            console.error('El producto ya está en el carrito')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart (cartUpdated)
    }

    const clearCard = () => {
        setCart([])
    }

    const isInCart =(itemId) => {
        return cart.some(prod => prod.id ===itemId)
    }

    const sumatoriaCarrito = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCard, sumatoriaCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)