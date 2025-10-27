"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function Page() {
  const [hasAccount, setHasAccount] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const supabase = createClient();
  const router = useRouter();

  function toggle() {
    setEmail("");
    setPassword("");
    setHasAccount(!hasAccount);
  }

  const signup = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log(data);

    if (error) {
      console.error(error);
    } else {
      router.push("/")
      router.refresh();
    }
  };

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error(error);
    } else {
      router.push("/");
      router.refresh();
    }
  };


  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        {hasAccount ? (
          <Card>
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
              <CardDescription>
                Login with your email and password
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={login}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Field>
                  <FieldGroup>
                    <Field>
                      <Button type="submit">Login</Button>
                      <FieldDescription className="px-6 text-center">
                        Need an account?{" "}
                        <span
                          className="underline hover:cursor-pointer"
                          onClick={toggle}
                        >
                          Sign up
                        </span>
                      </FieldDescription>
                    </Field>
                  </FieldGroup>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Create an account</CardTitle>
              <CardDescription>
                Enter your information below to create your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={signup}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <FieldDescription>
                      We&apos;ll use this to contact you. We will not share your
                      email with anyone else.
                    </FieldDescription>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <FieldDescription>
                      Must be at least 8 characters long.
                    </FieldDescription>
                  </Field>
                  <FieldGroup>
                    <Field>
                      <Button type="submit">Create Account</Button>
                      <FieldDescription className="px-6 text-center">
                        Already have an account?{" "}
                        <span
                          className="underline hover:cursor-pointer"
                          onClick={toggle}
                        >
                          Sign in
                        </span>
                      </FieldDescription>
                    </Field>
                  </FieldGroup>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
