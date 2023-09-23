import { RowDataPacket } from "mysql2";

type Props = {
  promise: Promise<RowDataPacket[]>;
};

export default async function UserInfo({ promise }: Props) {
  const user = await promise;
  console.log("---->>>>>", user);
  const content = (
    <article key={user[0].id}>
      <p>{user[0].email}</p>
      <p>{user[0].password}</p>
      <br />
      {user[0].is_admin ? <p>ADMIN RIGHTS</p> : null}

      <br />
    </article>
  );

  return content;
}
