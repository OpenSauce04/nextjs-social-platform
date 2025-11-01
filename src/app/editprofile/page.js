import { SignedIn, SignedOut } from '@clerk/nextjs'
import { currentUser } from "@clerk/nextjs/server"
import Link from 'next/link'
import { Button } from "@radix-ui/themes";

import { BackButton } from "../backbutton.jsx"
import { EditBio } from "./editbio.jsx"

export default async function HomePage() {
  const userName = (await currentUser())?.username;

  return (
    <>
      <BackButton url='/' />
      <h1>
        Edit profile: {userName}
      </h1>
      <SignedOut>
        <Link href='/signin'>
          <p>
            Please sign in before editing your profile:
          </p>
          <Button>Sign in</Button>
        </Link>
      </SignedOut>
      <SignedIn>
        <EditBio />
      </SignedIn>
    </>
  );
}
