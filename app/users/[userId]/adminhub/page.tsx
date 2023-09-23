import { RowDataPacket } from "mysql2";
import Link from "next/link";

type Props = {
  promise: Promise<RowDataPacket[]>;
};

const secretC = 1805;

export default async function AdminHub({ promise }: Props) {
  const user = await promise;

  const notAdmin = (
    <>
      <h1>YOU ARE NOT AN ADMIN!</h1>
      <Link href={`/users`}>BACK TO USER PAGE</Link>
    </>
  );

  const adminRights = (
    <>
      <h1>WELCOME TO THE ADMIN HUB!</h1>
      {/* <p>SOMETHING : {user[0].password}</p> */}
      <p>SECRET! : {secretC}</p>
    </>
  );

  const content = (
    <>
      {/* {user[0].is_admin ? adminRights : notAdmin} */}
      <h1>WELCOME TO THE ADMIN HUB!</h1>

      <br />
    </>
  );

  return content;
}
