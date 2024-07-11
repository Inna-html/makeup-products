import css from './pagination.css'


function Pagination({ mainPage, totalPosts, setCurrentPage }) {
  const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPosts / mainPage); i++) {
    pageNumber.push(i);
  }
    

  return (
    <div className={css.pagination}>
       {pageNumber.map((page, index) => {
        return <button
          key={index}
          onClick={() => {
          setCurrentPage(page)
        }}> {page}</button>
      })}
      </div>
  );
}


export { Pagination };

