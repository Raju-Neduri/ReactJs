export function Member(values) {
  console.log(values.city);
  const memebersName=values.name;
  const memebersCity=values.city;
  return (
    <div>
      <h2>{memebersName}</h2>
      <p>{memebersCity}</p>
    </div>
  );
}
