import { useRouter } from "next/router";

const Tuit = ({ tuit }) => {
  const router = useRouter();
  if (router.isFallback) {
    return "News tuits are coming to the timeline";
  }

  return (
    <>
      <h3>{tuit.text}</h3>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    "https://twitterapifrannydani.herokuapp.com/tuitah" + params.id
  );
  const tuit = await response.json();

  return {
    props: { tuit },
  };
};

export default Tuit;
