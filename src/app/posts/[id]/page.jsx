import { auth } from "@clerk/nextjs/server"

import { dbQuery } from '../../dbutils.js';

import { BackButton } from '../../backbutton.jsx';
import { Post } from '../../post.jsx';
import { PostDeleteButton } from './postdeletebutton.jsx';
import { NotFound } from '../../notfound.jsx';

export default async function PostPage({ params }) {
  const id = (await params).id;
  const post = (await dbQuery('SELECT * FROM posts WHERE id = $1', [id])).rows[0];

  if (post === undefined) {
    return <NotFound />
  }

  const { userId } = await auth();
  const postByCurrentUser = (post.userid === userId);

  return (
    <>
      <BackButton url='/' />
      <hr/>
      <Post post={post} />
      <hr/>
      {
        postByCurrentUser ? <PostDeleteButton postId={id} /> : undefined
      }
    </>
  );
}
