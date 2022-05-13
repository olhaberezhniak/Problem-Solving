function submitOrder(user) {
  
    // Get the current user's shopping cart
    const shoppingCartPromise = OrderAPI.getShoppingCartAsync(user); 
    
    // Also look up the ZIP code from their profile
    const zipCodePromise = CustomerAPI.getProfileAsync(user).then(res => res.zipCode);
    
    Promise.all([shoppingCartPromise, zipCodePromise])
    .then( values => {
      const [shoppingCart, zipCode] = values;
      // Calculate the shipping fees
      const shippingRate = calculateShipping(shoppingCart, zipCode);
      // Submit the order
      return OrderAPI.placeOrderAsync(shoppingCart, shippingRate);
    })
    .then( orderSuccessful => console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`))
    
  }