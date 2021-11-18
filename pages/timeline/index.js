import Link from "next/link";

const Timeline = ({ tuits }) => {
  return (
    <>
      <h2>Timeline</h2>
      <ul className="tuitlist">
        {tuits
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((tuit) => (
            <li className="tuit" key={tuit.id}>
              <Link href={`timeline/${tuit.id}`}>
                <a>{tuit.text}</a>
              </Link>
              <button className="like">Like</button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Timeline;
export const getServerSideProps = async () => {
  const response = await fetch(
    "https://twitterapifrannydani.herokuapp.com/tuitah"
  );
  const tuits = await response.json();

  return {
    props: { tuits },
  };
};
