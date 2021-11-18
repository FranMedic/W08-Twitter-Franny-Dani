import Link from "next/link";
import TimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es.json";
import ReactTimeAgo from "react-time-ago";

TimeAgo.addLocale(es);

const Timeline = ({ tuits }) => {
  const onLike = async (id) => {
    const response = await fetch(
      `https://twitterapifrannydani.herokuapp.com/tuitah/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      }
    );
  };
  return (
    <>
      <h2>Timeline</h2>
      <ul className="tuitlist">
        {tuits
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((tuit) => (
            <li className="tuit" key={tuit.id}>
              <Link href={`/timeline/${tuit.id}`}>
                <a>{tuit.text}</a>
              </Link>
              <p>{tuit.likes}</p>
              <ReactTimeAgo date={Date.parse(tuit.date)} locale="es" />
              <button onClick={() => onLike(tuit.id)} className="like">
                Like
              </button>
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
