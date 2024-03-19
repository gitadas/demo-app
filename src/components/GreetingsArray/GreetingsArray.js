import React from "react"

export default function GreetingsArray() {
    const componentArray = [
    <p key="greetings-1">Hello Students!</p>,
    <p key="greetings-2">Good day!</p>,
    ];
   
    return (
      <div>
        {componentArray}
      </div>
    );
   }