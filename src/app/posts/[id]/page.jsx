import Link from 'next/link'

import { dbQuery } from '../../dbutils.js'

import { Post } from './post.jsx'
import { PostDeleteButton } from './postdeletebutton.jsx'
import { NotFound } from '../../notfound.jsx'

export default async function PostPage({ params }) {
  const id = (await params).id
  const post = (await dbQuery('SELECT * FROM posts WHERE id = $1', [id])).rows[0];

  if (post === undefined) {
    return <NotFound />
  }

  return (
    <>
      <Link href="/">
        <button>
          &larr; Back
        </button>
      </Link>
      <Post post={post} />
      <PostDeleteButton postId={id} />
      <br/>
      <br/>
      <hr/>
    </>
  );
}
