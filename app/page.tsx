import Link from "next/link";
import { getMyUsers } from "@/lib/getMyUsers";

export default async function Home() {
  const usersData = getMyUsers();
  const users = await usersData;

  console.log("--7777->", users);

  return (
    <main className="nav">
      <Link href="/users"> See All Users</Link>
      <br />
      {users.map((user) => {
        return (
          <>
            <h2>{user.first_name}</h2>
          </>
        );
      })}
    </main>
  );
}
