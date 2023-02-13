import SignIn from "./SignIn";
import SignUp from "./SignUp";
import useStore from "src/store/zustand/useStore";

export default function Login() {
  const isSignIn = useStore((state) => state.isSignIn);

  return (
    <div className="-z-10 ">
      <video
        loop
        autoPlay
        muted
        width={1600}
        className="lg:hidden fixed object-cover"
      >
        <source
          src="https://ant-files-v1-staging.s3.ap-southeast-1.amazonaws.com/hungvnp/vtlshopping_v2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {isSignIn && <SignIn />}
      {!isSignIn && <SignUp />}
    </div>
  );
}
