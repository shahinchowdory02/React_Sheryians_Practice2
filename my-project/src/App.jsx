import img from "./assets/react.svg";
import "./App.css";
import { CiBookmarkCheck } from "react-icons/ci";
const App = () => {
  return (
    <div className="parent h-screen w-screen bg-[#111] p-20">
      <div className="card w-80 h-96 bg-white rounded-2xl shadow-lg p-10">
        <div className="top flex justify-between items-center align-middle">
          <img
            src={img}
            alt="amazon"
            className="w-8 h-8 border-2 border-white shadow-lg rounded-xl"
          />
          <button className="border border-[#dadada] bg-blue-100 px-2 py-1 rounded-xl shadow-md hover:bg-blue-200 flex items-center gap-2 align-middle text-[11px] text-[b1b1b1b] ">
            Save
            <span>
              <CiBookmarkCheck size={15} />
            </span>
          </button>
        </div>

        <div className="center">
          <h3 className="text-[15px] font-normal mt-4 mb-1 gap-2">
            Amazon
            <span className="text-[10px] font-normal text-[#8b8b8b]">
              5 days ago
            </span>
          </h3>
          <h2 className="text-[20px]">Senior UI/UX Designer</h2>
          <div className="flex align-middle space-between gap-2  mt-3 mb-3">
            <h4 className="text-[14px] text-[#111] bg-[#dadada] py-.5 px-1.5 rounded-lg">
              Part Time
            </h4>
            <h4 className="text-[14px]  text-[#111] bg-[#dadada] py-.5 px-1.5 rounded-lg">
              Senior Leavel
            </h4>
          </div>
        </div>

        <div className="bottom flex align-middle space-between border-t-2 border-[#b1b1b1] pt-[15px] mt-20">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button>
          <p>Hello World</p>
        </div>
      </div>
    </div>
  );
};

export default App;
