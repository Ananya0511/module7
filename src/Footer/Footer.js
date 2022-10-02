
import React,{useState} from "react";
import "./Footer.css";

function Footer() {
  const [email,setEmail] = useState("");
  function handleSubmit (){
    let data={email}
    fetch('https://ananya-dash-default-rtdb.asia-southeast1.firebasedatabase.app/application.json',{
          method :'POST',
          body : JSON.stringify(data),
          headers : {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          }
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log("resp",resp)
      })
    });

  setEmail("");
  }

  return (
    <div>
      <ul className="f-cantainer">
        <ul>
          <li id="list">Company info</li>
          <li>About us</li>
          <li>Carrier</li>
          <li>We are hiring</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li id="list">Legal</li>
          <li>About us</li>
          <li>Carrier</li>
          <li>We are hiring</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li id="list">Features</li>
          <li>Business Marketing</li>
          <li>User Analytics</li>
          <li>Live Chat</li>
          <li>Unlimited Support</li>
        </ul>
        <ul>
          <li id="list">Resources</li>
          <li>IOS & Android</li>
          <li>Watch A Demo</li>
          <li>Customers</li>
          <li>Api</li>
        </ul>
        <ul>
          <li id="list">Get In Touch</li>
          <li>
            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email"/>
            <button id="btn"  type="button" onClick={handleSubmit}>Subscribe</button>
          </li>
          <li>Subscribe to know more!</li>
        </ul>
      </ul>
    </div>
  );
}

export default Footer