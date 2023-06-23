import { useSelector } from "react-redux";
import SkillsList from "../SkillsList/SkillsList";

export default function ContainerSkills() {
    const { loading, error, search } = useSelector(state => state.skills);

    const hasQuery = search.trim() !== '';
    return (
        <div className="skills-container">   
            {!hasQuery && <div className="empty-input">Type something to search</div>}
            {hasQuery && loading && <div className="search">searching...</div>}
            {error ? <div className="error">Error occured</div> : <SkillsList />}
        </div>
    )
}