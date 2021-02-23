import style from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={style.profileContainer}>
            <img src="https://github.com/lfreire80.png" alt="Leonardo Freire" />
            <div>
                <strong>Leonardo Freire</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}