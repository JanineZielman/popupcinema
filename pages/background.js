import React, {useState, useEffect} from "react";

const Background = () => {
  function print(){
    window.print();
  }
  
  const [date, setDate] = useState('January');
  const [time, setTime] = useState('20:00');

  useEffect(() => {
    document.getElementById("date").addEventListener("input", updateValue);
    document.getElementById("time").addEventListener("input", updateValue);
  })

  function updateValue(){
    setDate(document.getElementById("date").value);
    setTime(document.getElementById("time").value);
  }
  
  

  return (
    <div className={`background-generator ${date.slice(0, 3).toLowerCase()}2`}>
      <div className="settings">
        <div className="options">
          <div>
            Month:
            <input className="date" id="date" placeholder="Janurary"></input>
          </div>
          <div>
            Time:
            <input className="time" id="time" placeholder="20:00"></input>
          </div>
        </div>
        <div className="print" onClick={print}>
          Print
        </div>
      </div>
      <div className={`gradient ${date.slice(0, 3).toLowerCase()}1 time${time.slice(0, 2)}`}>
        <div className="gradient-content">
        </div>
      </div>
    </div>
  );
};

export default Background;
