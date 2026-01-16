import Profile from "../profile-image/Profile"
import Name from "../name/Name"
import Title from "../title/Title"
import Bio from "../bio/Bio"
import Skills from "../skills/Skills"
import Like from "../like/Like"
import Button from "../button/Button"
import SlideArrow from "../slideArrow/SlideArrow"
import ThemeSwitcher from "../themeSwitcher/theme"
import './CardLayout.css'

export default function CardLayout({profilePic, name, title, bio, skills, likeCount, contact, onPrev, onNext, total, currentIndex, isFirst, isLast,
    theme, themeSwitcher
}){
    return (
        <>
        <div className="card-layout">
            <div className="card-layout-top">
                <Profile name={name} profilePic={profilePic} />
                <div className="card-layout-top-content">
                    <Name name={name} />
                    <Title title={title} />
                </div>
            </div>
            <div className="card-layout-middle">
                <Bio bio={bio} />
                <Skills skills={skills} />
            </div>
            <div className="card-layout-bottom">
                <ThemeSwitcher theme={theme} themeSwitcher={themeSwitcher} />
                <SlideArrow
                    onPrev={onPrev}
                    onNext={onNext}
                    currentIndex={currentIndex}
                    total={total}
                    isFirst={isFirst}
                    isLast={isLast}
                />
                <Like key={currentIndex} likeCount={likeCount} />
                <Button contact={contact} />
            </div>
        </div>
        </>
    )
}