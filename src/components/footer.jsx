import React from "react";
export default function Footer() {
  return (
    <div className="flex min-h-20 w-screen flex-col items-center mt-10">
      <div className="flex min-h-[30vw] w-full ">
        <div className="flex flex-col max-md:w-screen max-md:flex-row min-h-auto w-30% pr-13">
          <div className="flex flex-row md:flex-col max-md:gap-11 ">
            <div className="lg:text-right flex flex-col md:w-1/2 md:mb-0  ml-20">
              <h1 className="text-white font-quantico text-xl items-center">
                Social
              </h1>
              <h3 className="text-white font-thin max-md:text-nowrap">
                Instagram
              </h3>
              <h3 className="text-white font-thin">LinkenIn</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col min-h-[27rem] w-[80%] backdrop-blur-sm inset-0 bg-black/50 rounded-lg pl-9 max-md:pl-0 max-md:flex-col gap-6">
          <div className="h-[5rem] w-[19rem]  flex justify-start">
            <h1 className="text-gray-100 text-3xl font-quantico font-extralight">
              Drop us a Line
            </h1>
          </div>
          <div className="h-[15rem] w-full  pt-10 gap-10  max-md:pl-0 pr-8 max-md:p-0">
            <div className="flex flex-col items-center gap-14 w-full p-4 ">
              <div className="flex w-full gap-4 max-md:flex-col">
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 bg-transparent border-b text-white focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="flex-1 bg-transparent border-b text-white focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="flex-1 bg-transparent border-b text-white focus:outline-none"
                />
              </div>

              <input
                type="text"
                placeholder="Message"
                className="w-full flex-1 bg-transparent border-b text-white focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-grow max-md:p-0">
            <button className="h-[2rem] w-[7rem] shadow-lg border-amber-600 border-1 rounded-4xl text-white font-semibold font-text hover:bg-amber-600">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="w-[80vw] border-t border-gray-600 mt-6"></div>

      <div className="text-gray-400 text-center mt-4 mb-6">
        © 2025 Dezors. All rights reserved.
      </div>
    </div>
  );
}
