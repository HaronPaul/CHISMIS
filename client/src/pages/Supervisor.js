import React, {useContext} from "react";
import { UserContext } from "../contexts/UserContext";

const Supervisor = () => {
    const [user, setUser] = useContext(UserContext)
    return(
        <div>
            <h1> This is the supervisor page</h1>
        </div>
    )
}

export default Supervisor