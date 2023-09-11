import css from './footer.module.css';

const Footer = () => {

    return (
        <div className={css.footer}>
            <div>
                <span>Info: </span> 
                <p>
                    The selection was created on the basis of old data, but links to cosmetics websites have been added to the products, where you can pick up an analog.
                </p>
            </div> 
        </div>
    )
}

export { Footer };


