import { dbQuery } from '../../dbutils.js';

import { BackButton } from '../../backbutton.jsx';
import { UserHeader } from './userheader.jsx';
import { UserPostList } from './userpostlist.jsx';
import { NotFound } from '../../notfound.jsx';

export default async function UserPage({ params }) {
  const username = (await params).username;
  const user = (await dbQuery('SELECT * FROM users WHERE username = $1', [username])).rows[0];

  if (user === undefined) {
    return (
      <>
        <BackButton url='/' />
        <NotFound />
        <h3>
          If a profile should be here, make sure at least one post has been made with the account.
        </h3>
      </>
    )
  }

  return (
    <>
      <BackButton url='/' />
      <UserHeader user={user} />
      <UserPostList userId={user.id} />
    </>
  );
}
