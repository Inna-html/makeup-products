import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { blushPowderService } from "../../services/blush.service";
import { BlushDetail } from "./BlushDetail";

const BlushDetails = () => {

    const {state} = useLocation();
    const [blushPowder, setBlushPowder] = useState(state);
    const {id} = useParams();

    useEffect(() => {
        if (!state) {
            blushPowderService.getById(id).then(({data}) => setBlushPowder(data))
        } else {
            setBlushPowder(state)
        }
    }, [id, state])

    return (
        <div>
            {blushPowder && <BlushDetail key={blushPowder} blushPowder={blushPowder}/>}
        </div>
    )
}

export { BlushDetails};

