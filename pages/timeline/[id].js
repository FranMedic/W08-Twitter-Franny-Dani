import { useRouter } from "next/router";

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
  };

  if (router.isFallback) {
    return "News tuits are coming to the timeline";
  }

  return (
    <>
      <h2 key={tuit.id}>{tuit.text}</h2>
      <button className="button_delete" onClick={onDelete}>
        Delete
      </button>
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
