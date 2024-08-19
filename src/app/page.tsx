import LogEnvVarButton from './components/LogEnvVarButton';

export default function Home() {
  const NEXT_PUBLIC_EXAMPLE_ENV_VAR = process.env.NEXT_PUBLIC_EXAMPLE_ENV_VAR;
  const SECRET_KEY = process.env.SECRET_KEY;

  return (
    <div>
      <h1>Experiment One</h1>
      <h3>Show/use env var from railway.app variable interface</h3>

      <div>NEXT_PUBLIC_EXAMPLE_ENV_VAR: {NEXT_PUBLIC_EXAMPLE_ENV_VAR}</div>
      <br />
      <div>SECRET_KEY: {SECRET_KEY}</div>

      <h1>Experiment Two</h1>

      <LogEnvVarButton />
    </div>
  );
}
