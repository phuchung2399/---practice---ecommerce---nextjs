import SizeGuide from "./SizeGuide";

export default function Tabbed() {

  return (
    <div id="tab-section">
      <div
        className="bg-[#fff] font-semibold border-b-4 border-primary-color-translate-y-[16%] transition duration-300"
      >
        <div className="flex gap-[10px] text-gray-400">
          <div className="flex-1 text-black h-12 cursor-pointer flex items-center justify-center border-t-[3px] border-y-lime-700">
            Size guide
          </div>
        </div>
        <div className="bg-white ">
          <SizeGuide />
        </div>
      </div>
    </div>
  );
}
