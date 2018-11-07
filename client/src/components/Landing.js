import React from 'react';

const pStyle = {
  textAlign: 'center',
  width:'40%',
  marginLeft:'auto',
  marginRight:'auto',
  marginTop: '15%',
  borderStyle: 'solid',
  padding: '3%',
  backgroundColor: '#990000',
  color: 'white'
};


const Landing = () => {
  return (
    <div style={pStyle}>
      <h1>
        AskUSC
      </h1>
      <h4>
      Professor Login
      </h4>
      <br/>
      <br/>
      <br/>
      <a class="waves-effect waves-light btn-large" href= "/auth/google" style={{backgroundColor:"white", color: "black"}}>Login with Google</a>
    </div>
  );
};


export default Landing;
