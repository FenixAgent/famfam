import type { Metadata } from "next";
import { getAllUsers } from "@/lib/getAllUsers";
import Link from "next/link";
import "./style.css";

export const metadata: Metadata = {
  title: "User Page",
  description: "User Page description",
};

export default async function UsersPage() {
  // throw new Error("Ya Broke it!");

  const usersData = getAllUsers();
  const users = await usersData;
  console.log(users[0]);

  const content = (
    <section className="user_list_wrapper">
      <br />
      {users.map((user) => {
        return (
          <>
            <p className="user_name" key={user.id}>
              <Link href={`/users/${user.id}`}>{user.first_name}</Link>
            </p>
          </>
        );
      })}
    </section>
  );
  return content;
}
