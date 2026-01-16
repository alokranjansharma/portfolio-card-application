import './Skills.css'
export default function Skills({skills}){
    return(
        <>
        <h3 className='skill-heading'>Skills</h3>
        <ul className="skills-wrap">
            {skills.map((skill) => (
                <li className='skills' key={skill}>{skill}</li>
            ))}
        </ul>
        </>
    )
}