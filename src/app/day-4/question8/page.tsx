"use client";
import { useState, ChangeEvent } from "react";

export default function Question8() {
  const [celsius, setCelsius] = useState<number | undefined>();
  const [fahrenheit, setFahrenheit] = useState<number | undefined>();
  const [fahrenheitResult, setFahrenheitResult] = useState<number | null>(null);
  const [celsiusResult, setCelsiusResult] = useState<number | null>(null);

  const findFahrenheit = () => {
    if (celsius === undefined) return;
    setFahrenheitResult((celsius * 9) / 5 + 32);
  };

  const findCelsius = () => {
    if (fahrenheit === undefined) return;
    setCelsiusResult(((fahrenheit - 32) * 5) / 9);
  };

  const handleCelsiusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCelsius(value === '' ? undefined : Number(value));
  };

  const handleFahrenheitChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFahrenheit(value === '' ? undefined : Number(value));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "10%",
        gap: "15px",
      }}
    >
      <input
        type="number"
        placeholder="Enter the temperature in Celsius"
        value={celsius ?? ''}
        onChange={handleCelsiusChange}
      />
      <button onClick={findFahrenheit}>Fahrenheit</button>
      <div>{fahrenheitResult !== null ? fahrenheitResult.toFixed(2) : ""}</div>

      <input
        type="number"
        placeholder="Enter the temperature in Fahrenheit"
        value={fahrenheit ?? ''}
        onChange={handleFahrenheitChange}
      />
      <button onClick={findCelsius}>Celsius</button>
      <div>{celsiusResult !== null ? celsiusResult.toFixed(2) : ""}</div>
    </div>
  );
}
