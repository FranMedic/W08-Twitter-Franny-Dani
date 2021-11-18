import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1>Tuiters</h1>
        <Link href="/"> Home </Link>
        <Link href="/createTuit"> Create Tuit </Link>
        <Link href="/timeline"> Timeline </Link>
      </div>
    </>
  );
};

export default Header;
