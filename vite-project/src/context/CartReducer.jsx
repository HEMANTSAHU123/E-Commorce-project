export const initialState = {
    items: [], 
  };
  
  export const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
       
        const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
        if (existingItemIndex >= 0) {
      
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex].quantity += 1;
          return { ...state, items: updatedItems };
        } else {
        
          return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
        }
      default:
        return state;
    }
  };