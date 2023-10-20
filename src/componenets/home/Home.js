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
            <div className={css.imgHome}>
                <img 
                    alt={"cosmetics"} 
                    src={("https://i.sunhome.ru/journal/241/doveryat-effektivnosti-kosmetiki-dlya-zhizni.540.orig.jpg")}
                />
            </div>
        </div>
    )
}

export { Home };
