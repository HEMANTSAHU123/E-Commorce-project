import React ,{useState}from 'react'
import NoteContext from './Context'
const ContextProvider = (props) => {
    const[count,setCount]=useState(0)
   
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
      
     
    const removeItem = (id) => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
      setCount((prev)=>prev-1);
  };


    return (
        <NoteContext.Provider value={{ cartItems,removeItem,items,count ,setCartItems}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default ContextProvider;