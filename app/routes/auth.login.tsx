import { SignIn } from "@clerk/remix";
import type { V2_MetaFunction } from "@remix-run/node";


export const meta: V2_MetaFunction = () => {
    return [{ title: "New Remix App" }];
  };

export default function SignInPage() {
  return (
    <div>
      <h1>Sign In route</h1>
      <SignIn routing={"path"} path={"/sign-in"} />
    </div>
  );
}