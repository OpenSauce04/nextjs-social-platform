import Link from 'next/link'

import { Button } from "@radix-ui/themes";

import { dbQuery } from '../../dbutils.js'

import { UserHeader } from './userheader.jsx'
import { UserPostList } from './userpostlist.jsx'
import { NotFound } from '../../notfound.jsx'

export default async function UserPage({ params }) {
  const username = (await params).username
  const user = (await dbQuery('SELECT * FROM users WHERE username = $1', [username])).rows[0];

  if (user === undefined) {
    return <NotFound />
  }

  return (
    <>
      <Link href="/">
        <Button>
          &larr; Back
        </Button>
      </Link>
      <UserHeader user={user} />
      <UserPostList userId={user.id} />
      <br/>
      <br/>
      <hr/>
    </>
  );
}
