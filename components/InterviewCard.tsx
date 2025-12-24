import dayjs from "dayjs";

const InterviewCard: React.FC<InterviewCardProps> = ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}) => {
  const feedback = null as Feedback | null;

  // types of interviews
  // 1. technical
  // 2. mix of technical and behavioral
  // 3. behavioral
  const normalizedInterviewType = /mix/gi.test(type) ? "Mixed" : type;

  const dateValue = feedback?.createdAt || createdAt;
  const formattedDate = dateValue
    ? dayjs(dateValue).format("MMM D, YYYY")
    : "Date N/A";

  return (
    <div
      key={interviewId}
      className="card-border w-[360px] max-sm:w-full min-h-96"
    >
      <p>{role}</p>
      <p>{techstack.join(", ")}</p>
      <p>{formattedDate}</p>
      <p>{normalizedInterviewType}</p>
      <p>{userId}</p>
    </div>
  );
};

export default InterviewCard;
