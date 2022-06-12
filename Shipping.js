const test = (sStatus) => {
      let res = "";
      if(sStatus == "CANCELLED")
        res = "";
      if(sStatus == "CREATED")
        res = "";
      if(sStatus == "PROCESSING")
        res = "CREATED";
      if(sStatus == "shipped")
        setTimeout(res = "SHIPPED", 5000)
      if(sStatus == "delivered"){
        res = "DELIVERED"
        axios.get('http://localhost:5000/api/delivered')
      }
      if(sStatus == "FULLFILLED")
        res = "DELIVERED";
      if(sStatus == "FULL")
        res = "RETURNED";
      return res;
    }

    const Return = (orderStatus, shippingStatus, orderId) => {
      console.log(orderStatus, shippingStatus)
      if(orderStatus === "delivered" && shippingStatus === "DELIVERED"){
        alert("Order return for order id " + orderId +" requested !")
        axios.put(`http://localhost:5000/api/orders/${orderId}`, {
          status : "FULL"
        })
        .then(axios.get("http://localhost:5000/api/returned"))
        window.location.replace("/order");
      }
      else{
        alert("You can't return the order after it was fullfilled !")
      }
    }