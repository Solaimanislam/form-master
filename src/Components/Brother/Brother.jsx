import { useContext } from "react";
import { MoneyContext } from "../GrandFa/GrandFa";


const Brother = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h2>Brother</h2>
            <p>has:{money} </p>
        </div>
    );
};

export default Brother;