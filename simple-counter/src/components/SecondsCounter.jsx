import React from "react";
import { useState } from "react";
import "../styles/SecondCounter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";
import { useRef } from "react";

const SecondsCounter = (props) => {
  const seconds = useRef(props.seconds);
  const [count, setCount] = useState(0);
  const column1 = useRef(null);
  const column2 = useRef(null);
  const column3 = useRef(null);
  const column4 = useRef(null);
  const column5 = useRef(null);
  const column6 = useRef(null);
  let secondsArr = [];

  secondsArr = Array.from(seconds.current.toString()).map(Number);
  let index = secondsArr.length - 1;

  for (let i = index; i >= 0; i--) {
    if (column1.current === null) {
      column1.current = secondsArr[i];
      seconds.current = column1.current;
    } else if (column2.current === null) {
      column2.current = secondsArr[i];
    } else if (column3.current === null) {
      column3.current = secondsArr[i];
    } else if (column4.current === null) {
      column4.current = secondsArr[i];
    } else if (column5.current === null) {
      column5.current = secondsArr[i];
    } else if (column6.current === null) {
      column6.current = secondsArr[i];
    }
  }

  if (column1.current === null) {
    column1.current = 0;
  }
  if (column2.current === null) {
    column2.current = 0;
  }
  if (column3.current === null) {
    column3.current = 0;
  }
  if (column4.current === null) {
    column4.current = 0;
  }
  if (column5.current === null) {
    column5.current = 0;
  }
  if (column6.current === null) {
    column6.current = 0;
  }

  useEffect(() => {
    setInterval(() => {
      if (seconds.current + 1 === 10) {
        seconds.current = 0;
        column1.current = seconds.current;
        if (column2.current + 1 === 10) {
          column2.current = 0;
          if (column3.current + 1 === 10) {
            column3.current = 0;
            if (column4.current + 1 === 10) {
              column4.current = 0;
              if (column5.current + 1 === 10) {
                column5.current = 0;
                if (column6.current + 1 === 10) {
                  column6.current = 0;
                } else {
                  column6.current += 1;
                }
              } else {
                column5.current += 1;
              }
            } else {
              column4.current += 1;
            }
          } else {
            column3.current += 1;
          }
        } else {
          column2.current += 1;
        }
      } else {
        seconds.current += 1;
        column1.current = seconds.current;
      }
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return (
    <div className="main">
      <div className="container">
        {count === 10 && alert("Han pasado 10 segundos!")}
        <div className="row">
          <div className="col-sm">
            <FontAwesomeIcon
              icon={faClock}
              size="xs"
              fixedWidth
              transform="up-2"
            />
          </div>
          <div className="col-sm">
            <p>{column6.current}</p>
          </div>
          <div className="col-sm">
            <p>{column5.current}</p>
          </div>
          <div className="col-sm">
            <p>{column4.current}</p>
          </div>
          <div className="col-sm">
            <p>{column3.current}</p>
          </div>
          <div className="col-sm">
            <p>{column2.current}</p>
          </div>
          <div className="col-sm">
            <p>{column1.current}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondsCounter;
