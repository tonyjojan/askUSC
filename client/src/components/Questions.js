import Header from './Header';
import React from 'react';


const Questions = () => {
  return (
    <div >
      <Header />
      <table>
        <thead>
          <tr>
              <th>Question</th>
              <th>Upvotes</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Question 1?</td>
            <td>43</td>
          </tr>
          <tr>
            <td>Question 2 </td>
            <td>35</td>
          </tr>
          <tr>
            <td>Question 3</td>
            <td>7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


export default Questions;
