import { useState } from "react";

const CreateTuitform = () => {
  const postCreate = async (event) => {
    event.preventDefault();
    await fetch("https://twitterapifrannydani.herokuapp.com/tuitah/create", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const onChangeData = (event) => {
    setPostData({ ...postData, [event.target.id]: event.target.value });
  };

  const [postData, setPostData] = useState({
    text: "",
  });

  return (
    <>
      <h1> What do you want to post? </h1>
      <form autoComplete="off" onSubmit={postCreate} noValidate>
        <div className="mb-3 row">
          <label htmlFor="text" className="form-label">
            Write your tuit:
          </label>
          <textarea
            id="text"
            placeholder="Write your tuit..."
            value={postData.text}
            onChange={onChangeData}
            required
            className="mb-2 form-control"
          />
        </div>
        <button
          value="Submit"
          className="btn btn-primary mt-1 mb-5"
          type="submit"
        >
          Post!
        </button>
      </form>
    </>
  );
};

export default CreateTuitform;
