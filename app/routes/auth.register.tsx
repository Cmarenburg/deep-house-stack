import { SignUp } from "@clerk/remix";
import type { V2_MetaFunction } from "@remix-run/node";


export const meta: V2_MetaFunction = () => {
    return [{ title: "New Remix App" }];
  };

export default function SignUpPage() {
  return (
    <div>
      <h1>Sign Up route</h1>
      <SignUp routing={"path"} path={"/sign-up"} />
    </div>
  );
}