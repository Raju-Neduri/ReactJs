const Box = (props) => {
  const { styling, size } = props;
  return <p className={`box ${styling}`}>{size}</p>;
};

const Element = () => {
  return (
    <div className="main-div">
      <h1>Boxes</h1>
      <div className="inside-div">
        <Box styling="small" size="Small" />
        <Box styling="medium" size="Medium" />
        <Box styling="large" size="Large" />
      </div>
    </div>
  );
};

ReactDOM.render(<Element />, document.getElementById("root"));
