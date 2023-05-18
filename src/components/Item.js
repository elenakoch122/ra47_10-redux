import { useDispatch } from "react-redux";
import { clearForm, deleteItem, setId, setIsEdit, setPrice, setTask } from "../redux/actions";

export default function Item({ item }) {
  const dispatch = useDispatch();

  const onEditClick = (item) => {
    dispatch(setTask(item.task));
    dispatch(setPrice(item.price));
    dispatch(setId(item.id));
    dispatch(setIsEdit(true));
  };

  const onDeleteClick = (id) => {
    dispatch(deleteItem(id));
    dispatch(clearForm());
  };

  return (
    <>
      <span className="item__name">{item.task}</span>
      <span className="item__price">{item.price}</span>
      <button className="item__editBtn" onClick={ () => onEditClick(item) }>&#9998;</button>
      <button className="item__deleteBtn" onClick={ () => onDeleteClick(item.id) }>&#10006;</button>
    </>
  );
}
