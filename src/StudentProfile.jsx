function StudentProfile(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        marginBottom: "20px"
      }}
    >
      <p>Student Name: {props.name}</p>
      <p>Department: {props.department}</p>
      <p>Year: {props.year}</p>
    </div>
  );
}

export default StudentProfile;