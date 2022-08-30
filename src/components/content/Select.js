import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function Select({ slectionInfo, func }) {
  const [selection, setSelection] = useState(slectionInfo.options[0]);
  const [hide, SetHide] = useState(false);
  console.log(slectionInfo.options);

  return (
    <div>
      <div className="flex items-start ">
        <h1 className="text-[22px] font-bold">{slectionInfo.title}</h1>
        <div className="absolute left-36  ">
          <div
            className={`bg-[#032541]  text-white ${
              hide ? "hidden" : "flex"
            }   items-center border-[1px] py-1 ml-10 rounded-full h-auto`}
          >
            <h1 className="pl-5 text-[1.2em] pr-2 font-semibold">
              {selection}
            </h1>
            <span className={` text-[25px] pr-5 `}>
              <MdKeyboardArrowDown onClick={() => SetHide(!hide)} />
            </span>
          </div>
          <div
            className={` ${
              hide ? "block" : "hidden"
            }  select space-y-1 border-[1px]  ml-10 rounded-2xl h-auto overflow-hidden`}
          >
            {slectionInfo.options?.map((option) => (
              <div
                onClick={() => func(option)}
                className={`py-1 flex items-center rounded-full ${
                  selection == option && "bg-[#032541] text-white"
                }`}
              >
                <h1
                  onClick={() => {
                    SetHide(!hide);
                    setSelection(option);
                    // func(selection);
                  }}
                  // onClick={() => setSelection(option)}
                  className={`pl-5 text-[1.2em] pr-2 font-semibold    `}
                >
                  {option}
                </h1>
                <span
                  className={` text-[25px] pr-5  ${
                    selection == option ? "block" : "hidden"
                  }`}
                >
                  <MdKeyboardArrowDown onClick={() => SetHide(!hide)} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Select;
