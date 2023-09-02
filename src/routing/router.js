import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";
import { Blush, BlushDetails, Bronzer, BronzerDetails, EyeBrows, EyeBrowsDetails, EyeShadow, 
            Eyeliner, EyelinerDetails, EyeshadowDetails, Foundation, FoundationDetails, Home, 
            LipLiner, LiplinerDetails, Lipstick, LipstickDetails, Mascara, MascaraDetails, NailPolish, NailPolishDetails 
        } from "../componenets";

const router = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout />,
        errorElement: <div><h1>Oops! There was an error.</h1></div>,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/blush',
                element: <Blush />,
            },
            {
                path:'/blush/:id',
                element: <BlushDetails />
            },
            {
                path: '/bronzer',
                element: <Bronzer />
            },
            {
                path:'/bronzer/:id',
                element: <BronzerDetails />
            },
            {
                path: '/eyeBrows',
                element: <EyeBrows />
            },
            {
                path:'/eyebrows/:id',
                element: <EyeBrowsDetails />
            },
            {
                path: 'eyeliner',
                element: <Eyeliner />
            },
            {
                path:'/eyeliner/:id',
                element: <EyelinerDetails />
            },
            {
                path: '/eyeshadow',
                element: <EyeShadow />
            },
            {
                path:'/eyeshadow/:id',
                element: <EyeshadowDetails />
            },
            {
                path: '/foundation',
                element: <Foundation />
            },
            {
                path:'/foundation/:id',
                element: <FoundationDetails />
            },
            {
                path: '/lipliner',
                element: <LipLiner />
            },
            {
                path:'/lipliner/:id',
                element: <LiplinerDetails />
            },
            {
                path: 'lipstick',
                element: <Lipstick />
            },
            {
                path:'/lipstick/:id',
                element: <LipstickDetails />
            },
            {
                path: '/mascara',
                element: <Mascara />
            },{
                path:'/mascara/:id',
                element: <MascaraDetails />
            },
            {
                path: '/nailpolish',
                element: <NailPolish />
            },
            {
                path:'/nailPolish/:id',
                element: <NailPolishDetails />
            }
        ]
    }
]);


export { router };

