import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import discord from "../../public/images/icon/discord.png";
import Button from "../Button";
import Heading2 from "../headings/Heading2";

const Community = () => {
  return (
    <section className="mt-[70px] md:mt-[120px] px-4 2xl:px-0">
      <div className="max-w-[1296px] m-auto flex flex-col items-center bg-[color:var(--color-primary)] rounded-[30px] py-[25px] md:py-[50px] community">
        <Image src={discord} alt="discord" layout="fixed" />
        <div className="mt-[5px] mb-[25px] text-center">
          <Heading2 clr="text-black">Join Our Community</Heading2>
        </div>
        <Button clr="btn--bark">
          <FaDiscord className="text-white text-[24px]" />
          JOIN OUR DISCORD
        </Button>
      </div>
    </section>
  );
};

export default Community;
