import Link from "next/link";
import TimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es.json";
import ReactTimeAgo from "react-time-ago";
import styles from "../../styles/Header.module.css";
import PropTypes from "prop-types";

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
    const likes = response.json();
    return likes;
  };
  return (
    <>
      <div className={styles.tuitContainer}>
        <h2 className={styles.tuitTitle}>Timeline</h2>
        <ul className={styles.tuitlist}>
          {tuits
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((tuit) => (
              <li className={styles.tuit} key={tuit.id}>
                <Link href={`/timeline/${tuit.id}`}>
                  <a>{tuit.text}</a>
                </Link>
                <p>{tuit.likes} Likes</p>
                <ReactTimeAgo date={Date.parse(tuit.date)} locale="es" />
                <button onClick={() => onLike(tuit.id)} className={styles.like}>
                  Like
                </button>
              </li>
            ))}
        </ul>
      </div>
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
Timeline.propTypes = {
  tuits: PropTypes.array.isRequired,
};
