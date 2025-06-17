const Button = (props) => {
  const { buttonname, styling } = props;
  return <button className={styling}>{buttonname}</button>;
};

const Element = () => {
  return (
    <div className="mainclass">
      <h1>Social buttons</h1>
      <div className="buttonContainer">
        <Button buttonname="Like" styling="like-btn" />
        <Button buttonname="Comment" styling="comment-btn" />
        <Button buttonname="Share" styling="share-btn" />
      </div>
    </div>
  );
};

ReactDOM.render(<Element />, document.getElementById("root"));
