import { useRouter } from "next/router";
import TimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es.json";
import ReactTimeAgo from "react-time-ago";
import styles from "../../styles/Header.module.css";
import PropTypes from "prop-types";

TimeAgo.addLocale(es);

const Tuit = ({ tuit }) => {
  const router = useRouter();
  const onDelete = async (event) => {
    await fetch(
      `https://twitterapifrannydani.herokuapp.com/tuitah/delete/${tuit.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    event.preventDefault();
    router.push("/timeline");
    // window.location.reload();
  };

  if (router.isFallback) {
    return "News tuits are coming to the timeline";
  }

  return (
    <>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsCard}>
          <h2 key={tuit.id}>{tuit.text}</h2>
          <div className={styles.info}>
            <p>{tuit.likes}</p>
            <ReactTimeAgo date={Date.parse(tuit.date)} locale="es" />
          </div>
          <button className={styles.buttonDelete} onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const response = await fetch(
    "https://twitterapifrannydani.herokuapp.com/tuitah"
  );
  const tuits = await response.json();

  const paths = tuits.map((tuits) => ({
    params: { id: tuits.id },
  }));
  return { paths, fallback: true };
}

export const getStaticProps = async ({ params: { id } }) => {
  const response = await fetch(
    "https://twitterapifrannydani.herokuapp.com/tuitah/" + id
  );

  const tuit = await response.json();

  return {
    props: { tuit },
    revalidate: 30,
  };
};

export default Tuit;

Tuit.propTypes = {
  tuit: PropTypes.object.isRequired,
};
