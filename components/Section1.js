import Image from "next/image";
import SalleImg from "@/public/salle.png";

export default function Section1() {
  return (
    <>
      <section className="h-screen w-screen bg-black">
        <div className="max-w-xl py-12 mx-auto flex flex-col place-items-center gap-12">
          <nav className="flex w-full justify-between text-white mb-12">
            <a href="#">UrbanFit</a>
            <button>burger</button>
          </nav>
          <h1 className="text-4xl text-center font-bold">
            The gym you want to go, not the one you are forced to go
          </h1>
          <p className="text-center text-xl text-pretty">
            Most advanced technologies to help you achieve your goals faster.
          </p>
          <button className="bg-red-600 text-white px-8 rounded-lg py-4 border border-white border-opacity-25 shadow-inner">
            Book a visit
          </button>
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
