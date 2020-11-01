import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bar from './Bar';
import GoogleBtn from './GoogleBtn';
import reportWebVitals from './reportWebVitals';
import FacebookBtn from './FacebookBtn';



ReactDOM.render(
  <React.StrictMode>
    <div>
      <h5>Cumulative Burpees by all members</h5>
      <Bar />
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br />
    <div>
      <GoogleBtn />
    </div>
    <div><FacebookBtn /></div>
    <br /><br /><br /><br /><br /><br /><br /><br />
    <div><h5>If you like this counter, help me support the fundraiser -  <a href="https://www.facebook.com/donate/2787764977993871/2787765077993861/" target="_blank"
      rel="noopener noreferrer">Donate Here</a></h5></div>
  </React.StrictMode>,
  document.getElementById('root')
);


const responseFacebook = (response) => {
  console.log(response);
}

const componentClicked = () => {
  console.log( "Clicked!" )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
