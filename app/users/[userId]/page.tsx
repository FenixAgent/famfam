import { getUser } from "@/lib/getUser";
import { getUserInfo } from "@/lib/getUserInfo";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import "../style.css";
import { RowDataPacket } from "mysql2";
import Link from "next/link";

type Params = {
  params: {
    userId: string;
  };
};

export default async function UsersPage({ params: { userId } }: Params) {
  const userData = getUser(userId);
  const userPostsData: Promise<RowDataPacket[]> = getUserInfo(userId);

  const user = await userData;

  return (
    <>
      <h2 className="meow">{user[0].first_name + " " + user[0].last_name}</h2>
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}
