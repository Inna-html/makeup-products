import css from './hasError.module.css';


const HasError = () => {

    return (
        <div className={css.hasError}>
            <h1>The data of blush is not loaded</h1>
            <img 
            className={css.oops} 
            alt={'oops'} 
            src={('https://s429vlx.storage.yandex.net/rdisk/86dca571ae4871ed96224dad871bafdf6c3f295cdfe21d5f4822adf2b3194e78/6543d243/1zpANmKvxPvQNW_4BGpAZmPTqhIwBbkO5Em1D3BMkUAWW8IYaKHElUVeXzWILJKS9vX7GiPL5Hpzlw7JNb89dw==?uid=163861245&filename=1698927493812.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=163861245&fsize=866824&hid=371a922c196f2f822bd7cb39c7850d80&media_type=image&tknv=v2&etag=d8d041c9434a26f33ae7120940d97771&rtoken=udOFFxhx1thb&force_default=yes&ycrid=na-6bb6566cb451ec0e87336c4dd24aa72a-downloader10f&ts=6092e1f16d6c0&s=08192244fbd8a1855be9143a4a42c54d9ea8cb4bed2b31ff74dcabd27db6f067&pb=U2FsdGVkX1-GUubIWvpvnUC9aMbiPOdbH9hjzfiCyKvMkuLSJR027hMkZfZyqMyNl_-ysfn7W8VmIL8kHi6esV5k4jCy6pefVpnnCb_khic')} 
        />
        </div>
    )
};

export { HasError };
