import { useDispatch, useSelector } from "react-redux";
import { filterList, setSearchValue } from "../redux/actions";

export default function Filter() {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state.filter);

  const onChangeHandler = (e) => {
    dispatch(setSearchValue(e.target.value));
    dispatch(filterList(e.target.value));
  };

  return <input type="text" placeholder="Search..." onChange={onChangeHandler} value={filter}/>;
}
