import react from 'react';
import { createRoot } from 'react-dom/client';

function CounterDisplay({ count }) {
  return <p>{count}</p>;
}

function IncreaseButton({ increase }) {
  return (
    <div>
      <button onClick={increase}>+ increase</button>
    </div>
  );
}

function ResetButton({ reset }) {
  return (
    <div>
      <button onClick={reset}>- reset</button>
    </div>
  );
}
