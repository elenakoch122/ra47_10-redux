import Item from "./Item";

export default function List({ list }) {
  return (
    <ul>
      {list.map(i => <li key={i.id}><Item item={i}/></li>)}
    </ul>
  );
}
