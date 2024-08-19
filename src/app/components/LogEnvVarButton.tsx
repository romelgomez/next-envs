// components/LogEnvVarButton.tsx

"use client";

import React from 'react';

const LogEnvVarButton: React.FC = () => {
  const NEXT_PUBLIC_EXAMPLE_ENV_VAR = process.env.NEXT_PUBLIC_EXAMPLE_ENV_VAR;
  const SECRET_KEY = process.env.SECRET_KEY;



  const handleClick = () => {
    console.log('SECRET_KEY', process.env.SECRET_KEY);
    console.log('NEXT_PUBLIC_EXAMPLE_ENV_VAR', process.env.NEXT_PUBLIC_EXAMPLE_ENV_VAR);
  };

  return (
    <div>
      <button onClick={handleClick}>
        Log Environment Variable
      </button>



      <div>NEXT_PUBLIC_EXAMPLE_ENV_VAR: {NEXT_PUBLIC_EXAMPLE_ENV_VAR}</div>
      <br />
      <div>SECRET_KEY: {SECRET_KEY}</div>
    </div>

  );
};

export default LogEnvVarButton;
