import Image from "next/image";
import rarity from "../../public/images/rarity.png";
import Heading2 from "../headings/Heading2";
import Heading5 from "../headings/Heading5";

import { rarityData } from "../../data/rarity";

const Rarity = () => {
  return (
    <section className="mt-[60px] md:mt-[105px] px-4 2xl:px-0" id="rarity">
      <div className="max-w-[1296px] m-auto">
        <div className="w-full lg:w-1/2 m-auto text-center">
          <Heading2>Rarity</Heading2>
          <p className="mt-[10px]">
            Each of 7,777 Nftlotty NFTs is common, uncommon, rare, epic, or
            legendary. Each category proportion determines the holder revenue
            share.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-center gap-5 mt-[35px] md:mt-[60px]">
          <div className="w-10/12 lg:w-4/12 flex justify-center">
            <Image
              className="rounded-[15px] transition duration-300 hover:skew-x-2"
              src={rarity}
              alt="rarity"
              // layout="fixed"
            />
          </div>
          <div className="w-full lg:w-8/12 flex justify-center xl:justify-start content-start flex-wrap gap-5">
            {rarityData.map((item) => (
              <div
                key={item.id}
                className="w-[150px] md:w-[195px] py-5 bg-[color:var(--bg-gray)] rounded-[15px] text-center transition duration-300 hover:box-shadow"
              >
                <p className="text-[color:var(--color-primary)] mb-[10px]">
                  {item.type}
                </p>
                <Heading5 clr="text-white">{item.name}</Heading5>
                <p className="mt-[10px]">{item.tril} have this trait</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rarity;
