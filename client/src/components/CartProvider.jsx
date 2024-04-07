export default function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, initialState);

    // Function to update the cart
    const setCart = (newCart) => {
        dispatch({ type: 'SET_CART', payload: newCart });
        localStorage.setItem('carrinho', JSON.stringify(newCart));
    };

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};