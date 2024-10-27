import React from "react";

function Operators() {
  let score = 100;
  return (
    <div className="operators">
      <div>
        <h1> Operators</h1>
        <button
          type="button"
          onClick={() => {
            let a = 20 + 30 + 50;
            console.log(a);
          }}
        >
          Addition
        </button>

        <button
          type="button"
          onClick={() => {
            let a = 20 - 30 + 50;
            console.log(a);
          }}
        >
          Subtraction
        </button>

        <button
          type="button"
          onClick={() => {
            let a = 20 * 30 * 50;
            console.log(a);
          }}
        >
          Multiplication
        </button>

        <button
          type="button"
          onClick={() => {
            let a = 200 / 50;
            console.log(a);
          }}
        >
          Division
        </button>

        <button
          type="button"
          onClick={() => {
            let a = 203 % 50;
            console.log(a);
          }}
        >
          Modulus
        </button>

        <button
          type="button"
          onClick={() => {
            score++;
            console.log(score);
          }}
        >
          Increment
        </button>

        <button
          type="button"
          onClick={() => {
            score--;
            console.log(score);
          }}
        >
          Decrement
        </button>

        <button
          type="button"
          onClick={() => {
            let a = 14 + 2 * (5 + 10) * (100 - 50) + 20;
            console.log(a);
          }}
        >
          Precedence
        </button>

        <button
          type="button"
          onClick={() => {
            let a = 10;
            a += 20;
            a -= 10;
            a *= 50;
            a /= 10;
            a %= 3;
            console.log(a);
          }}
        >
          Assignment Operator
        </button>

        <button
          type="button"
          onClick={() => {
            let a = 10;
            console.log(a == 10);
            console.log(a != 10);
            console.log(a > 5);
            console.log(a < 2);
            console.log(a >= 280);
            console.log(a <= 76);
          }}
        >
          Comparision Operator
        </button>

        <button
          type="button"
          onClick={() => {
            let a = 10;
            if (a >= 20) {
              console.log("value of a is correct");
            } else {
              console.log("value of a is incorrect");
            }
          }}
        >
          if else
        </button>
      </div>
    </div>
  );
}

export default Operators;
