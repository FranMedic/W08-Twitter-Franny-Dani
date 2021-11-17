const CreateTuitform = () => {
  const postCreate = async (event) => {
    event.preventDefault();
    await fetch("https://twitterapifrannydani.herokuapp.com/tuitah", {
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
    title: "",
    body: "",
  });

  return (
    <>
      <h1> What do you want to post? </h1>
      <form autoComplete="off" onSubmit={postCreate} noValidate>
        <div className="mb-3 row">
          <label htmlFor="body" className="form-label">
            Write your tuit:
          </label>
          <textarea
            id="body"
            placeholder="Write your tuit..."
            value={postData.body}
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
