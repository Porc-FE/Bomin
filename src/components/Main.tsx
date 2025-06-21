import noiseImg2 from "../assets/img/broken-noise.png";
import { IoSunnyOutline, IoShareSocialOutline } from "react-icons/io5";
import Introduce from "./Introduce";

const toTopHandler = () => {
  window.scroll({ top: 0, behavior: "smooth" });
};
export default function Main() {
  return (
    <>
      <div className="w-full h-screen relative bg-[#1B1B1B]">
        <img
          src={noiseImg2}
          onClick={toTopHandler}
          className="absolute w-full h-full inset-0 opacity-40 bg-no-repeat"
        />

        <header className="w-full flex absolute justify-between">
          <div className="font-mono sm:text-[30px] dark:text-[#B0B0B0] dark:hover:text-[#F6F6F6] cursor-pointer ml-20 mt-5">
            PORTFOLIO
          </div>
          <div className="flex gap-4 mt-5">
            <div className="bg-[#404040] sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
              <IoSunnyOutline className="absolute w-6 h-6 text-white" />
            </div>
            <div className="bg-[#404040] sm:w-10 sm:h-10 rounded-full flex items-center justify-center sm:mr-10">
              <IoShareSocialOutline className="absolute w-6 h-6 text-white" />
            </div>
          </div>
        </header>
        <div className="absolute ml-10 h-screen w-px bg-[#B0B0B0] opacity-20"></div>
        <div className="absolute top-[178px] w-full h-px bg-[#B0B0B0] opacity-20"></div>
        <div className="absolute top-[201px] w-full h-px bg-[#B0B0B0] opacity-20"></div>
        <div className="absolute top-[178px] right-0">
          <Introduce />
        </div>
        <div className="absolute z-20 bottom-0 ml-20 text-[#B0B0B0]">
          <span className="absolute flex flex-col sm:text-2xl mt-5 font-mono opacity-80">
            &lt;FRONT-END DEVELOPER /&gt;
          </span>
          <p className="sm:text-[220px] mt-2 bottom-0 font-bold font-mono">KIM BOMIN</p>
        </div>
      </div>
    </>
  );
}
