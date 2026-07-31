import React, { useState, useEffect } from 'react';
function EveryTimeExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    console.log('🔄 Component re-rendered!');
    console.log('Count is:', count);
    console.log('Name is:', name);
    console.log('---');
  });

  return (
    <div>
      <h2>Check the console!</h2>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type a name"
      />
    </div>
  );
}
export default EveryTimeExample;