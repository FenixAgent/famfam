import Link from "next/link";
import { getMyUsers } from "@/lib/getMyUsers";

export default async function Home() {
  const usersData = getMyUsers();
  const users = await usersData;

  return (
    <main className="nav">
      {/* <Link href="/users"> See All Users</Link> */}
      {/* <br /> */}
      {users.map((user) => {
        return (
          <section key={user.id}>
            <h2>{user.first_name}</h2>
          </section>
        );
      })}
    </main>
  );
}
