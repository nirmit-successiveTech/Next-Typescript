"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ComponentType } from "react";


interface AuthProps {
  name: string;
  email: string;
  authDetails: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function withAuth<P extends object>(
  Component: ComponentType<P & AuthProps>
) {
  return function Auth(props: P) {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const router = useRouter();

    const authDetails = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!name || !email) {
        router.push("/day-5");
      } else {
      
      }
    };

    return (
      <div>
        <input
          type="text"
          placeholder="Enter the name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter the email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Component
          {...props}
          name={name}
          email={email}
          authDetails={authDetails}
        />
      </div>
    );
  };
}
