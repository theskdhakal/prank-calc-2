import { AllBtn } from "./AllBtn";
import "./App.css";
import { useState } from "react";
import abcd from "./asset/abcd.mp3";
const operator = ["%", "+", "-", "*", "/"];

function App() {
  const [str, setStr] = useState("");
  const [lastOperator, setLastOperator] = useState("");
  const [prank, setPrank] = useState(false);
  const realTimeDisplay = (text) => {
    prank && setPrank(false);
    if (text === "AC") {
      setStr("");
      return;
    }

    if (text === "C") {
      if (str.length) {
        setStr(str.slice(0, -1));
      }
      return;
    }

    if (text === "=") {
      let dtstr = str;
      const lastChar = dtstr[dtstr.length - 1];
      if (operator.includes(lastChar)) {
        dtstr = str.slice(0, -1);
      }
      total(dtstr);
      return;
    }

    if (operator.includes(text)) {
      if (!str) {
        return;
      }
      setLastOperator(text);
      console.log(lastOperator);

      const lastChar = str[str.length - 1];
      if (operator.includes(lastChar)) {
        return setStr(str.slice(0, -1) + text);
      }
    }

    if (text === ".") {
      if (lastOperator) {
        const operatorIndex = str.lastIndexOf(lastOperator);

        const lastNumberSet = str.slice(operatorIndex + 1);
        console.log(lastNumberSet);

        if (lastNumberSet.includes(".")) {
          return;
        }

        if (!lastNumberSet) {
          return;
        }
      }

      if (!lastOperator && str.includes(".")) {
        return;
      }
    }
    setStr(str + text);
  };

  const total = (calc) => {
    const extra = randomNumber();
    if (extra) {
      setPrank(true);
      Music();
    }

    const ttl = eval(calc) + extra;

    setStr(ttl.toString());
  };

  const randomNumber = () => {
    const num = Math.round(Math.random() * 10);
    return num <= 3 ? num : 0;
  };
  const Music = () => {
    const audio = new Audio(abcd);
    audio.play();
  };

  const allBtns = [
    { text: str || "0.00 ", cls: prank ? "display prank" : "display" },
    { text: "AC", cls: "btn btn-ac" },
    { text: "C", cls: "btn btn-c" },
    { text: "%", cls: "btn btn-perc" },
    { text: "/", cls: "btn btn-divide" },
    { text: "*", cls: "btn btn-X" },
    { text: "+", cls: "btn btn-plus" },
    { text: "-", cls: "btn btn-minus" },
    { text: "=", cls: "btn btn-equal" },
    { text: ".", cls: "btn btn-dot" },
    { text: "1", cls: "btn btn-1" },
    { text: "2", cls: "btn btn-2" },
    { text: "3", cls: "btn btn-3" },
    { text: "5", cls: "btn btn-5" },
    { text: "4", cls: "btn btn-4" },
    { text: "6", cls: "btn btn-6" },
    { text: "7", cls: "btn btn-7" },
    { text: "8", cls: "btn btn-8" },
    { text: "9", cls: "btn btn-9" },
    { text: "0", cls: "btn btn-0" },
  ];
  return (
    <div class="wrapper">
      <div class="calculator">
        {allBtns.map((item, i) => (
          <AllBtn {...item} realTimeDisplay={realTimeDisplay} />
        ))}
      </div>

      <div class="circle"></div>
    </div>
  );
}

export default App;
