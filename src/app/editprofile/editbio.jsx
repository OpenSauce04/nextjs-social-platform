import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from 'next/navigation';

import { Button } from "@radix-ui/themes";

import { dbQuery } from '../dbutils.js'

export async function EditBio(params) {
  const { userId } = await auth();
  const currentBio = (await dbQuery('SELECT description FROM users WHERE id = $1', [userId])).rows[0].description;

  async function submitBio(formData) {
    'use server';

    const bio = formData.get('bio');

    await dbQuery('UPDATE users SET description=$1 WHERE id = $2', [bio, userId]);

    const userName = (await currentUser())?.username;
    redirect(`/users/${userName}`)
  }

  return (
    <>
      <form action={submitBio}>
        <h2>Bio</h2>
        <textarea id="userBioInput" name="bio" defaultValue={currentBio} />
        <br/>
        <Button type="submit">Send</Button>
      </form>
    </>
  );
}
