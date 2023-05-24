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

  function loopDay(){
    var counter = 0;
    var counter2 = 0;
    var times = [
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
    ]
    var months = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ]
    
    window.setInterval(
    function () {
        counter = counter + 1;
        document.getElementById("time").value = times[counter - 1];
        updateValue()
        if (counter > times.length - 1){
          counter = 0;
        }
        

    }, 200);

    document.getElementById("date").value = months[0];
    window.setInterval(
    function () {
      counter2 = counter2 + 1;
      document.getElementById("date").value = months[counter2];
      updateValue()
      if (counter2 > months.length - 1){
        counter2 = 0;
      }
    }, 4800);

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
        <div className="loopday" onClick={loopDay}>
          Play
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
