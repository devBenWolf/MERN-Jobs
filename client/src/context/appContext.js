import {useReducer, useContext, createContext} from "react"
import { CLEAR_ALERT, 
        DISPLAY_ALERT, 
        USER_BEGIN,
        USER_SUCCESS,
        USER_ERROR, 
        TOGGLE_SIDEBAR,
        LOGOUT_USER} from "./actions"
import reducer from "./reducer"
import axios from "axios"

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')

const initialState = {
    isLoading: false,
    showAlert: true,
    alertText: '',
    alertType: '',
    user: user ? JSON.parse(user) : null,
    token: token,
    userLocation: userLocation || '',
    jobLocation: userLocation ||  '',
    showSideBar: false
}


const AppContext = createContext()
const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // add and remove from local storage
    const addUserToLocalStorage = ({user, token, location}) => {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
        localStorage.setItem('location', location)
    }

    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('location')
    }

    // display and clear alerts
    const displayAlert = () => {
        dispatch({type: DISPLAY_ALERT})
        clearAlert()
    }

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({type: CLEAR_ALERT})
        }, 3000)
    }

    // sidebar toggle
    const toggleSidebar = () => {
        return ( 
            dispatch({type: TOGGLE_SIDEBAR})
         );
    }
     
    // logout toggle
    const logoutUser = () => {
        dispatch({type: LOGOUT_USER})
        removeUserFromLocalStorage()
    }


    // Register.js, login and register function
    const handleUser = async ({currentUser, endPoint, alertText}) => {
        dispatch({type: USER_BEGIN})
        try {
            const {data} = await axios.post(`/api/v1/auth/${endPoint}`, currentUser)
            const {user, token, location,} = data
            console.log(data)
            dispatch({
                type: USER_SUCCESS,
                payload: {user, token, location, alertText}
            })

            addUserToLocalStorage({user, token, location})
        } catch (error) {
            dispatch({
                type: USER_ERROR,
                payload: {msg: error.response.data.msg}
            })
        }
        clearAlert()
        
    }

    return (
        <AppContext.Provider value={{
            ...state, displayAlert, removeUserFromLocalStorage, handleUser, toggleSidebar,
            logoutUser,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}

export {AppContextProvider, useAppContext, initialState}

