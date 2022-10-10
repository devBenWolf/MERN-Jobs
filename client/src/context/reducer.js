import { CLEAR_ALERT, 
        DISPLAY_ALERT,
        USER_BEGIN,
        USER_SUCCESS, 
        USER_ERROR,
        TOGGLE_SIDEBAR} from "./actions"

const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertText: "Please provide all values",
            alertType: "danger"
        }
    } else if (action.type === CLEAR_ALERT) {
        return {
            ...state,
            showAlert: false,
            alertText: "",
            alertType: ""
        }
    } else if (action.type === USER_BEGIN) {
        return {
            ...state,
            isLoading: true
        }
    } else if (action.type === USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            user: action.payload.user,
            token: action.payload.token,
            userLocation: action.payload.location,
            jobLocation: action.payload.location,           
            showAlert: true,
            alertType: "success",
            alertText: action.payload.alertText
        }
    } else if (action.type === USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "danger",
            alertText: action.payload.msg
        }
    } else if (action.type === TOGGLE_SIDEBAR) {
        return {...state, showSidebar: !state.showSidebar}
    }
}

export default reducer