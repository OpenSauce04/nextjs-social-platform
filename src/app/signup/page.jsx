import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <>
      After signing up, make your first post to create your user profile.
      <br/>
      <br/>
      <center>
        <SignUp routing="hash" signInUrl="/signin" />
      </center>
    </>
  );
}
