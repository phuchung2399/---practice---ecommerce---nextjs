import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useAppSelector } from "src/store/redux-toolkit/hooks";
import useStore from "src/store/zustand/useStore";

export default function Header() {
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const isLoggedIn = useStore((state) => !!state.tokenId);
  const userEmail = useStore((state) => state.email);
  const userAvatar = useStore((state) => state.avatar);
  const logout = useStore((state) => state.logout);

  return (
    <header
      className={`pt-10 
    px-24 xl:px-6
    pb-5 transition duration-300 
    xs:text-sm
    sm:pt-6
    `}
    >
      <div className={`flex items-center justify-between  relative mb-14`}>
        {!isLoggedIn && (
          <Link href="/auth" passHref>
            <a className="flex items-center gap-1">
              <HiOutlineUser className="text-2xl" />
              <p className="font-semibold">Login</p>
            </a>
          </Link>
        )}
        {isLoggedIn && (
          <div className="flex items-center gap-3">
            <div
              className="relative h-11 w-11 rounded-full overflow-hidden
            xs:h-7 xs:w-7"
            >
              <Image
                src={
                  userAvatar
                    ? userAvatar
                    : "https://i.ibb.co/CJqGvY6/satthudatinh.jpg"
                }
                alt=""
                layout="fill"
                className="object-cover"
              />
            </div>
            <div>
              <div
                className="text-semibold text-base
              xs:text-sm"
              >
                {userEmail.slice(0, -10)}
              </div>
              <button
                onClick={logout}
                className="text-gray-500 text-sm
              xs:text-xs"
              >
                Logout
              </button>
            </div>
          </div>
        )}
        <Link href="/" passHref>
          <a
            className="text-[27px] relative -translate-x-8
          xs:translate-y-5"
          >
            <span className="font-extrabold">VTL</span>
            <span className="font-normal drop-shadow-logo">Shoppng</span>
          </a>
        </Link>

        <Link href="/cart" passHref>
          <a className="relative">
            <HiOutlineShoppingCart
              className="text-2xl
            xs:text-lg"
            />
            {totalQuantity > 0 && (
              <div
                className="absolute -top-1 -left-3 h-4 w-5 rounded-lg bg-[#eb5757] flex items-center justify-center text-white
              xs:text-xs xs:h-3 xs:w-4"
              >
                {totalQuantity}
              </div>
            )}
          </a>
        </Link>
      </div>
      <Navigation />
    </header>
  );
}
