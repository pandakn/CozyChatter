import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center max-w-3xl min-h-screen px-4 mx-auto">
      {children}
    </div>
  );
};

export default Layout;
