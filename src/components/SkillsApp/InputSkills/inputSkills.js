import { useSelector, useDispatch } from "react-redux";
import { changeSearchField } from '../../../redux/actions/actionCreators';

export default function InputSkills() {
    const { search } = useSelector(state => state.skills);
    const dispatch = useDispatch();

    const handleSearch = evt => {
        const { value } = evt.target;
        dispatch(changeSearchField(value));
    };

    return (
        <input type="search" value={search} onChange={handleSearch} />
    )
}