import ReactPaginate from "react-paginate";

const Pagination = ({ total, currentPage, handlePageClick }) => {
  const totalPage = isNaN(total) ? 0 : total;
  const currPage = currentPage === 0 ? 0 : currentPage - 1;

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      previousLabel="Prev"
      pageRangeDisplayed={5}
      pageCount={totalPage}
      onPageChange={handlePageClick}
      forcePage={currPage}
      className="flex items-center space-x-2 text-[15px]"
      activeClassName="bg-orange-700 text-white"
      previousClassName="pr-1 hover:text-orange-600"
      nextClassName="pl-1 hover:text-orange-600"
      pageClassName="w-[35px] h-[35px] rounded flex justify-center items-center ring-1 ring-orange-600 ring-inset"
    />
  );
};

export default Pagination;
