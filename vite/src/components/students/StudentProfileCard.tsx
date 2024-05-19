import {Link}from 'react-router-dom';  

const StudentProfileCard = ({ student }:any) => {
  console.log(student)
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white p-2 m-2 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <img className="w-20 h-20 rounded-full mx-auto border-2 border-blue-300 shadow-md mt-2" src={`http://localhost:8080/api/attachments/${student.profile[0]?.avatarId}`} alt={student.name} />
      <div className="text-center mt-2">
        <h3 className="text-base text-gray-900 font-semibold">{student.name}</h3>
        <div className="text-left text-black p-2">
          <p className="font-semibold text-xs">Education:</p>
          <p className="text-xs overflow-auto max-w-xs">{student.education}</p>
          <p className="font-semibold mt-1 text-xs">Career Goals:</p>
          <p className="text-xs overflow-auto max-w-xs">{student.careerGoals}</p>
          <p className="font-semibold mt-1 text-xs">Previous Experience:</p>
          <p className="text-xs overflow-auto max-w-xs">{student.experience}</p>
          <p className="font-semibold mt-1 text-xs">Funding Need:</p>
          <p className="text-xs overflow-auto max-w-xs">{student.fundingNeed}</p>
        </div>
        <Link to={`/profile/${student._id}`} className="mt-2 inline-block bg-[#395241] text-white font-semibold py-2 px-2 rounded-2xl transition-colors duration-300">
          View more
        </Link>
      </div>
    </div>
  );
};

export default StudentProfileCard;
