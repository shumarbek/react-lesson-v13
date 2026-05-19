import { useContext } from "react";
import { NarxContext } from "../context/userContect";

const Pricing = () => {
    const narx = useContext(NarxContext);
    return (
        <div>
            <p style={{color: 'red', fontSize: '50px'}}> {narx} </p>
        </div>
    )
}

export default Pricing;