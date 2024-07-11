import css from './hasError.module.css';


const HasError = () => {

    return (
        <div className={css.hasError}>
            <h1>The data of blush is not loaded</h1>
            <img 
                src={require('../../image/img/oops.png')} 
                className={css.oops} 
                alt={'oops'} 
            />
        </div>
    )
};

export { HasError };
