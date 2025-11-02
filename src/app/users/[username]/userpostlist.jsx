import { dbQuery } from '../../dbutils.js';

import { Post } from '../../post.jsx';

export async function UserPostList(params) {
  const { userId } = params;
  const postData = (await dbQuery('SELECT * FROM posts WHERE userid = $1 ORDER BY id DESC', [userId])).rows;

  return (
    <>
      <h2>Posts</h2>
      {
        postData.map((post) => {
          return <div key={post.id}>
                   <hr/>
                   <Post post={post} />
                 </div>
        })
      }
      <hr/>
    </>
  );
}
