import css from './home.module.css';


const Home = () => {

    return (
        <div className={css.HomePage}>
            
            <div className={css.HomePageBlock}>
                <h1> Welcome to the cosmetics selection website. </h1>

                <p>
                    Here you can find products such as Blush, Bronzer, Eyebrow, Eyeliner, Eyeshadow, Foundation, Lip liner, Lipstick, Mascara, Nail polish. * <br/>

                    The assortment includes cosmetics of different brands, and also contains notes such as Canadian, CertClean, Chemical Free, Dairy Free, EWG Verified, 
                    EcoCert, Fair Trade, Gluten Free, Hypoallergenic, Natural, No Talc, Non-GMO, Organic, Peanut Free Product, Sugar Free, USDA Organic, Vegan, alcohol free,
                    cruelty free, oil free, purpicks, silicone free, water free. <br/>
                </p>
               
                <p>
                   * The selection was created on the basis of old data, but links to cosmetics websites have been added to the products, where you can pick up an analog.
                </p>
            </div>
            {/* <div className={css.imgHome}>
                <img src={('https://s814sas.storage.yandex.net/rdisk/7228afd78e4e5c85557469896e6a883f2085db56139ee7a44a93a7f534fa77fe/650f885a/1zpANmKvxPvQNW_4BGpAZpPSUgaSYVZwvpYlcpYUidKJytlIzMMAG5aUE28fNeeehWmbSrd2c9GNfJYobSIh8Q==?uid=163861245&filename=single-pot.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=163861245&fsize=391360&hid=9356b91ece0d8ff5e4ba3af011300011&media_type=image&tknv=v2&etag=dc306c9f90f8fb988f985fa68ff11f75&rtoken=D6ZrbpvaD2mr&force_default=yes&ycrid=na-433e03f13fe9e2acfc97dee4cca51f84-downloader6e&ts=60610424f4a80&s=38790466e3cb20b04522e464e9a825a6622513ebd4a8c9d945bb250aa435faa2&pb=U2FsdGVkX183DMPmg7ITNiYfPJEc45qBdBaaASGluZM6iRpBcwmxLGyDJk3YC3qiGHyC8CvEy93xEKxQxeo3EcrKfWAmfg7N2dMCFy3_B2I')} 
                alt='nail_polish'/>
                <img src={('https://s514sas.storage.yandex.net/rdisk/d15513573228073677cb1d3b73653da4b135fdd8a94c3dd42badef193e391d26/650f8885/1zpANmKvxPvQNW_4BGpAZriTNCLq3wqjzP1ymi0DXndS0p-E_bRvSzD04RDR-59b7WaB_GlxzatW2QXV5joC6A==?uid=163861245&filename=nail-polish.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=163861245&fsize=395838&hid=9386db9295c3e0634998ed8b2b83db48&media_type=image&tknv=v2&etag=ccf4205b85740ebcb44980c801382703&rtoken=kiMGDcnYdDdj&force_default=yes&ycrid=na-54268634aecb1f09cb73fd901f012ac1-downloader8h&ts=6061044df6b40&s=c8e4d973e81a04e06f879ffbabe73fe13b91c6531479f93348f305d9a8e1fc1d&pb=U2FsdGVkX1-WvG-m6p_X8iAnfGxbhH62fXC3U2BEYyW2Aru5eLkDsjv18nnIHMIE0sguOV5LXwS9MbZ4oxVURZVikOu0qlkbHFbVnm1mzTg')} 
                alt='single-pot'/>
            </div> */}
        </div>
    )
}

export { Home };
