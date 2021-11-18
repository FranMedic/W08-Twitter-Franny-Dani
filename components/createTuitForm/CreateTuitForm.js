import { useState } from "react";

const CreateTuitform = () => {
  const tuitCreate = async (event) => {
    event.preventDefault();
    await fetch("https://twitterapifrannydani.herokuapp.com/tuitah/create", {
      method: "POST",
      body: JSON.stringify(tuitData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setTuitData({ text: "" });
    return <h1>Tuit Creado!! </h1>;
  };
  const onChangeData = (event) => {
    setTuitData({ ...tuitData, [event.target.id]: event.target.value });
  };

  const [tuitData, setTuitData] = useState({
    text: "",
  });

  return (
    <>
      <h1> What do you want to post? </h1>
      <form autoComplete="off" onSubmit={tuitCreate} noValidate>
        <div className="mb-3 row">
          <label htmlFor="text" className="form-label">
            Write your tuit:
          </label>
          <textarea
            id="text"
            placeholder="Write your tuit..."
            value={tuitData.text}
            onChange={onChangeData}
            required
            maxLength="100"
            className="mb-2 form-control"
          />
        </div>
        <button
          value="Submit"
          className="btn btn-primary mt-1 mb-5"
          type="submit"
        >
          Post your Tuith!
        </button>
      </form>
    </>
  );
};

export default CreateTuitform;
