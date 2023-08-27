import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";
import { Blush, Bronzer, EyeBrows, EyeShadow, Eyeliner, Foundation, Home, LipLiner, Lipstick, Mascara, NailPolish } from "../componenets";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/blush',
                element: <Blush /> 
            },
            {
                path: '/bronzer',
                element: <Bronzer />
            },
            {
                path: '/eyeBrows',
                element: <EyeBrows />
            },
            {
                path: 'eyeliner',
                element: <Eyeliner />
            },
            {
                path: '/eyeshadow',
                element: <EyeShadow />
            },
            {
                path: '/foundation',
                element: <Foundation />
            },
            {
                path: '/lipliner',
                element: <LipLiner />
            },
            {
                path: 'lipstick',
                element: <Lipstick />
            },
            {
                path: '/mascara',
                element: <Mascara />
            },
            {
                path: '/nailpolish',
                element: <NailPolish />
            }  
        ]
    }
]);


export { router };

