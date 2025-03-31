import Hero from "./hero.jpg";
import Logo from "./logo.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="items-center flex justify-center my-[32px]">
        <Image src={Logo.src} alt="logo" width={32} height={32} />
      </nav>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative w-full max-w-[1240px] h-[750px]">
          <Image
            src={Hero.src}
            alt="Hero background"
            fill
            className="object-cover object-center rounded-[64px]"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[28%] rounded-[64px]" />
          <div className="absolute bottom-[23%] flex items-center justify-start left-[5%]">
            <div className="relative z-10 text-white">
              <h1 className="text-[80px] leading-[120%] tracking-[-4%] font-medium">
                Better Focus
                <br />
                One mg at a time.
              </h1>
            </div>
          </div>
          <div className="absolute bottom-[6%] left-[5%]">
            <button className="text-[15px] leading-[130%] tracking-[0] mt-4 pt-[20px] pr-[72px] pb-[20px] pl-[72px] bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
              Explore
            </button>
          </div>
        </div>
      </div>


      <div className="flex items-center w-full justify-center mt-[176px] h-auto">
        <p className="font-[400] text-[40px] leading-[130%] tracking-[-4%] w-[700px] break-words">
        We’re engineering a different breed of supplements — ones that don’t come in bottles, don’t upset your stomach, and don’t rely on outdated delivery methods. At Milligram, we’re rethinking what it means to fuel the human body.
        </p>
      </div>

      <div className="h-[40vh]"></div>
    </>
  );
}
