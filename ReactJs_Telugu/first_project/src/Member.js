export function Member(props) {
  console.log(props.city);
  const memebersName=props.name;
  const memebersCity=props.city;
  return (
    <div>
      <h2>{memebersName}</h2>
      <p>{memebersCity}</p>
    </div>
  );
}
