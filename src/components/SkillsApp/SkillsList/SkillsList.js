import { useSelector } from "react-redux"
import Skill from "../Skill/Skill";

export default function SkillsList() {
    const { items } = useSelector(state => state.skills);

    return (
        <ul className="skills-list">
            {items.map(item => <Skill key={item.id} item={item}/>)}
        </ul>
    )
}