import React, { useEffect } from "react";

export default function withLogger<P extends object>(
  Component: React.ComponentType<P>
) {
  return function LoggedComponent(props: P) {
    useEffect(() => {
      console.log("Component mounted");
      return () => {
        console.log("component unmounted");
      };
    }, []);

    useEffect(() => {
      console.log("component updated");
    });

    return <Component {...props} />;
  };
}
