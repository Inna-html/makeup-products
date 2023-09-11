import css from './errorElement.module.css';


const ErrorElement = () => {

    return (
        <div className={css.oopsy}>
            <h1>Oops! There was an error.</h1>
            <img className={css.oops} src={('https://cdn11.bigcommerce.com/s-ccerkj57m6/images/stencil/1280x1280/products/276/666/oops__68425.1528235707.jpg?c=2&imbypass=on')} />,
        </div>
    )
}

export { ErrorElement };

