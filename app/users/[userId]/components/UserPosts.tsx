import { RowDataPacket } from "mysql2";
import Link from "next/link";

type Props = {
  promise: Promise<RowDataPacket[]>;
};

export default async function UserInfo({ promise }: Props) {
  const user = await promise;

  const content = (
    <article key={user[0].id}>
      <p>{user[0].email}</p>
      <p>{user[0].password}</p>
      <br />
      <hr />
      {user[0].is_admin ? (
        <Link href={`/users/${user[0].id}/adminhub`}>ADMIN HUB</Link>
      ) : null}

      <br />
    </article>
  );

  return content;
}
