import { useDispatch, useSelector } from "react-redux";
import { addItem, editItem, setId, setPrice, setTask } from "../redux/actions";

export default function Form() {
  const dispatch = useDispatch();
  const { task, price, id } = useSelector((state) => state.service);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (id) {
      dispatch(editItem(task, price, id));
      dispatch(setId(null));
    } else {
      dispatch(addItem(task, price));
    }

    dispatch(setTask(''));
    dispatch(setPrice(''));
  };

  return (
    <form action="" onSubmit={onSubmitHandler}>
      <input type="text" value={task} required onChange={(e) => { dispatch(setTask(e.target.value)) }}/>
      <input type="number" min="1" value={price} required onChange={(e) => { dispatch(setPrice(e.target.value)) }} />
      <button>Save</button>
    </form>
  );
}
