export default function Home({
  NEXT_PUBLIC_EXAMPLE_ENV_VAR,
  SECRET_KEY,
}: {
  NEXT_PUBLIC_EXAMPLE_ENV_VAR: string;
  SECRET_KEY: string;
}) {
  return (
    <div>
      <h1>Experiment One</h1>
      <h3>Show/use env var from railway.app variable interface</h3>

      <div>NEXT_PUBLIC_EXAMPLE_ENV_VAR: {NEXT_PUBLIC_EXAMPLE_ENV_VAR}</div>
      <br />
      <div>SECRET_KEY: {SECRET_KEY}</div>
    </div>
  );
}

// ref: https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering

export async function getServerSideProps() {
  const NEXT_PUBLIC_EXAMPLE_ENV_VAR = process.env.NEXT_PUBLIC_EXAMPLE_ENV_VAR;
  const SECRET_KEY = process.env.SECRET_KEY;

  return { props: { NEXT_PUBLIC_EXAMPLE_ENV_VAR, SECRET_KEY } };
}
