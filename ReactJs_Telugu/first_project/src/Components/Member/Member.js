import "./Member.css";
export function Member(props) {
  console.log(props.city);
  const memebersName = props.name;
  const memebersCity = props.city;

  return (
    <div className="memberCard">
      <h2>{memebersName}</h2>
      <p className="member-sub-heading">{memebersCity}</p>
    </div>
  );
}
