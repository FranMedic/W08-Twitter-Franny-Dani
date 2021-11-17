import Link from "next/link";

const Header = () => {
  return (
    <>
      <h1>Tuiters</h1>
      <Link href="/"> Home </Link>
      <Link href="/createTuit"> Create Tuit </Link>
      <Link href="/timeline"> Timeline </Link>
    </>
  );
};

export default Header;
