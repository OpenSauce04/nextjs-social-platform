import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from 'next/navigation';

import { Button } from "@radix-ui/themes";

import { dbQuery } from './dbutils.js'

export async function NewPost(params) {
  async function submitPost(formData) {
    'use server';

    const { userId } = await auth();
    const userName = (await currentUser())?.username;
    const content = formData.get('content');

    await dbQuery(`INSERT INTO users(id, username, description) VALUES($1, $2, $3)
                   ON CONFLICT (id) DO NOTHING;`,
                   [userId, userName, 'Hello, world!']);
    await dbQuery('INSERT INTO posts(userid, content) VALUES($1, $2)', [userId, content]);

    // This is bad and ugly but I'm not sure how else to approach it
    const newPostId = (await dbQuery(
      'SELECT id FROM posts WHERE userid = $1 AND content = $2',[userId, content]
    )).rows.reverse()[0].id;

    redirect(`/posts/${newPostId}`)
  }

  return (
    <>
      <form action={submitPost}>
        <h2>New Post</h2>
        <textarea id="postContentInput" name="content" />
        <br/>
        <Button type="submit">Send</Button>
      </form>
    </>
  );
}
