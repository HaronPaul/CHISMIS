import React, {useContext} from "react";
import { UserContext } from "../contexts/UserContext";

const Managers = () => {
    const [user, setUser] = useContext(UserContext)
    return(
        <div>
            <h1> This is the manager page</h1>
        </div>
    )
}

export default Managers