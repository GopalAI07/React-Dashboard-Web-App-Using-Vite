const sidebarReducer = (state,action)=>{
    if(action.type === "TOGGLE_SIDEBAR" )
     return{
        ...state,
        issidebaropen: !state.issidebaropen
     }

     throw new Error(`No Matching "${action.type}" action type`)
}

export default sidebarReducer;