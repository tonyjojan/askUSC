import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAttendance } from '../actions';

class AttendanceList extends Component {
  componentDidMount(){
    this.props.fetchAttendance();
  }
  attendanceColor(number){
    if(number == 1){
      return "#33FF64";
    }else{
      return "#EA4A34";
    }
  }
  renderAttendance(){
    return this.props.attendance.reverse().map(attendance => {
      return (
        // <div cl assName="card darken-1">
        //   <div className="card-content">
        //     <span className="card-title">{attendance.name}{attendance.attended}</span>
        //   </div>
        // </div>
        <tr>
        <td>{attendance.name}</td>
        <td>{attendance.date}</td>
        <td style={{'background-color':this.attendanceColor(attendance.attended)}}></td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div>
      <table className="striped">
        <thead>
          <tr>
            <th>Student</th>
            <th>Date</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
        {this.renderAttendance()}
        </tbody>
      </table>
      </div>
    );
  }
}

function mapStateToProps({ attendance }) {
  return { attendance };
}

export default connect(mapStateToProps, { fetchAttendance })(AttendanceList);
