import { useSelector } from 'react-redux';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import Filter from './components/Filter';

export default function App() {
  const { list, listFiltered } = useSelector((state) => state.list);

  return (
    <div className="App">
      <Form />
      <Filter />
      <List list={listFiltered ? listFiltered : list}/>
    </div>
  );
}
