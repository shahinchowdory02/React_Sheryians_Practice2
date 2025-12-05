import { CiBookmarkCheck } from "react-icons/ci";

import img from "../assets/amazon_log.jpg";

const Card = () => {
  return (
    <div>
      <div className="card w-80 h-96 bg-white rounded-2xl shadow-lg p-10">
        <div>
          <div className="top flex justify-between items-center align-middle">
            <img
              src={img}
              alt="amazon"
              className="w-10 h-10 border-2 border-white shadow-lg rounded-xl"
            />
            <button className="border border-[#dadada] bg-blue-100 px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-2 align-   transition-all duration-300 ease-out hover:bg-blue-200 middle text-[11px] text-[b1b1b1b] hover:shadow-md hover:-translate-y-[1px] Follow">
              {" "}
              Save
              <span>
                <CiBookmarkCheck size={15} />
              </span>
            </button>
          </div>

          <div className="center">
            <h3 className="text-[15px] font-normal mt-4 ">
              Amazon
              <span className="text-[10px] font-normal ml-2 text-[#8b8b8b]">
                5 days ago
              </span>
            </h3>
            <h2 className="text-[20px] font-bold">Senior UI/UX Designer</h2>
            <div className="flex align-middle space-between gap-2 mt-3 mb-3">
              <h4
                className="text-[11px] text-center text-[#222] bg-[#dadada] py-1.5 px-3 rounded-lg font-medium border border-[#e5e5e5] transition-all duration-300
    hover:bg-[#e6e6e6]"
              >
                Part Time
              </h4>
              <h4
                className="text-[12px]
    text-[#222]
    bg-[#f0f0f0]
    py-1.5 px-3
    rounded-xl
    font-medium
    shadow-sm
    border border-[#e5e5e5]
    transition-all duration-300
    hover:bg-[#e6e6e6]"
              >
                Senior Leavel
              </h4>
            </div>
          </div>
        </div>

        <div className="bottom flex gap-6 border-t-[1.5px] border-[#d7d7d7ce] pt-[15px] mt-16">
          <div>
            <h3 className="font-bold text-2xl">$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <div>
            <button
              className="px-2.5 py-2 rounded-xl font-semibold mt-2
               text-[111] text-center bg-blue-100 from-blue-600 to-indigo-600 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:scale-[1.03] 
               active:scale-[0.97] transition-all duration-300 ease-out"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
