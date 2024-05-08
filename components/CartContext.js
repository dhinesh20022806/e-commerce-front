import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const router = useRouter();
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);
  const [state, setState] = useState({state:null,data:"dhinesh@gmail.com"});
  const [account, setAccount] = useState({
    orders:[],
    List:[],
  })
  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);
  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, []);
  function addProduct(productId) {
    alert("Product added");
    setCartProducts((prev) => [...prev, productId]);
  }
  function buyNow(productId) {
    setCartProducts((prev) => [productId]);
    router.push("/cart");
  }

  function removeProduct(productId) {
    setCartProducts((prev) => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos);
      }
      return prev;
    });
  }
  function clearCart() {
    setCartProducts([]);
  }

  const handleLogin = ()=>{
    setState(prev => {
        return {...prev, state: true,}
    } );
}
const handleSignup = ()=>{
    setState(prev => {
        return {...prev, state: false,}
    } );
}
const loginInfo = (info)=>{
    console.log(info)
    setState(prev =>{
        return {data:info.data[0].email, state:null}
    })

}
const handleLogout = ()=>{
    setState(prev =>{
        return {data:null, state:true}
    })

}
const addToLikedList = (item)=>{
  console.log(item)
  setAccount(prev =>{
    return {...prev,List:[...prev.List, item]}
  })
}

const addToOrders = (item)=>{
  setAccount(prev =>{
    return {...prev,orders:[...prev.orders, item]}
  })
}
const removeLikedList = (id)=>{
  setAccount(prev =>{
    const filterArray = prev.List.filter(item => item._id !== id);
    return {...prev,List:filterArray}
  })
}



const orders = account.orders;
const list = account.List;
 

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProduct,
        removeProduct,
        clearCart,
        buyNow,
        handleLogin,
        handleSignup,
        loginInfo,
        handleLogout,
        state,
        orders,
        list,
        addToLikedList,
        addToOrders,
        removeLikedList       
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
