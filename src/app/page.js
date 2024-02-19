import api from "./api"
import Head from "./Head";

export default async function Home() {
  const links = await api.links.fetch();
  return (
    <main>
      <Head title="Links MAK" />

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
