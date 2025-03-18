import React ,{useState}from 'react'
import NoteContext from './Context'
const ContextProvider = (props) => {
    const[count,setCount]=useState(0)
    const [totalPrice, setTotalPrice] = useState(0);
   const [cartItems, setCartItems] = useState([])
        
      const items= [{
            title: "Colors",
      
            price: 100,
      
            imageUrl:
              "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      
            quantity: 2,
          },
      
          {
            title: "Black and white Colors",
      
            price: 50,
      
            imageUrl:
              "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      
            quantity: 3,
          },
      
          {
            title: "Yellow and Black Colors",
      
            price: 70,
      
            imageUrl:
              "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      
            quantity: 1,
          }]
      
     
   
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCount((prev) => prev + 1);
    setTotalPrice((prev) => prev + item.totalprice);
  };
    return (
        <NoteContext.Provider value={{ cartItems,items,count,setCount, totalPrice, setTotalPrice,setCartItems, addToCart,setCartItems}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default ContextProvider;