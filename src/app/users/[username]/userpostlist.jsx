import { dbQuery } from '../../dbutils.js'

import { Post } from '../../post.jsx'

export async function UserPostList(params) {
  var postData = (await dbQuery('SELECT * FROM posts ORDER BY id DESC')).rows;

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
    </>
  )
}
