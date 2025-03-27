"use client";

import styles from "../signin/Signin.module.css";

export default function Signin() {
    return (
        <div className={styles.container}>
            <div className={styles.input}>
            <h1>Welcome back! 🌟💋🤠</h1>
            <p>Enter your details below.</p>
                    <input type="email" placeholder="💌 email" />
                    <input type="password" placeholder="🔒 password" />
                    <button className={styles.button}><a href="/profile">SIGN IN</a></button>
                    <p className={styles.link}>New here? No worries, <a href="/signup"> sign up</a> and let’s get you started!</p>
            </div>
        </div>
    );
}