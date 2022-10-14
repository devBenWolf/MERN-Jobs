import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";


const ProtectedRoute = ({children}) => {
    // import value for conditional rendering
    const {user} = useAppContext()

    if (!user) {
       return <Navigate to="/landing" />
    }

    return children
}
 
export default ProtectedRoute;