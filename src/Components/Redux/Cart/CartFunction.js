export const addItemToCart = (
    cartItems,
    cartItemToAdd,
    
  ) => {
    const existingCartItems = cartItems.find(
      (cartItem) => cartItem.id === cartItemToAdd.id
    );
    if (existingCartItems) {
      return cartItems.map((cartItem) =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    return [
      ...cartItems,
      {
        ...cartItemToAdd,
        quantity: 1,
        
        
      },
    ];
  };

  export const totalPrice = (itemPrice, qty) => {
    let price = itemPrice.substring(1) // given fixed rate to conver in ruppes
    if(qty === 1) {
      return Math.round(price * 100 )
    } else {
      return Math.round(price * qty * 100) 
    }
  }