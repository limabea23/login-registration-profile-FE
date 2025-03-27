"use client";

import styles from "../profile/Profile.module.css";

export default function Profile() {
    return (
        <div className={styles.container}>
        <div className={styles.box}>
        <div className={styles.profileHeader}>
            <img src="/beasprofilepic.jpg" alt="Profile Photo" />
            <h1>@limabea23</h1>
            <p>do you know who you are?</p>
        </div>

        <div className={styles.profileDetails}>
            <div className={styles.profileInfo}>
                <h1>About Me</h1>
                <p><strong>Name:</strong> Beatriz</p>
                <p><strong>Class:</strong> 2TDS3</p>
                <p><strong>Course:</strong> Técnico em Desenvolvimento de Sistemas</p>
            </div>

            <div className={styles.profileInfo}>
                <h1>Interests</h1>
                <p><strong>Hobbies:</strong> Music, Reading, Photography, Learning Languages</p>
                <p><strong>Music:</strong> Fix You by Coldplay</p>
                <p><strong>Movies:</strong> Five Feet Apart and Coco</p>
                <p><strong>TV Shows:</strong> Outer Banks</p>
                <p><strong>Course:</strong>Técnico em Desenvolvimento de Sistemas</p>
            </div>

            <div className={styles.profileInfo}>
                <h1>Tech & Language</h1>
                
                <div className={styles.icon}>
                <img src="/html-logo.png" alt="HTML" />
                </div>
                <div className={styles.icon}>
                <img src="/css-logo.png" alt="CSS" />
                </div>
                <div className={styles.icon}>
                <img src="/js-logo.png" alt="JavaScript" />
                </div>
                <div className={styles.icon}>
                <img src="/react.js-logo.png" alt="React.js" />
                </div>
                <div className={styles.icon}>
                <img src="/next.js-logo.png" alt="Next.js" />
                </div>
                <div className={styles.icon}>
                <img src="/node.js-logo.png" alt="Node.js" />
                </div>
                <div className={styles.icon}>
                <img src="/postgresql-logo.png" alt="PostgreSQL" />
                </div>
                <div className={styles.icon}>
                <img src="/github-logo.png" alt="GitHub" />
                </div>
                <div className={styles.icon}>
                <img src="/postman-logo.png" alt="Postman" />
                </div>
                <div className={styles.icon}>
                <img src="/vscode-logo.png" alt="VSCode" />
                </div>
            </div>
        </div>
        </div>
    </div>
    );
}