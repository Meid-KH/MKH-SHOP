import React from "react";

const Button = ({ content, classes, onClick, ...props }) => {
  console.log(content);

  return (
    <button className={classes} onClick={onClick} {...props}>
      {content}
    </button>
  );
};

export default Button;
