import Image from "next/image";
import { useState } from "react";
import logo from "../../public/images/logo.png";
import NavItems from "../navItems/NavItems";
import Social from "../social/Social";

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="max-w-[1296px] m-auto mt-[70px] md:mt-[120px]">
        <div className="w-11/12 md:w-9/12 lg:w-8/12 m-auto flex flex-col items-center">
          <Image src={logo} alt="Logo" />
          <p className="text-center mt-[15px] mb-[25px]">
            Nftlotty NFT gives holders a chance to profit from the worldwide
            lottery market change. Nftlotty NFT collection includes 7,777
            ERC-721 token standards, each with its unique information. Each NFT
            gives investors a share in Metaverse largest lottery platform and a
            passive income for life. Nftlotty NFTs are non-fungible; they can
            not be exchanged. Each NFT is 100% unique.
          </p>
          <Social />
        </div>
      </div>

      <footer className="mt-[70px] md:mt-[120px] px-4 2xl:px-0 border-t border-[#3D3C6B]">
        <div className="max-w-[1296px] m-auto">
          {/* copyright section */}
          <div className="flex flex-col sm:flex-row items-center justify-between my-[30px]">
            <p className="text-center">
              Copyright © 2022, NFTLOTTY - All Right Reserved
            </p>

            <div className="copy-right mt-2 md:mt-0">
              <ul className="flex gap-3 xl:gap-[20px]">
                {[
                  ["Security", "/"],
                  ["Terms", "/"],
                  ["Privacy", "/"],
                ].map(([title, url]) => (
                  <NavItems
                    key={title}
                    title={title}
                    url={url}
                    open={open}
                    setOpen={setOpen}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
