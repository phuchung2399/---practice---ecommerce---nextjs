import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SizeGuide from "./SizeGuide";
import Product from "src/model/Product";
import { useCallback, useState } from "react";
import useStore from "src/store/zustand/useStore";

interface AppProps {
  singleProduct: Product;
}
export default function Tabbed({ singleProduct }: AppProps) {
  const [numComment, setNumComment] = useState(0);
  const indexTab = useStore((state) => state.indexTab);
  const setIndexTab = useStore((state) => state.setIndexTab);

  const numberCommentHandler = useCallback((numberOfComment: number) => {
    setNumComment(numberOfComment);
  }, []);

  return (
    <div id="tab-section">
      <Tabs
        className="text-base"
        // defaultIndex={1}
        selectedIndex={indexTab}
        onSelect={(index) => setIndexTab(index)}
        selectedTabClassName="bg-[#fff] text-black font-semibold border-b-4 border-primary-color -translate-y-[16%] transition duration-300"
      >
        <TabList className="flex gap-[10px] text-gray-400">
          <Tab className="flex-1 h-12 cursor-pointer flex items-center justify-center">
            Size guide
          </Tab>
        </TabList>
        <TabPanel className="bg-white ">
          <SizeGuide />
        </TabPanel>
      </Tabs>
    </div>
  );
}
