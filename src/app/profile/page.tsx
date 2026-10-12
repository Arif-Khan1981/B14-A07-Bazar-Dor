
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import SignOutButton from "./signOutButton";
import Link from "next/link";



export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <main className="min-h-screen bg-base-200 px-4 py-12">
      
<Link href="/profile/edit" className="btn btn-primary mt-4">
  প্রোফাইল সম্পাদনা
</Link>
<Link
  href="/profile/change-password"
  className="btn btn-outline mt-3"
>
  পাসওয়ার্ড পরিবর্তন
</Link>

      <div className="mx-auto max-w-2xl rounded-2xl bg-base-100 p-6 shadow">
        <h1 className="mb-6 text-3xl font-bold">
          আমার প্রোফাইল
        </h1>

        <div className="space-y-3">
          <p>
            <span className="font-semibold">নাম: </span>
            {session.user.name || "নাম দেওয়া হয়নি"}
          </p>

          <p>
            <span className="font-semibold">ইমেইল: </span>
            {session.user.email}
          </p>
        </div>

        <div className="mt-6">
          <SignOutButton />
        </div>
      </div>
    </main>
  );
}
