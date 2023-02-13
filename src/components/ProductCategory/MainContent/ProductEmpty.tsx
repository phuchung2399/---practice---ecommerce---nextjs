import hangerEmpty from "assets/notFound.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function CartEmpty() {
  const router = useRouter();

  const goHomepageHandler = () => {
    router.push("/men");
  };

  return (
    <div className="text-center">
      <div className="mb-8">
        <Image
          src={hangerEmpty}
          alt="image 404"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
