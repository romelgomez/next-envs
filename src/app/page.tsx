import LogEnvVarButton from './components/LogEnvVarButton';

export default function Home() {
  const NEXT_PUBLIC_EXAMPLE_ENV_VAR = process.env.NEXT_PUBLIC_EXAMPLE_ENV_VAR;
  const SECRET_KEY = process.env.SECRET_KEY;

  return (
    <div>
      <h1>Experiment One - Server component</h1>

      <div>NEXT_PUBLIC_EXAMPLE_ENV_VAR: {NEXT_PUBLIC_EXAMPLE_ENV_VAR}</div>
      <br />
      <div>SECRET_KEY: {SECRET_KEY}</div>

      <h1>Experiment Two - Client component</h1>

      <LogEnvVarButton />
    </div>
  );
}
