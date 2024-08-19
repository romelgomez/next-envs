// components/LogEnvVarButton.tsx

'use client';

import type React from 'react';

const LogEnvVarButton: React.FC = () => {
  const NEXT_PUBLIC_EXAMPLE_ENV_VAR = process.env.NEXT_PUBLIC_EXAMPLE_ENV_VAR;
  const SECRET_KEY = process.env.SECRET_KEY;

  const handleClick = () => {
    console.log('SECRET_KEY', process.env.SECRET_KEY);
    console.log(
      'NEXT_PUBLIC_EXAMPLE_ENV_VAR',
      process.env.NEXT_PUBLIC_EXAMPLE_ENV_VAR,
    );
  };

  return (
    <div>
      <button onClick={handleClick} type='button'>
        Log Environment Variable
      </button>

      <br />
      <br />

      <div>NEXT_PUBLIC_EXAMPLE_ENV_VAR: {NEXT_PUBLIC_EXAMPLE_ENV_VAR}</div>

      <br />

      <b>The SECRET_KEY, as this is a client component should be undefined, visible in the log</b>
    </div>
  );
};

export default LogEnvVarButton;
