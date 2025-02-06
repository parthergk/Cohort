import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div>Auth Header</div>
      {children}
      <div>Auth Footer</div>
    </div>
  );
};

export default layout;
