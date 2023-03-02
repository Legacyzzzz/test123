import Image from "next/image";
import faqDatas from "../../data/faqs";
import faq from "../../public/images/faq.png";
import Heading2 from "../headings/Heading2";
import Heading5 from "../headings/Heading5";
import SingleFAQ from "../singleFAQ/SingleFAQ";

import { motion } from "framer-motion";

const Faq = () => {
  return (
    <section className="mt-[65px] md:mt-[105px] px-4 2xl:px-0" id="faq">
      <div className="max-w-[1296px] m-auto">
        <div className="w-full lg:w-1/2 m-auto text-center">
          <Heading5>Questions & Answers</Heading5>
          <Heading2>Frequently Asked Questions </Heading2>
          <p className="mt-[10px]">
            Nftlottys team includes successful artists, entrepreneurs, marketing
            geniuses, blockchain specialists, and financial professionals. These
            members have the technologies and methods to drive Nftlotty goal.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center mt-[35px] md:mt-[55px] gap-5">
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            {faqDatas.map((singleFaq) => (
              <SingleFAQ {...singleFaq} key={singleFaq.id} />
            ))}
          </div>
          <motion.div
            className="img hidden lg:block"
            animate={{ y: [20, 0] }}
            transition={{
              duration: [1],
              yoyo: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image src={faq} alt="faq" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
