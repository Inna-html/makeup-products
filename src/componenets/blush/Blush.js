import { useEffect, useState } from "react";

import { BlushAdd } from "./BlashAdd";
import { blushService } from "../../services";


const Blush = () => {

    const [blushs, setBlushs] = useState([]);

    useEffect(() => {
        blushService.getAll().then(({data}) => setBlushs(data))
    }, [])
    
    return (
        <div>
            <div>{blushs.map(blushs => <BlushAdd key={blushs} blushs={blushs}/>)}</div>
        </div>
    )
};

export { Blush };

