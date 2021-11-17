import Link from "next/link";

const Timeline = ({ tuits }) => {
  return (
    <>
      <h2>Timeline</h2>
      <ul>
        {tuits.map((tuit) => (
          <li key={tuit.id}>
            <Link
              href={{
                pathname: "twitList/[id]",
                query: { id: tuit.id },
              }}
              passHref
            >
              <h3>{tuit.text}</h3>
            </Link>
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
