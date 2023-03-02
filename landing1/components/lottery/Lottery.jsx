import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import slider1 from "../../public/images/slider/slider1.png";
import slider2 from "../../public/images/slider/slider2.png";
import slider3 from "../../public/images/slider/slider3.png";
import slider4 from "../../public/images/slider/slider4.png";
import slider5 from "../../public/images/slider/slider5.png";
import slider6 from "../../public/images/slider/slider6.png";
import Button from "../Button";
import Heading2 from "../headings/Heading2";
import Heading5 from "../headings/Heading5";
import Slider from "../slider/Slider";

import down from "../../public/images/down.png";
import up from "../../public/images/up.png";

const Lottery = () => {
  return (
    <section className="mt-[70px] sm:mt-[115px] px-4 xl:px-0">
      <div className="max-w-[1296px] m-auto flex flex-col lg:flex-row items-center gap-5">
        {/* <div className="w-1/2 h-[80vh] overflow-hidden border"> */}
        <div className="flex gap-3 relative">
          <div className="absolute left-0 -top-1 sm:top-0 z-10">
            <Image src={up} alt="up" />
          </div>
          <div className="absolute left-0 -bottom-3 z-10">
            <Image src={down} alt="down" />
          </div>

          <div className="w-1/2 flex flex-col h-[50vh] lg:h-[90vh] overflow-hidden sliderUpToDown">
            <Slider
              // direction={false}
              cls="upToDown"
              sliderImgs={[
                [slider1, 1],
                [slider2, 2],
                [slider3, 3],
                [slider1, 4],
                [slider2, 5],
                [slider3, 6],
              ]}
            />
            <Slider
              // direction={true}
              cls="upToDown1"
              sliderImgs={[
                [slider4, 1],
                [slider5, 2],
                [slider6, 3],
                [slider4, 4],
                [slider5, 5],
                [slider6, 6],
              ]}
            />
          </div>
          <div className="w-1/2 flex flex-col h-[50vh] lg:h-[90vh] overflow-hidden sliderDownToUp">
            <Slider
              // direction={false}
              cls="downToUp"
              sliderImgs={[
                [slider1, 1],
                [slider2, 2],
                [slider3, 3],
                [slider1, 4],
                [slider2, 5],
                [slider3, 6],
              ]}
            />
            <Slider
              // direction={true}
              cls="downToUp1"
              sliderImgs={[
                [slider4, 1],
                [slider5, 2],
                [slider6, 3],
                [slider4, 4],
                [slider5, 5],
                [slider6, 6],
              ]}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-[35px] md:mt-[55px]">
          <Heading5>Play & Win, Stake & earny!</Heading5>
          <div className="mt-[10px]">
            <Heading2>NFTLOTTY NFT Lottery Platform</Heading2>
          </div>
          <p className="mt-[15px]">
            Nftlotty is a Web3 next-generation lottery platform that connects
            into the Metaverse and removes declining jackpots, restricted
            security, lengthy payments, and region-based draws. It uses
            blockchain technology to allow decentralized operations with great
            gains, transparency, privacy, security, and unity for global
            players.
          </p>
          <p className="mt-[10px]">
            Nftlotty NFT gives holders the chance to profit from the worldwide
            lottery shift. Nftlotty NFT collection has 7,777 randomly created
            ERC-721 token standards with information. Each NFT gives investors a
            share in Metaverse&lsquo;s largest lottery platform and a lifelong
            passive income. Non-fungible Nftlotty NFTs aren&lsquo;t
            interchangeable. Unique Nftlotty NFTs.
          </p>

          <div className="mt-[35px]">
            <Button>
              <FaDiscord className="text-[24px]" />
              JOIN OUR DISCORD
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lottery;
