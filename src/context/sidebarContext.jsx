import { createContext, useReducer } from "react";
import reducer from "../reducer/sidebarReducer";
import PropTypes from "prop-types"

const initialState = {
    isSidebarOpen: false
}

export const sidebarContext = createContext({});
export const SidebarProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleSidebar = () =>{
        dispatch({type: 'TOGGLE_SIDEBAR'})
    }

    return(
        <sidebarContext.Provider value={
            {...state, toggleSidebar}}>
           {children}
        </sidebarContext.Provider>
    )
}

SidebarProvider.PropTypes={
    children:PropTypes.node
}