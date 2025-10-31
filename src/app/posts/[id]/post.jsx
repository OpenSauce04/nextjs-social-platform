import Link from 'next/link'
import { clerkClient } from '@clerk/nextjs/server';

import { dbQuery } from '../../dbutils.js'

export async function Post(params) {
  const { id, userid, content } = params.post;
  const postURL = `/posts/${id}`;

  const userData = (await (await (await clerkClient()).users).getUser(userid)) // Ew
  const userName = userData.username

  return (
    <div key={id}>
      <br/>
      <p>
        <Link href={postURL}>Post #{id}</Link> by {userName}:
      </p>
      <br/>
      <p className="respect-newlines">
        {content}
      </p>
      <br/>
    </div>
  );
}
