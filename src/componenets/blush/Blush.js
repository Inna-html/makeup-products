import { useEffect, useState } from "react";
import { blushCreamService, blushPowderService } from "../../services";
import { BlushPowder } from "./BlushPowder";
import { BlushCream } from "./BlushCream";

const Blush = () => {

    const [powders, setPowder] = useState([]);
    const [creams, setCream] = useState([]);

    useEffect(() => {
        blushPowderService.getAll().then(({data}) => setPowder(data))
    }, [])

    useEffect(() => {
        blushCreamService.getAll().then(({data}) => setCream(data))
    }, [])
    
    return (
        <div>
            <div>{powders.map(powders => <BlushPowder key={powders} powders={powders}/>)}</div>
            <div>{creams.map(creams => <BlushCream key={creams} creams={creams} />)}</div>
        </div>
    )
};

export { Blush };
