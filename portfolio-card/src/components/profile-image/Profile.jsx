import './Profile.css'

export default function Profile({name, profilePic}) {
    return (
        <div className="image">
            <img className="profile-pic" src={profilePic} alt={`${name}-pic`} />
        </div>
    )
}