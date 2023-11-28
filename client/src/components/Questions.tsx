import React from "react";

function Questions({ question }: any) {
  return (
    <>
      <div className="text-questions">
        <label htmlFor="">{question}</label>
        <input type="text" />
      </div>
    </>
  );
}

export default Questions;
