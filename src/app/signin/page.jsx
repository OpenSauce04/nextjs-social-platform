import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <>
      <center>
        <SignIn routing="hash" signUpUrl="/signup" />
      </center>
    </>
  );
}
