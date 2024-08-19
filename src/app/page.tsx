export default function Home() {
  const NEXT_PUBLIC_EXAMPLE_API_KEY = process.env.NEXT_PUBLIC_EXAMPLE_API_KEY;
  const SECRED_KEY = process.env.SECRED_KEY;

  return (
    <div>
      <h1>Experiment One</h1>
      <h3>Show/use env var from railway.app variable interface</h3>

      <div>
        NEXT_PUBLIC_EXAMPLE_API_KEY: {NEXT_PUBLIC_EXAMPLE_API_KEY}
      </div>
      <br />
      <div>
        SECRED_KEY: {SECRED_KEY}
      </div>
    </div>
  );
}
