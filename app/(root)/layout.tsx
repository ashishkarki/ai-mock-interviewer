import { ROUTE_MAPPINGS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="root-layout">
      <nav>
        <Link href={ROUTE_MAPPINGS.Home} className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={38} height={32} />
          <h2 className="text-primary-100">AI Mock Interviewer</h2>
        </Link>

        <Link href={ROUTE_MAPPINGS.SignUp}>Sign Up</Link>
      </nav>

      {children}
    </div>
  );
};

export default RootLayout;
