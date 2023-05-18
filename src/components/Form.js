import { useDispatch, useSelector } from "react-redux";
import { addItem, clearForm, editItem, setPrice, setTask } from "../redux/actions";

export default function Form() {
  const dispatch = useDispatch();
  const { task, price, id, isEdit } = useSelector((state) => state.service);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    id ? dispatch(editItem(task, price, id)) : dispatch(addItem(task, price));
    dispatch(clearForm());
  };

  return (
    <form action="" onSubmit={onSubmitHandler}>
      <input type="text" value={task} required onChange={(e) => { dispatch(setTask(e.target.value)) }}/>
      <input type="number" min="1" value={price} required onChange={(e) => { dispatch(setPrice(e.target.value)) }} />
      <button type="submit">Save</button>
      {isEdit && <button type="reset" onClick={() => dispatch(clearForm())}>Cancel</button>}
    </form>
  );
}