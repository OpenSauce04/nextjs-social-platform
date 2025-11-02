import { redirect } from 'next/navigation';

import { Button } from "@radix-ui/themes";

import { dbQuery } from '../../dbutils.js';

export function PostDeleteButton(params) {
  const postId = params.postId;

  async function deletePost() {
    'use server';
    await dbQuery(`DELETE FROM posts WHERE id=${postId}`);
    redirect('/');
  }

  return (
    <Button onClick={deletePost}>
      Delete
    </Button>
  );
}
