"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ROUTE_MAPPINGS } from "@/constants";
import { toast } from "sonner";
import FormField from "./FormField";
import { useRouter } from "next/navigation";

const authFormSchema = (type: FormType) => {
  return z.object({
    name:
      type === "sign-up" ? z.string().min(2).max(50) : z.string().optional(),
    email: z.email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();

  // 1. Define your form.
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-in") {
        toast.success("Account created successfully. Please sign in!");
        router.push(ROUTE_MAPPINGS.SignIn);
      } else {
        toast.success("Signed in successfully..");
        router.push(ROUTE_MAPPINGS.Home);
      }
    } catch (error) {
      console.error(error);
      toast.error(`Something went wrong: ${error}`);
    }
  }

  const isSignInPage = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" width={38} height={32} />

          <h2 className="text-primary-100">AI Mock Interviewer</h2>
        </div>

        <h3 className="text-primary-100">Practice Job Interviews with AI</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            {!isSignInPage && (
              <FormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Enter your name"
                type="text"
              />
            )}

            <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter your email"
              type="email"
            />

            <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />

            <Button className="btn" type="submit">
              {isSignInPage ? "Sign In" : "Create an Account"}
            </Button>
          </form>
        </Form>

        {/* allow switching between sign-in and sign-up pages */}
        <p className="text-center">
          {isSignInPage ? "No account yet?" : "Already have an account?"}
          <Link
            href={!isSignInPage ? ROUTE_MAPPINGS.SignIn : ROUTE_MAPPINGS.SignUp}
            className="font-bold text-user-primary ml-1"
          >
            {!isSignInPage ? "Sign In" : "Sign Up"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
