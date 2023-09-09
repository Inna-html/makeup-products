import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";
import { Blush, BlushDetails, Bronzer, BronzerDetails, EyeBrows, EyeBrowsDetails, EyeShadow, 
            Eyeliner, EyelinerDetails, EyeshadowDetails, Foundation, FoundationDetails, Home, 
            LipLiner, LiplinerDetails, Lipstick, LipstickDetails, Mascara, MascaraDetails, NailPolish, NailPolishDetails 
        } from "../componenets";
import css from '../layout/applayout.module.css';


const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <div>
            <h1>Oops! There was an error.</h1>
            <img className={css.oops} src={('https://cdn11.bigcommerce.com/s-ccerkj57m6/images/stencil/1280x1280/products/276/666/oops__68425.1528235707.jpg?c=2&imbypass=on')} />,
            </div>,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'blush',
                element: <Blush />,
            },
            {
                path:'blush/:id',
                element: <BlushDetails />
            },
            {
                path: 'bronzer',
                element: <Bronzer />
            },
            {
                path:'bronzer/:id',
                element: <BronzerDetails />
            },
            {
                path: 'eyeBrows',
                element: <EyeBrows />
            },
            {
                path:'eyeBrows/:id',
                element: <EyeBrowsDetails />
            },
            {
                path: 'eyeliner',
                element: <Eyeliner />
            },
            {
                path:'eyeliner/:id',
                element: <EyelinerDetails />
            },
            {
                path: 'eyeShadow',
                element: <EyeShadow />
            },
            {
                path:'eyeShadow/:id',
                element: <EyeshadowDetails />
            },
            {
                path: 'foundation',
                element: <Foundation />
            },
            {
                path:'foundation/:id',
                element: <FoundationDetails />
            },
            {
                path: 'lipLiner',
                element: <LipLiner />
            },
            {
                path:'lipLiner/:id',
                element: <LiplinerDetails />
            },
            {
                path: 'lipstick',
                element: <Lipstick />
            },
            {
                path:'lipstick/:id',
                element: <LipstickDetails />
            },
            {
                path: 'mascara',
                element: <Mascara />
            },{
                path:'mascara/:id',
                element: <MascaraDetails />
            },
            {
                path: 'nailPolish',
                element: <NailPolish />
            },
            {
                path:'nailPolish/:id',
                element: <NailPolishDetails />
            }
        ]
    }
]);


export { router };
