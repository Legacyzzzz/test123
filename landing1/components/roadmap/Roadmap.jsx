import Link from "next/link";
import { roadmapData } from "../../data/roadmap";
import Heading2 from "../headings/Heading2";
import Heading6 from "../headings/Heading6";

const Roadmap = () => {
  return (
    <section className="mt-[65px] md:mt-[100px] px-4 xl:px-0" id="roadmap">
      <div className="max-w-[930px] m-auto">
        <div className="w-full lg:w-1/2 m-auto text-center">
          <Heading2>Roadmap</Heading2>
          <p className="mt-[10px]">
            The following roadmap lists 2022 milestones.
          </p>
        </div>

        <div className="relative pb-5 md:pb-32 mt-[55px]">
          <div className="flex flex-col gap-12 md:gap-[80px] collumn">
            {roadmapData.map((roadmap, i) => (
              <div
                key={roadmap.id}
                className={`flex flex-col md:flex-row items-center justify-center ${
                  i % 2 !== 0 && "md:flex-row-reverse"
                }`}
              >
                <div className="w-11/12 md:w-1/2">
                  <div
                    className={`h-[100px] md:h-[170px] w-[100px] md:w-[170px] rounded-full flex items-center justify-center bg-[#2D364D] outline outline-[20px] outline-[color:var(--bg-gray)]  relative steap ${
                      i % 2 === 0
                        ? "after:left-full m-auto md:ml-auto md:mr-5"
                        : "after:right-full m-auto md:mr-auto md:ml-5"
                    }`}
                  >
                    <Heading2 clr="text-[color:var(--color-primary)]">
                      Q{roadmap.questionNumber}
                    </Heading2>
                  </div>
                </div>
                <div className="w-[116px] hidden md:flex items-center justify-center m-auto z-10">
                  <span className="w-[9px] h-[9px] rounded-full bg-white outline outline-[9px] outline-[#2D364D]"></span>
                </div>
                <div className="w-11/12 md:w-1/2 mt-10 md:mt-0">
                  <div className="flex flex-col p-[30px] rounded-[10px] bg-[color:var(--bg-gray)] transition duration-300 hover:box-shadow">
                    <Heading6>Phase {roadmap.phase.number}</Heading6>
                    <ul className="list-disc ml-[18px] figure-caption mt-[10px]">
                      {roadmap.phase?.titles.map((title) => (
                        <li key={title}>{title}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-[10px]">
          <Link href={"/"}>
            <a>To be announced</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
