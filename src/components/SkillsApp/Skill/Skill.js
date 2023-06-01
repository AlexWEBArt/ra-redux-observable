export default function Skill(props) {
    const { id, name } = props.item;

    return (
        <li className="skill" data-id={id}>
            {name}
        </li>
    )
}