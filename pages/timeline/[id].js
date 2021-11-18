import { useRouter } from "next/router";

const Tuit = ({ tuit }) => {
  const router = useRouter();
  if (router.isFallback) {
    return "News tuits are coming to the timeline";
  }
  console.log(tuit);
  return (
    <>
      <h2 key={tuit.id}>{tuit.text}</h2>
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
