import React, { useState } from "react";

const BasicCalculator = () => {
  const [inputvalue, setInputValue] = useState('')
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
        <div
          className="w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden"
          style={{ maxWidth: "500px" }}
        >
          <div className="w-full h-28 bg-[#f9dcb8]  flex items-end text-right">
            <div className="w-full py-5 px-6 text-6xl text-black font-thin">
              {inputvalue}
            </div>
          </div>
          <div className="w-full bg-[#f9dcb8]">
            <div className="flex w-full">
              <div className="w-1/4  mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue('')} className="w-full h-16 outline-none focus:outline-none bg-[#ffe5d5] hover:bg-opacity-80 text-black text-xl font-light">
                  C
                </button>
              </div>
              <div className="w-1/4  mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue + '+/-')} className="w-full h-16 outline-none focus:outline-none bg-[#ffe5d5] hover:bg-opacity-80 text-black text-xl font-light">
                  +/-
                </button>
              </div>
              <div className="w-1/4  mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue + '%')}  className="w-full h-16 outline-none focus:outline-none bg-[#ffe5d5] hover:bg-opacity-80 text-black text-xl font-light">
                  %
                </button>
              </div>
              <div className="w-1/4  mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue.slice(0, -1))} className="w-full h-16 outline-none focus:outline-none bg-[#ffe5d5] hover:bg-opacity-80 text-black text-2xl font-light">
                  x
                </button>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4  mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue + '1/x')} className="w-full h-16 outline-none focus:outline-none bg-[#ffe5d5] hover:bg-opacity-80 text-black text-xl font-light">
                  1/x
                </button>
              </div>
              <div className="w-1/4  mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue + 'x²')} className="w-full h-16 outline-none focus:outline-none bg-[#ffe5d5] hover:bg-opacity-80 text-black text-xl font-light">
                  x²
                </button>
              </div>
              <div className="w-1/4  mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue + '∛')} className="w-full h-16 outline-none focus:outline-none bg-[#ffe5d5] hover:bg-opacity-80 text-black text-xl font-light">
                  ∛
                </button>
              </div>
              <div className="w-1/4  mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue + '÷')} className="w-full h-16 outline-none focus:outline-none bg-[#ffe5d5] hover:bg-opacity-80 text-black text-2xl font-light">
                  ÷
                </button>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4  mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue + 7)} className="w-full h-16 outline-none focus:outline-none bg-white hover:bg-opacity-80 text-black text-xl font-light">
                  7
                </button>
              </div>
              <div className="w-1/4  mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue + 8)} className="w-full h-16 outline-none focus:outline-none bg-white hover:bg-opacity-80 text-black text-xl font-light">
                  8
                </button>
              </div>
              <div className="w-1/4  mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue + 9)} className="w-full h-16 outline-none focus:outline-none bg-white hover:bg-opacity-80 text-black text-xl font-light">
                  9
                </button>
              </div>
              <div className="w-1/4  mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue + '⨉')} className="w-full h-16 outline-none focus:outline-none bg-[#ffe5d5] hover:bg-opacity-80 text-black text-xl font-light">
                  ⨉
                </button>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4  mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue + 4)} className="w-full h-16 outline-none focus:outline-none bg-white hover:bg-opacity-80 text-black text-xl font-light">
                  4
                </button>
              </div>
              <div className="w-1/4  mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue + 5)} className="w-full h-16 outline-none focus:outline-none bg-white hover:bg-opacity-80 text-black text-xl font-light">
                  5
                </button>
              </div>
              <div className="w-1/4  mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue + 6)} className="w-full h-16 outline-none focus:outline-none bg-white hover:bg-opacity-80 text-black text-xl font-light">
                  6
                </button>
              </div>
              <div className="w-1/4  mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue + '-')} className="w-full h-16 outline-none focus:outline-none bg-[#ffe5d5]  hover:bg-opacity-80 text-black text-xl font-light">
                  -
                </button>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4  mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue + 1)} className="w-full h-16 outline-none focus:outline-none bg-white hover:bg-opacity-80 text-black text-xl font-light">
                  1
                </button>
              </div>
              <div className="w-1/4  mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue + 2)} className="w-full h-16 outline-none focus:outline-none bg-white hover:bg-opacity-80 text-black text-xl font-light">
                  2
                </button>
              </div>
              <div className="w-1/4  mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue + 3)} className="w-full h-16 outline-none focus:outline-none bg-white hover:bg-opacity-80 text-black text-xl font-light">
                  3
                </button>
              </div>
              <div className="w-1/4  mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue + "+")} className="w-full h-16 outline-none focus:outline-none bg-[#ffe5d5]  hover:bg-opacity-80 text-black text-xl font-light">
                  +
                </button>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4 mx-[1px] my-[1px]">
                <button className="w-full h-16 outline-none focus:outline-none bg-white hover:bg-opacity-80 text-black text-xl font-light">
                  +/-
                </button>
              </div>
              <div className="w-1/4 mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue + 0)} className="w-full h-16 outline-none focus:outline-none bg-white hover:bg-opacity-80 text-black text-xl font-light">
                  0
                </button>
              </div>
              <div className="w-1/4 mx-[1px] my-[1px]">
                <button onClick={(e)=> setInputValue(inputvalue + '.')} className="w-full h-16 outline-none focus:outline-none bg-white hover:bg-opacity-80 text-black text-xl font-light">
                  .
                </button>
              </div>
              <div className="w-1/4 mx-[1px] my-[1px]">
                <button className="w-full h-16 outline-none focus:outline-none bg-[#b24c0c] hover:bg-opacity-80 text-white text-xl font-light">
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BasicCalculator;
