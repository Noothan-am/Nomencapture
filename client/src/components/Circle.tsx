import React from "react";
const styles = require("../styles/circle.module.css").default;

const Circle = ({ question, options, initialText, finalText }: any) => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={7}>{question}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{initialText}</td>
          {options.map((option: any) => {
            return (
              <td>
                <div>{option}</div> <input type="radio" name="choice" />
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
