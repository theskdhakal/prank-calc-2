import React from "react";

export const AllBtn = ({ text, cls, realTimeDisplay }) => {
  return (
    <div class={cls} onClick={() => realTimeDisplay(text)}>
      {text}
    </div>
  );
};
