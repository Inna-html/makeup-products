import css from './errorElement.module.css';


const ErrorElement = () => {

console.log('was error');

    return (
    <div className={css.oopsy}>
        <h1>Oops! There was an error.
        </h1>
            <img 
                src={require('../../image/img/oops.png')} 
                className={css.oops} 
                alt={'oops'}
            />
    </div>
    )
}

export { ErrorElement };

