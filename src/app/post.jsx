import Link from 'next/link';
import { clerkClient } from '@clerk/nextjs/server';

import { ProfileLink } from "./profilelink.jsx";
import { dbQuery } from './dbutils.js';

export async function Post(params) {
  const { id, userid, content } = params.post;
  const postURL = `/posts/${id}`;

  const userData = (await (await (await clerkClient()).users).getUser(userid)); // Ew
  const userName = userData.username;

  return (
    <div key={id}>
      <p>
        <Link href={postURL}>Post #{id}</Link> by <ProfileLink userName={userName} />:
      </p>
      <p style={{whiteSpace: 'pre-line'}}>
        {content}
      </p>
    </div>
  );
}
