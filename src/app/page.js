
import api from "./api"
import Head from "./Head";
import Link from "next/link";

export default async function Home() {
  const users = await api.user.list();
  return (
    <main>
      <Head title="users MAK" />

      <ul>
        {users.map((user, i) => (
          <li key={i}>
            <Link href={`/${user.slug}`}>{user.slug}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
