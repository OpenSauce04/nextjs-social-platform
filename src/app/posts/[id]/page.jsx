import Link from 'next/link'

import { Button } from "@radix-ui/themes";

import { dbQuery } from '../../dbutils.js'

import { Post } from '../../post.jsx'
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
        <Button>
          &larr; Back
        </Button>
      </Link>
      <Post post={post} />
      <PostDeleteButton postId={id} />
      <br/>
      <br/>
      <hr/>
    </>
  );
}
