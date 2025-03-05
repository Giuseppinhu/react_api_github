import styles from './profile.module.css'

const Profile = ({user}) => {
    return (
        <div className={styles.headerProfile}>
            <img className={styles.img}src={`https://github.com/${user}.png`} alt="Foto do Avatar" />
            <h3 className={styles.username}>@{user}</h3>
        </div>
    )
}


export default Profile