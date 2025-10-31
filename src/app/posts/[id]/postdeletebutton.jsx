import { redirect } from 'next/navigation';

import { dbQuery } from '../../dbutils.js'

export function PostDeleteButton(params) {
  const postId = params.postId;

  async function deletePost() {
    'use server'
    await dbQuery(`DELETE FROM posts WHERE id=${postId}`)
    redirect('/')
  }

  return (
    <button onClick={deletePost}>
      Delete
    </button>
  )
}
