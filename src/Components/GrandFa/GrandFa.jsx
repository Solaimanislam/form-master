import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './GrandFa.css';


export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const GrandFa = () => {
    const [money, setMoney] = useState(1000);
    const asset = 'Diamond';
    return (
        <div className="grandfa">
            <h2>Grand Fa</h2>
            <p>Net Money: {money} </p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default GrandFa;

/**
 * 1. Create context and export it..
 * 2. Add provider for the context with a value. value could be anything
 * 3. useContext to access value in the context API
 */

