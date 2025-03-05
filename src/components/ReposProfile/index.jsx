import { useEffect, useState } from "react";

import styles from './ReposProfile.module.css'

const Repos = ({ user }) => {
    const [repos, setRepos] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.github.com/users/${user}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setRepos(resJson)
            }, [user])
    })

    return (
        <div className="container">
            <ul className={styles.list}>
            {
                repos.map(({ id, name, language, html_url }) => (
                    <li className={styles.listItem} key={id}>
                        <div className={styles.ItemName}>
                            <b>Nome:</b>
                            {name}
                        </div>
                        <div className={styles.ItemLanguage}>
                            <b>Language:</b>
                            {language}
                        </div>
                        <a className={styles.ItemRef} target="_blank" href={html_url}>Visit Repositorio</a>
                    </li>
                ))
            }
        </ul>
        </div>
    )
}

export default Repos