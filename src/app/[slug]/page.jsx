
import api from "../api";
import { notFound } from "next/navigation";
import Head from "../Head";

export default async function Slug({params: {slug}}) {
  const users = await api.user.list();
    const user = users.find((user) => user.slug === slug)
    console.log(user);
    if (!user) {
        return notFound()
    }
  const links = await api.links.fetch(user.url);
  return (
    <main>
      <Head title="links MAK" />

      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </main>
  )
}
