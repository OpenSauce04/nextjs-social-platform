export function UserHeader(params) {
  const { username, description } = params.user
  return (
    <div>
      <h2>{username}</h2>
      <b>{description}</b>
      <br/>
      <br/>
      <hr/>
      <hr/>
      <br/>
    </div>
  )
}
