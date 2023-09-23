import Link from "next/link";
import { getMyUsers } from "@/lib/getMyUsers";

export default async function Home() {
  const usersData = getMyUsers();
  const users = await usersData;

  return (
    <main className="nav">
      <section className="home_wrapper">
        <div className="stage1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          rerum cum, ducimus quis, nulla eum velit incidunt quisquam neque
          perspiciatis asperiores ipsa, exercitationem ipsum. Nam dolor quae
          natus adipisci sequi.
        </div>
        <div className="stage2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
          dolores obcaecati, at alias porro amet quas ipsum odit sed nulla
          necessitatibus quibusdam ducimus eaque aliquid, nam, odio itaque
          possimus earum.
        </div>
        <div className="stage3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </div>
        <div className="stage4">
          Atque commodi, tempore perspiciatis sit officia dolores at dolor
          corrupti provident reprehenderit incidunt cumque ipsum quam quae esse
          nobis non repellat veritatis!
        </div>
      </section>
    </main>
  );
}
