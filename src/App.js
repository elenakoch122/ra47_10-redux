import { useSelector } from 'react-redux';
import './App.css';
import Form from './components/Form';
import List from './components/List';

export default function App() {
  const { list } = useSelector((state) => state.list);

  return (
    <div className="App">
      <Form />
      <List list={list}/>
    </div>
  );
}
