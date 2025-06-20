import noiseImg2 from "../../public/broken-noise.png";
import { IoSunnyOutline } from "react-icons/io5";

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
          className="absolute w-full h-full inset-0 opacity-40 bg-repeat"
        />
        <header className="w-full flex absolute justify-between">
          <div className="font-mono sm:text-[30px] dark:text-[#B0B0B0] dark:hover:text-[#F6F6F6] cursor-pointer ml-10 mt-5">
            PORTFOLIO
          </div>
          <div className="bg-[#404040] sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-4">
            <IoSunnyOutline className="absolute w-6 h-6" />
          </div>
        </header>

        <div className="absolute z-20 bottom-0 ml-10 text-[#B0B0B0]">
          <span className="absolute flex flex-col text-2xl mt-5 tracking-normal font-mono">
            &lt;FRONT-END DEVELOPER /&gt;
          </span>
          <p className="text-[220px] mt-2 bottom-0 font-bold font-mono">KIM BOMIN</p>
        </div>
      </div>
    </>
  );
}
