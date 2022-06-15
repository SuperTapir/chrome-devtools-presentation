import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Elements Panel</h1>
      <h2>DOM Tree</h2>

      <Link to="StylesConfig"><button>Next</button></Link>
    </div>
  );
}
