import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";


export const fetchCartData = () =>{
return async dispatch=>{
    const fetchData = async ()=>{
      const response = await  fetch('https://redux-cart-3a8af-default-rtdb.firebaseio.com/cart.json')
      if(!response.ok)
      {
        throw new Error("could not feth cart data...")
      }
      const data = await response.json()
      return data
    }

    try {
    const cartData = await fetchData()
    dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
    }))
    } catch (error) {
        dispatch(uiActions.showNotification({
            status: 'error',
            title: "Error!",
            message: "fetching cart data failed"
          }))
    }
}
}


export const senCartData = (cart) =>{
    return async (dispatch)=>{
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: "sending",
            message: "sending cart data"
          }))

          const sendRequest = async() =>{
            const response = await fetch('https://redux-cart-3a8af-default-rtdb.firebaseio.com/cart.json',{method: 'PUT', body: JSON.stringify({items: cart.items,totalQuantity: cart.totalQuantity }),
        });

        if(!response.ok)
        {
          throw new Error("Sending vart data failed")
        }
          }
        try {
            await sendRequest()
            dispatch(uiActions.showNotification({
                status: 'success',
                title: "Successful..",
                message: "sent cart data successfully..."
              }))

        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: "Error!",
                message: "sending cart data failed"
              }))
        }


    }
    }
