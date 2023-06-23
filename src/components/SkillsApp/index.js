import InputSkills from './InputSkills/inputSkills';
import ContainerSkills from './ContainerSkills/ContainerSkills';
import { useSelector } from 'react-redux';
import SystemServices from '../SystemServices';

export default function Skills() {
    const { loading, error } = useSelector(state => state.skills);

    return (
        <div className='skills-app'>
            <InputSkills />
            <ContainerSkills />
            <SystemServices message={{loading, error}}/>
        </div>
    )
}