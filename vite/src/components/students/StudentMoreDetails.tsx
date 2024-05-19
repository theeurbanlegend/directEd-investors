import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const StudentMoreDetails = () => {
  const [studentId, setStudentId] = React.useState<string | null | undefined>(
    null
  );
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setStudentId(id);
    }
  }, [id]);
  console.log(id);
  return (
    <div>
      StudentMoreDetails
      <p>{studentId}</p>
    </div>
  );
};

export default StudentMoreDetails;
