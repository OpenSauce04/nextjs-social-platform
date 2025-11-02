import Link from 'next/link';

export function ProfileLink(params) {
  const {userName} = params;
  return <Link href={`/users/${userName}`}>{userName}</Link>
}
