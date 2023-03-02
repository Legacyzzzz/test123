import Link from "next/link";

const Button = ({ children, clr, hrf = "/" }) => {
  return (
    <Link href={hrf}>
      <a className={`btn ${clr || " btn--primary"}`}>{children}</a>
    </Link>
  );
};

export default Button;
