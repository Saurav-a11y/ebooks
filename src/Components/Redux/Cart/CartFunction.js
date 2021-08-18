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

  export const removeCartItemQuantity = (cartItems, cartToRemove) => {
    const existingCartItems = cartItems.find(
        cartItem => cartItem.id === cartToRemove.id
    )
    if(existingCartItems.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartToRemove.id)         
    }
    return cartItems.map(cartItem => 
        
        cartItem.id === cartToRemove.id 
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem 
        )
        
}

  export const totalPrice = (itemPrice, qty) => {
    let price = itemPrice.substring(1) // given fixed rate to conver in ruppes
    if(qty === 1) {
      return Math.round(price * 100 )
    } else {
      return Math.round(price * qty * 100) 
    }
  }

  export const totalAmount = ( cartItems) => {
    return cartItems.reduce((acc, item) => Math.round(acc + item.price.substring(1) * item.quantity * 100), 0)
  }