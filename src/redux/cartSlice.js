import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        AddItem: (state, action) => {
          let existItem=state.find((item)=>item.id===action.payload.id)
          if(existItem){
            return state.map((item)=>item.id===action.payload.id ? {...item,quantity:item.quantity+1}:item)
          }
          else{
            state.push(action.payload)

          }
        },
        DeleteItem: (state, action) => {
            return state = state.filter((item) => (
                item.id !== action.payload
            ))
        },
      
          Increment:(state,action)=>{
                       return state.map((item)=>item.id===action.payload ? {...item,quantity:item.quantity+1}:item)

            },
         Decrement:(state,action)=>{
                          return state.map((item)=>item.id===action.payload ? {...item,quantity:item.quantity-1}:item)

        }

    }
})

export const { AddItem, DeleteItem,Increment,Decrement } = cartSlice.actions

export default cartSlice.reducer;
