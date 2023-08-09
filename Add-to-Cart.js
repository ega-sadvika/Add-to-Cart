      let cartQuantity = 0;
      displayCartQuantity();

      function updateCartQuantity(value) {
        if (cartQuantity + value > 10) {
        alert('The cart is full, Limit 10');
        return;
        } 

        if (cartQuantity + value < 0) {
          alert('Not enough items in the cart');
          return;
        }
        
          cartQuantity += value; //or cartQuantity += 1; (or) cartQuantity++;
          displayCartQuantity();
      }

      function displayCartQuantity() {
        document.querySelector('.js-display').innerHTML = `Cart Quantity: ${cartQuantity}`;
      }
