export const ReducerFun = (state,action)=> {

    // state = action;
    console.log(action)
   if(action.type ==="add"){
       state.push(action.obj);
   }
   if(action.type == "remove"){
    console.log(action.index)
     state.splice(action.index,1);
   }
   if(action.type ==="edit"){
     state.splice(action.index,1,action.obj);
   }

    return [...state]
}