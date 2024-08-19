

export default function Home() {

  let NEXT_PUBLIC_EXAMPLE_API_KEY = process.env.NEXT_PUBLIC_EXAMPLE_API_KEY

  return <div>
    <h1>Experiment One</h1>

    <h3>Show/use env var from railway.app variable interface</h3>

    NEXT_PUBLIC_EXAMPLE_API_KEY: {NEXT_PUBLIC_EXAMPLE_API_KEY}

  </div>
}
