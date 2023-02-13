type AppProps = {
  children: React.ReactNode;
};

import Header from "@/components/layout/Header";
import { useAppDispatch, useAppSelector } from "src/store/redux-toolkit/hooks";
import sendCartData, { fetchCartData } from "src/store/redux-toolkit/cartThunk";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import useStore from "src/store/zustand/useStore";
import Link from "next/link";
import "animate.css";
import { Transition } from "react-transition-group";
import { AiFillGithub } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

let isInitial = true;

export default function Layout({ children }: AppProps): JSX.Element {
  const [parent] = useAutoAnimate();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const router = useRouter();
  const setToken = useStore((state) => state.setToken);
  const setEmail = useStore((state) => state.setEmail);
  const setAvatar = useStore((state) => state.setAvatar);
  const isLoggedIn = useStore((state) => !!state.tokenId);
  const setLovedProductIds = useStore((state) => state.setLovedProductIds);
  const showHeader = router.pathname === "/auth" || router.pathname === "/" ? false : true;

  const nodeRef = useRef(null);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const avatar = localStorage.getItem("avatar");

    if (token && email && avatar) {
      setToken(token);
      setEmail(email);
      setAvatar(avatar);
    }
  }, [setToken, setEmail, setAvatar]);

  useEffect(() => {
    if (isLoggedIn) {
      const lovedProductIdsJSON = localStorage.getItem("love");
      if (lovedProductIdsJSON !== null) {
        const lovedProductIds = JSON.parse(lovedProductIdsJSON);

        setLovedProductIds(lovedProductIds);
      }
    }
  }, [isLoggedIn, setLovedProductIds]);

  const [isOpenLabel, setIsOpenLabel] = useState(false);
  const handleClickLabel = () => {
    setIsOpenLabel((prev) => !prev);
  };

  useEffect(() => {
    setIsOpenLabel(false);
  }, [router.pathname]);

  return (
    <>
      {showHeader && <Header />}

      <main className=" bg-[#fafafa] dark:bg-[#191919] dark:text-[#DDDDDD]">
        {children}

        <Transition
          in={isOpenLabel}
          timeout={800}
          mountOnEnter
          unmountOnExit
          nodeRef={nodeRef}
        >
          {(state) => {
            return (
              <div
                ref={nodeRef}
                className={`fixed right-[36px] top-[45vh] bg-[#F6F5F3] py-3 px-3 z-20 shadow-sm ${
                  state === "entering"
                    ? "animate__animated animate__bounceInRight animate__fast"
                    : state === "exiting"
                    ? "animate__animated animate__bounceOutRight animate__fast"
                    : " "
                }`}
              >
                <Link href="/cart" passHref>
                  <a
                    className="uppercase bg-primary-color  font-medium text-lg
                rounded-full
                active:shadow-sm active:scale-[.98] active:translate-y-0 
                active:bg-[#e5b32f] 
                hover:bg-[#fecd48] hover:-translate-y-[2px] 
                transition-all duration-[250ms] 
                z-10 relative overflow-hidden 
                py-3 px-5
                mx-auto
                group
                block text-center max-w-[150px]"
                  >
                    Checkout
                    <div
                      className="-z-10 bg-[#ffffff33] 
                  absolute top-[-1000%] bottom-[-375%] 
                  w-9 
                  translate3d-rotate group-hover:transition group-hover:duration-[1000ms] group-hover:ease-in-out group-hover:translate3d-rotate-hover"
                    ></div>
                  </a>
                </Link>
              </div>
            );
          }}
        </Transition>
      </main>

      {showHeader && (
        <footer className="h-[38px] bg-[#333333] flex items-center px-10 justify-between">
          <p className="text-white">Copyright © 2023</p>
          <div className="flex gap-4 items-center">
            <Link href="https://github.com/phuchung2399">
              <a>
                <AiFillGithub
                  size={25}
                  className="text-white hover:text-blue-500 transition duration-300"
                />
              </a>
            </Link>
          </div>
        </footer>
      )}
    </>
  );
}
