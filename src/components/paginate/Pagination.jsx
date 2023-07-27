import ReactPaginate from "react-paginate";

const Pagination = ({ total, handlePageClick }) => {
  const totalPage = isNaN(total) ? 0 : total;

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      previousLabel="Prev"
      pageRangeDisplayed={5}
      pageCount={totalPage}
      onPageChange={handlePageClick}
      className="flex items-center space-x-2 text-[15px]"
      activeClassName="bg-orange-700"
      pageClassName="w-[25px] p-[2px] text-center bg-orange-600 text-white"
    />
  );
};

export default Pagination;
