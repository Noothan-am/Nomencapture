import React from "react";
require("../styles/circle.module.css");

const Circle = ({
  question,
  options,
  initialText,
  finalText,
  onInputChange,
  value,
}: any) => {
  const handleChange = (event: any) => {
    const data = event.target.value;
    onInputChange({ ...value, [question]: data });
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
                  name={question}
                  value={option}
                  checked={value && value[question] === option}
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
