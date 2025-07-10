"use client"
import withAuth from "@/app/hoc/withAuth";

interface TryComponentProps {
  name: string;
  email: string;
  authDetails: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function TryComponent({ name, email, authDetails }: TryComponentProps) {
  return (
    <div>
      <div>{name}</div>
      <div>{email}</div>
      <div>
        <button onClick={authDetails}>check</button>
      </div>
    </div>
  );
}

const TryComponentWithAuth = withAuth(TryComponent);
export default TryComponentWithAuth;
