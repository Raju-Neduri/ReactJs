const UserGreeting = ({ username, isLogged }) => {
  return isLogged ? (
    <h1>Welcome, {username}</h1>
  ) : (
    <h1>Please log in to Continue</h1>
  );
};

export default UserGreeting;
