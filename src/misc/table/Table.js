
import React from "react";
import "./Table.css";

const Table = (props) => {
  return (
    <div className="main">
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Галузь</th>
            <th>Спеціальність</th>
            <th>Ліцензований обсяг</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>1</strong>
            </td>
            <td>Електрична інженерія(14)</td>
            <td>Електроенергетика, електротехніка та електромеханіка(141)</td>
            <td>50</td>
          </tr>
          <tr>
            <td>
              <strong>2</strong>
            </td>
            <td>Транспорт(27)</td>
            <td>Залізничний транспорт (273)</td>
            <td>115</td>
          </tr>
          <tr>
            <td>
              <strong>3</strong>
            </td>
            <td>Автоматика та приладобудування(15)</td>
            <td>Автоматика та комп`ютерно-інтегровані технології(151)</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
