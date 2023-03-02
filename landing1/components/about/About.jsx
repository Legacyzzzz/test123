import Image from "next/image";
import Heading2 from "../headings/Heading2";
import Heading4 from "../headings/Heading4";
import Heading5 from "../headings/Heading5";
import Heading6 from "../headings/Heading6";

import draw from "../../public/images/draw.png";
import ticket from "../../public/images/ticket.png";
import wallet from "../../public/images/wallet.png";

const aboutData = [
  {
    id: "01",
    title: "Connet Wallet",
    img: wallet,
  },
  {
    id: "02",
    title: "Buy NFT Ticket",
    img: ticket,
  },
  {
    id: "03",
    title: "Wait for the draw",
    img: draw,
  },
];

const About = () => {
  return (
    <section className="mt-[70px] sm:mt-[115px]" id="about">
      <div className="max-w-[1296px] m-auto">
        <div className="w-full lg:w-1/2 m-auto text-center">
          <Heading5>NFTLOTTY In 3 Steps</Heading5>
          <Heading2>How to Play the NFTLOTTY</Heading2>
          <p className="mt-[10px]">
            Decentra-Lotto is a decentralised cryptocurrency lottery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[35px] md:mt-[55px]">
          {aboutData.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[color:var(--color-primary)]">
                  <Heading6 clr="text-[color:var(--bg-dark)]">
                    {item.id}
                  </Heading6>
                </div>
                <Heading4>{item.title}</Heading4>
              </div>
              <div className="relative mt-[15px] md:mt-[28px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="hover:scale-95 transition duration-500 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
