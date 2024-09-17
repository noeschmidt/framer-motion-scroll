import Image from "next/image";
import SalleImg from "@/public/salle.png";

export default function Section2() {
  return (
    <>
      <section className="h-screen w-screen bg-red-600 flex justify-center place-items-center">
        <div className="flex flex-col max-w-xl mx-auto gap-12">
          <h1 className="text-4xl text-center font-bold">
            Latest techs to support you
          </h1>
          <Image
            src={SalleImg}
            className="w-full h-full border-white border border-opacity-25 rounded-lg"
            alt=""
          />
        </div>
      </section>
      ;
    </>
  );
}
