import { Redirect } from "expo-router";

export default function Index() {
  const option = false


  return <Redirect href={ option ? "/screens/homepage" : "/auth/signin"} />;
}

