
import React, { useState } from 'react';
import { FaPlus, FaMinus, FaRedo } from 'react-icons/fa';

const ModifiedCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    } else {
      setCount(0); // Reset if it hits 20
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    if (count >= 1 && count <= 20) {
      setCount(0);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Modified Counter</h1>
      <h1 style={styles.heading}>Counter: {count}</h1>
      <div style={styles.buttonRow}>
        <button style={styles.button} onClick={increment}>
          <FaPlus />
        </button>
        <button style={styles.button} onClick={reset}>
          <FaRedo />
        </button>
        <button style={styles.button} onClick={decrement}>
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f0f0f0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '300px',
    border: '2px solid #007bff',
    color: '#007bff',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'center',
    // alignitems: 'center',
    gap: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1.5rem',
    cursor: 'pointer',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
  },
};

export default ModifiedCounter;
