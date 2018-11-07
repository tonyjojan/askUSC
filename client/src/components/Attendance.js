import Header from './Header';
import React from 'react';


const Attendance = () => {
  return (
    <div >
      <Header />
      <table>
        <thead>
          <tr>
              <th>Student</th>
              <th>Present</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Name Name</td>
            <td>YES</td>
          </tr>
          <tr>
            <td>Name Name </td>
            <td>NO</td>
          </tr>
          <tr>
            <td>Name Name</td>
            <td>YES</td>
          </tr>
          <tr>
            <td>Name Name</td>
            <td>YES</td>
          </tr>
          <tr>
            <td>Name Name</td>
            <td>YES</td>
          </tr><tr>
            <td>Name Name</td>
            <td>YES</td>
          </tr><tr>
            <td>Name Name</td>
            <td>YES</td>
          </tr><tr>
            <td>Name Name</td>
            <td>YES</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


export default Attendance;
