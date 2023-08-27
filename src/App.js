import { Link, Route, Routes } from 'react-router-dom';
// import './App.css';
import { Home, Bronzer, EyeBrows, EyeShadow, Eyeliner, Foundation, LipLiner, Mascara, NailPolish, Lipstick, Blush } from './componenets';

import css from './headers.module.css';





function App() {
  return (
    <div> hello wwwwwwwwwwww
      <div className={css.headers}>
        <div>
          <div><Link to={'/home'}>Home page</Link></div>
        </div>

        <div className={css.headerRight}>
          <div><Link to={'/bronzer'}>Bronzer </Link></div>
          <div><Link to={'/blush'}> Blush </Link></div>
          <div><Link to={'/eyebrows'}>Eyebrows</Link></div>
          <div><Link to={'/eyeShadow'}>Eye shadow </Link></div>
          <div><Link to={'/eyeliner'}>Eyeliner </Link></div>
          <div><Link to={'/foundation'}>Foundation</Link></div>
          <div><Link to={'/lipLiner'}>Lip liner </Link></div>
          <div><Link to={'/lipstick'}>Lipstick </Link></div>
          <div><Link to={'/mascara'}>Mascara </Link></div>
          <div><Link to={'/nailPolish'}>Nail polish </Link></div>
        </div>
    </div>
      

      <Routes>
        <Route path={'/'} element={<Home />}/>

        <Route path={'blush'} element={<Blush />}>
        </Route>


        <Route path={'bronzer'} element={<Bronzer />}>
        </Route>


        <Route path={'eyebrows'} element={<EyeBrows />}>
        </Route>


        <Route path={'eyeShadow'} element={<EyeShadow />}>
        </Route>


        <Route path={'eyeliner'} element={<Eyeliner />}>
        </Route>


        <Route path={'foundation'} element={<Foundation />}>
        </Route>


        <Route path={'lipLiner'} element={<LipLiner />}>
        </Route>


        <Route path={'lipstick'} element={<Lipstick />}>
        </Route>


        <Route path={'mascara'} element={<Mascara />}>
        </Route>


        <Route path={'nailPolish'} element={<NailPolish />}>
        </Route> 
      </Routes>

    </div>
  );
}

export default App;
