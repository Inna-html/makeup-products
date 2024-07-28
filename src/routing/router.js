import { Navigate, createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";

import {
    ErrorElement, Home,
    BlushsMain, BlushDetails, 
    BronzerMain, BronzerDetails, 
    EyeBrowsMain, EyeBrowsDetails,
    EyeShadowMain, EyeshadowDetails,
    EyelinerMain, EyelinerDetails,
    FoundationMain, FoundationDetails, 
    LipLinerMain, LiplinerDetails,
    LipstickMain, LipstickDetails,
    MascaraMain, MascaraDetails,
    NailPolishMain, NailPolishDetails
} from "../componenets";

const router = createBrowserRouter([
{
    base_url: '/cosmetics/',
    element: <AppLayout />,
    children: [
      {
        index: true, element: <Navigate to={"home"} replace={false} />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "blush",
        element: <BlushsMain />,
      },
      {
        path: "blush/:id",
        element: <BlushDetails />,
      },
      {
        path: "bronzer",
        element: <BronzerMain />,
      },
      {
        path: "bronzer/:id",
        element: <BronzerDetails />,
      },
      {
        path: "eyebrows",
        element: <EyeBrowsMain />,
      },
      {
        path: "eyebrows/:id",
        element: <EyeBrowsDetails />,
      },
      {
        path: "eyeliner",
        element: <EyelinerMain />,
      },
      {
        path: "eyeliner/:id",
        element: <EyelinerDetails />,
      },
      {
        path: "eyeshadow",
        element: <EyeShadowMain />,
      },
      {
        path: "eyeshadow/:id",
        element: <EyeshadowDetails />,
      },
      {
        path: "foundation",
        element: <FoundationMain />,
      },
      {
        path: "foundation/:id",
        element: <FoundationDetails />,
      },
      {
        path: "lipliner",
        element: <LipLinerMain />,
      },
      {
        path: "lipliner/:id",
        element: <LiplinerDetails />,
      },
      {
        path: "lipstick",
        element: <LipstickMain />,
      },
      {
        path: "lipstick/:id",
        element: <LipstickDetails />,
      },
      {
        path: "mascara",
        element: <MascaraMain />,
      },
      {
        path: "mascara/:id",
        element: <MascaraDetails />,
      },
      {
        path: "nailpolish",
        element: <NailPolishMain />,
      },
      {
        path: "nailpolish/:id",
        element: <NailPolishDetails />,
      },
    ],
    path: "*",
    errorElement: <ErrorElement />,
  },
]);

export { router };
