import Link from "next/link";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

const Social = () => (
  <div className="flex gap-2 xl:gap-3 2xl:gap-3 text-white">
    {[
      ["1", FaDiscord, "/"],
      ["3", FaTwitter, "/"],
      ["2", FaInstagram, "/"],
    ].map(([id, SocialIcon, hrf]) => (
      <Link href={hrf} key={id}>
        <a className="btn__social">
          <SocialIcon className="text-base xl:text-2xl" />
        </a>
      </Link>
    ))}
  </div>
);

export default Social;
