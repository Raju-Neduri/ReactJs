const Notification = (props) => {
  const { styling, source, message } = props;
  return (
    <div className={styling}>
      <img src={source} alt={message} />
      <span>{message}</span>
    </div>
  );
};

const Element = () => {
  return (
    <div className="maindiv">
      <h1>Notifications</h1>
      <div className="seconddiv">
        <Notification
          styling="info"
          source="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          message="Information Message"
        />
        <Notification
          styling="success"
          source="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          message="Success Message"
        />
        <Notification
          styling="warning"
          source="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          message="Warning Message"
        />
        <Notification
          styling="error"
          source="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          message="Error Message"
        />
      </div>
    </div>
  );
};

ReactDOM.render(<Element />, document.getElementById("root"));
