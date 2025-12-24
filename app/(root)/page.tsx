import { Button } from "@/components/ui/button";
import Link from "next/link";
import { dummyInterviews, ROUTE_MAPPINGS } from "@/constants";
import Image from "next/image";
import InterviewCard from "@/components/InterviewCard";

const Page: React.FC = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w=lg">
          <h2 className="text-primary-100">AI Mock Interviewer</h2>
          <p className="text-lg">
            Practice withe real interview quetions and get instant feedback
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href={ROUTE_MAPPINGS.Interview}>Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="mock-interview"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}

          {/* <p>You haven&apos;t taken any interviews yet!!!</p> */}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}
          {/* <p>There are no interviews available!!!</p> */}
        </div>
      </section>
    </>
  );
};

export default Page;
