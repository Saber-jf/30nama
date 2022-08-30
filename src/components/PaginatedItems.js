import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";

function PaginatedItems({ NumberOfPage, func }) {
  // const currentPage = (data) => data.selected;
  // useEffect(
  //   (data) => {
  //     func(data.selected + 1);
  //   },
  //   [currentPage]
  // );
  return (
    <div className="flex justify-center bg-gray-100 px-8 rounded-full border-gray-600    mt-8  ">
      <ReactPaginate
        previousLabel={"<<<  "}
        nextLabel={"   >>>"}
        breakLabel={".   .   .   .  ."}
        pageCount={500}
        marginPagesDisplayed={2}
        // pageRangeDisplayed={2}
        onPageChange={(data) => func(data.selected + 1)}
        containerClassName={"flex p-4 items-center jus w-full gap-4"}
        pageClassName=" bg-blue-200 px-4 border-2 rounded-full"
        activeClassName={"text-black text-[23px] font-bold  bg-blue-400  "}
        nextClassName={"px-2 border-2 border-gray-300 rounded-r-full "}
        previousClassName={"px-2 border-2 border-gray-300 rounded-l-full "}
        pageLinkClassName={"text-green-4"}
        forcePage={0}
      />
    </div>
  );
}

export default PaginatedItems;
