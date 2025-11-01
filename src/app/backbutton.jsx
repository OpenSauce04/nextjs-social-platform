import Link from 'next/link'
import { Button } from "@radix-ui/themes";

export function BackButton(params) {
  return (
    <Link href={params.url}>
      <Button>
        &larr; Back
      </Button>
    </Link>
  )
}
