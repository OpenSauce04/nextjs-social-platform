import { SignedIn, SignedOut } from '@clerk/nextjs';
import { currentUser } from "@clerk/nextjs/server";
import Link from 'next/link';
import { Button } from "@radix-ui/themes";

import { BackButton } from "../backbutton.jsx";
import { ProfileLink } from "../profilelink.jsx";
import { EditBio } from "./editbio.jsx";

export default async function HomePage() {
  const userName = (await currentUser())?.username;

  return (
    <>
      <BackButton url='/' />
      <h3>
        Edit profile: <ProfileLink userName={userName} />
      </h3>
      <SignedOut>
        <p>
          Please sign in before editing your profile:
        </p>
        <Link href='/signin'>
          <Button>Sign in</Button>
        </Link>
      </SignedOut>
      <SignedIn>
        <EditBio />
      </SignedIn>
    </>
  );
}
