import Link from "next/link";
import Image from "next/image";

import { AiFillFire } from "react-icons/ai";
import { BsFillPlayCircleFill } from "react-icons/bs";

import ActiveLinkImprove from "src/components/layout/ActiveLinkImprove";
import { NavData } from "src/model/NavData";

import guy from "assets/banner.jpg";
import shirtLanding from "assets/Shirt-landing.png";
import shoeLanding from "assets/Shoe-landing.png";
import sunglassesLanding from "assets/Sunglasses-landing.png";

const navItems = [
  new NavData("Men"),
  new NavData("Women"),
  new NavData("Children"),
  new NavData("Shoes"),
  new NavData("Accessory"),
];

const HomePage = () => {
  return (
    <>
      <div className="max-w-[1290px] mx-auto pt-[50px] ">
        <div className="flex justify-between md:flex-col">
          <Link href="/" passHref>
            <a
              className="text-[37px] relative -translate-x-8
          xs:translate-y-5
          md:translate-x-32 md:translate-y-0
          w-[200px]
          md:mt-5"
            >
              <span className="font-extrabold">VTL</span>
              <span className="font-normal drop-shadow-logo">Shopping</span>
            </a>
          </Link>
          <nav>
            <ul className="flex gap-8 font-medium">
              {navItems.map((navItem) => (
                <li
                  key={navItem.id}
                  className="relative group transition p-1 
              "
                >
                  <ActiveLinkImprove href={navItem.url}>
                    <a>{navItem.name}</a>
                  </ActiveLinkImprove>
                  <div className="absolute bottom-0 left-0 w-0 right-0 m-auto text-transparent bg-[#aaa] h-[3px] text-left opacity-0 group-hover:-z-10 group-hover:opacity-100 group-hover:animate-nav-move" />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-start gap-20 mt-[70px] md:mt-5 md:flex-col">
          <div className="max-w-[600px] mt-4 md:text-center">
            <p className=" text-gray-400 tracking-wider font-semibold mb-3 text-xl flex items-center gap-1">
            There are new product models waiting for you{" "}
              <AiFillFire size={30} fill="#14b24c" className="text-primary-color" />
            </p>
            <p
              style={{ wordSpacing: "15px" }}
              className="text-[90px] font-bold tracking-tighter mb-10"
            >
              <p className="whitespace-nowrap">Great discount</p>
              <p className="whitespace-nowrap">up to 70%</p>
            </p>
            <div className="mt-9 flex items-center gap-5">
              <Link href="/men">
                <a
                  className="btn-shopping uppercase bg-primary-color font-medium text-lg rounded-lg
                active:shadow-sm active:scale-[.98] active:translate-y-0 
                active:bg-[#14b24c] 
                hover:bg-[#14b24c] hover:-translate-y-[2px] 
                transition-all duration-[250ms] 
                z-10 relative overflow-hidden 
                py-3 px-5
                group
                inline-block text-center
                animate-pulse
                "
                >
                  <div className="flex gap-3 items-center">
                    <p>Let&apos;s go shopping now</p> <BsFillPlayCircleFill size={25} fill="#ffffff"/>
                  </div>
                  <div
                    className="-z-10 bg-[#ffffff33] 
                  absolute top-[-1000%] bottom-[-375%] 
                  w-9 
                  translate3d-rotate group-hover:transition group-hover:duration-[1000ms] group-hover:ease-in-out group-hover:translate3d-rotate-hover"
                  ></div>
                </a>
              </Link>
            </div>
          </div>

          <div className="relative w-[600px] h-[600px] shrink-0 overflow-x-hidden">
            <Image src={guy} alt="" layout="fill" className="object-cover" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-24 -mt-10 xl:mt-8 mx-auto pt-[50px]">
        <div className="flex-grow">
          <div className="flex items-center gap-4 mb-6">
          </div>
          <div className="bg-[#1a1a1a] py-[17px] px-12">
            <ul className="flex md:flex-col md:gap-5 footer">
              <li className="flex items-center gap-3 pr-[45px]">
                <div className="w-36 h-36 relative">
                  <Image
                    src={shirtLanding}
                    alt=""
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <div className="text-white">
                  <p className="font-bold mb-2 text-xl">SHIRTS</p>
                  <Link href="/men">
                    <a className="text-gray-200 text-sm hover:text-gray-400 transition duration-300 tracking-wider">
                      See All
                    </a>
                  </Link>
                </div>
              </li>
              <li className="flex items-center gap-3 px-[45px] md:border-x-2 md:border-slate-700">
                <div className="w-36 h-36 relative">
                  <Image
                    src={shoeLanding}
                    alt=""
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <div className="text-white">
                  <p className="font-bold mb-2 text-xl">SHOES</p>
                  <Link href="/shoes">
                    <a className="text-gray-200 text-sm hover:text-gray-400 transition duration-300 tracking-wider">
                      See All
                    </a>
                  </Link>
                </div>
              </li>
              <li className="flex items-center gap-3 pl-[45px]">
                <div className="w-36 h-36 relative">
                  <Image
                    src={sunglassesLanding}
                    alt=""
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <div className="text-white">
                  <p className="font-bold mb-2 text-xl">Accessory</p>
                  <Link href="/accessory">
                    <a className="text-gray-200 text-sm hover:text-gray-400 transition duration-300 tracking-wider">
                      See All
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
