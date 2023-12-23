import React from "react";
require("../styles/circle.module.css");

const Circle = ({
  question,
  options,
  initialText,
  finalText,
  onInputChange,
}: any) => {
  const handleChange = (event: any) => {
    const value = event.target.value;
    // onInputChange(value);
    console.log({ question, value });
  };

  return (
    <table key={initialText}>
      <thead>
        <tr>
          <th colSpan={7}>{question}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{initialText}</td>
          {options.map((option: any, index: number) => {
            return (
              <td key={index}>
                <div>{option}</div>{" "}
                <input
                  onChange={(e) => handleChange(e)}
                  type="radio"
                  name="choice"
                  value={option}
                />
              </td>
            );
          })}
          <td>{finalText}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Circle;
