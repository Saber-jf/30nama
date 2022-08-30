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
    <div className="flex justify-center  un max-w-[800px] mt-8  ">
      <ReactPaginate
        previousLabel={"<<<<  "}
        nextLabel={"   >>>>"}
        breakLabel={". . . . . ."}
        pageCount={500}
        marginPagesDisplayed={3}
        // pageRangeDisplayed={2}
        onPageChange={(data) => func(data.selected + 1)}
        containerClassName={"flex p-2 items-center jus w-full gap-1 "}
        pageClassName=" bg-blue-300 px-2 border-2 borde  "
        activeClassName={
          "text-black text-[20px]  bg-blue-600 font-bold underline bg-red-400 "
        }
        nextClassName={"p-2 border-2"}
        previousClassName={"p-2 border-2"}
        pageLinkClassName={"   text-green-4"}
        forcePage={4}
      />
    </div>
  );
}

export default PaginatedItems;
