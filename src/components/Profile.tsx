import { useContext } from "react";
import { UserContext } from "../context/userContect";

const Profile = () => {
    const username = useContext(UserContext);

    return (
        <div>
            <h1>{username}</h1>
        </div>
    )
}

export default Profile;