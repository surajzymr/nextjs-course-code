import { useState } from "react";

function Test() {
    const [name, setName] = useState('');

  return (
    <div>
      <h1>Test Component</h1>
      <button onClick={() => alert('sdfdsfsdf')}>Click</button>
    </div>
  );
}

export default Test;
