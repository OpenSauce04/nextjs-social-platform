import { SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs';
import { currentUser } from "@clerk/nextjs/server";
import Link from 'next/link'

import { Button } from "@radix-ui/themes";

import { ProfileLink } from "./profilelink.jsx";
import { NewPost } from "./newpost.jsx";
import { PostList } from "./postlist.jsx";

export default async function HomePage() {
  const userName = (await currentUser())?.username;

  return (
    <>
      <SignedOut>
        <h3>
          Not logged in
        </h3>
        <Link href='/signin'>
          <Button>Sign in</Button>
        </Link>
      </SignedOut>
      <SignedIn>
        <h3>
          Logged in: <ProfileLink userName={userName} />
        </h3>
        <Link href='/editprofile'>
          <Button>Edit profile</Button>
        </Link> <SignOutButton>
          <Button>Sign out</Button>
        </SignOutButton>
        <NewPost />
      </SignedIn>
      <PostList />
    </>
  );
}
