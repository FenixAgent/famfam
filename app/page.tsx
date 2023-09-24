import Link from "next/link";
import { getMyUsers } from "@/lib/getMyUsers";

export default async function Home() {
  const usersData = getMyUsers();
  const users = await usersData;

  return (
    <main className="nav">
      <section className="home_wrapper">
        <div className="stage1">
          <h1></h1>
        </div>
        <div className="stage2">
          <h1 className="STAGE1"></h1>
        </div>
        <div className="stage3">
          <h1 className="STAGE2"></h1>
        </div>
        <div className="stage4">
          <h1 className="STAGE3"></h1>
        </div>
      </section>
    </main>
  );
}
