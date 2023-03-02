import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import ballsGroup from "../../public/images/balls-group.png";
import frame from "../../public/images/frame.png";
import lball1 from "../../public/images/l-ball-1.png";
import lball6 from "../../public/images/l-ball-6.png";
import lvector1 from "../../public/images/l-vector-1.png";
import lvector2 from "../../public/images/l-vector-2.png";
import Button from "../Button";
import Heading5 from "../headings/Heading5";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex hero-left relative px-4 sm:px-0">
          <div className="absolute bottom-[17%] left-[1%] animate-pulse">
            <Image src={lball6} alt="lball6" />
          </div>
          <div className="absolute bottom-[3%] right-0 animate-pulse">
            <Image src={lball1} alt="lball1" />
          </div>
          <div className="absolute left-[7%] top-[30%]">
            <Image src={lvector1} alt="lvector1" />
          </div>
          <div className="absolute top-[23%] right-[12%]">
            <Image src={lvector2} alt="lvector2" />
          </div>

          <div className="self-center mt-[150px] xl:-mt-[70px] ml-0 sm:ml-[50px] xl:ml-[100px] 2xl:ml-[312px] z-[1]">
            <Heading5>Welcome to NFT Lottery</Heading5>
            <h1 className="heading-1 mt-[10px]">
              Play NFTLOTTY to Win NFT Prizes
            </h1>
            <p className="paragraph-large mb-[35px]">
              Honesty and transparency you’ve never seen before!
            </p>
            <Button>
              <FaDiscord className="text-[24px]" />
              JOIN OUR DISCORD
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 m-auto hero-right hidden lg:block">
          <div className="relative overflow-hidden">
            <Image className="animate-pulse" src={frame} alt="frame" />
            <motion.div
              className="absolute 
             top-[15%] lg:top-[20%] left-[10%] w-auto lg:w-[420px] xl:w-auto z-[1]"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
            >
              <Image
                className="animate-pulse"
                src={ballsGroup}
                alt="ballsGroup"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
