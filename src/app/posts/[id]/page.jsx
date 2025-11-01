import { dbQuery } from '../../dbutils.js'

import { BackButton } from '../../backbutton.jsx'
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
      <BackButton url='/' />
      <Post post={post} />
      <PostDeleteButton postId={id} />
      <br/>
      <br/>
      <hr/>
    </>
  );
}
