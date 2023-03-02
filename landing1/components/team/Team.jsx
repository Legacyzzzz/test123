import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { teamData } from "../../data/team";
import Heading2 from "../headings/Heading2";
import Heading5 from "../headings/Heading5";

// const teamData = [
//   {
//     id: "1",
//     img: team1,
//     name: "Savannah Nguyen",
//     designation: "Product Owner",
//   },
//   {
//     id: "2",
//     img: team2,
//     name: "Dianne Russell",
//     designation: "CMO",
//   },
//   {
//     id: "3",
//     img: team3,
//     name: "Brooklyn Simmons",
//     designation: "Digital Marketer",
//   },
//   {
//     id: "4",
//     img: team4,
//     name: "Ralph Edwards",
//     designation: "3D Art",
//   },
// ];

const Team = () => {
  return (
    <section className="mt-[65px] md:mt-[105px] px-4 2xl:px-0" id="team">
      <div className="max-w-[1296px] m-auto">
        <div className="w-full lg:w-1/2 m-auto text-center">
          <Heading5>Meet Our</Heading5>
          <Heading2>Team Members of the Project</Heading2>
          <p className="mt-[10px]">
            Nftlottys team includes successful artists, entrepreneurs, marketing
            geniuses, blockchain specialists, and financial professionals. These
            members have the technologies and methods to drive Nftlotty goal.
          </p>
        </div>

        <div className="flex flex-wrap justify-around gap-5 mt-[37px] md:mt-[55px]">
          {teamData.map((singleTeam) => (
            <div
              key={singleTeam.id}
              className="w-[221px] flex flex-col items-center"
            >
              <div className="relative w-[150px] md:w-[221px]">
                <div className="w-[150px] md:w-[221px] h-[150px] md:h-[221px] rounded-full overflow-hidden">
                  <Image
                    className="rounded-full transition duration-300 hover:scale-105"
                    src={singleTeam.img}
                    alt={singleTeam.name}
                  />
                </div>
                <div className="absolute bottom-0 right-[32px] w-10 h-10 rounded-full flex items-center justify-center bg-[#009AE5] text-white z-10">
                  <Link href={"/"}>
                    <a>
                      <FaLinkedinIn />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="text-center mt-3 md:mt-[15px]">
                <Heading5 clr="text-white">{singleTeam.name}</Heading5>
                <p className="text-[color:var(--color-primary)] mt-1 md:mt-[10px]">
                  {singleTeam.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
