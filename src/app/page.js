import { SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs'
import { currentUser } from "@clerk/nextjs/server"
import Link from 'next/link'

import { NewPost } from "./newpost.jsx"

export default async function HomePage() {
  const user = await currentUser();
  const userName = user?.username;

  return (
    <>
      <h1>
        Current user: {userName}
      </h1>
      <SignedOut>
        <Link href='/signin'>
          <button>Sign in</button>
        </Link>
      </SignedOut>
      <SignedIn>
        <SignOutButton />
        <NewPost />
      </SignedIn>
    </>
  );
}
