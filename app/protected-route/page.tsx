import { auth } from "@/auth";
import EmptyPage from "@/components/EmptyPage";

export default async function ProtectedRoute() {
  const session = await auth();
  if (!session) {
    return <EmptyPage />;
  } else {
    return <div>{JSON.stringify(session)}</div>;
  }
}
