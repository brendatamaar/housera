import type { NextPage } from "next";

import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Landing</h1>
      <Link href="/auth/signin">
        Login
      </Link>
      <div>
        <Link href="/auth/signup">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;