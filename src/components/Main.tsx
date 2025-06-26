import bgNoise from "../assets/bg-img/noise2.png";
import Header from "./Header";
import Introduce from "./Introduce";

export default function Main() {
  return (
    <>
      <div className="w-full h-screen relative dark:bg-[#131313] bg-white">
        <img src={bgNoise} className="absolute w-full h-full inset-0 opacity-60 bg-repeat" />

        <Header />
        <div className="absolute ml-10 h-screen w-px dark:bg-[#B0B0B0] opacity-20"></div>
        <div className="absolute top-[178px] w-full h-px dark:bg-[#B0B0B0] opacity-20"></div>
        <div className="absolute top-[201px] w-full h-px dark:bg-[#B0B0B0] opacity-20"></div>
        <div className="absolute top-[178px] right-0">
          <Introduce />
        </div>
        <div className="absolute z-20 bottom-0 ml-20 dark:text-[#B0B0B0]">
          <span className="absolute flex flex-col sm:text-2xl mt-5 font-mono opacity-80">
            &lt;FRONT-END DEVELOPER /&gt;
          </span>
          <p className="sm:text-[220px] mt-2 bottom-0 font-bold font-mono">KIM BOMIN</p>
        </div>
      </div>
    </>
  );
}
