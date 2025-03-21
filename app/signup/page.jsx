"use client";

import styles from "../signup/Signup.module.css";
import { useState } from "react";

export default function Signup() {
    const [input1, setInput1] = useState(""); 
    const [input2, setInput2] = useState(""); 
    const [match, setMatch] = useState(null);

    const handleCheck = () => {
        setMatch(input1 === input2 && input1 !== "");
    };

    return (
        <div className={styles.container}>
            <div className={styles.input}>
                <h1>You’re almost there! 🌟💋🤠</h1>
                <p>Just a few details to join.</p>
                <input type="name" placeholder="👤 full name" />
                <input type="email" placeholder="💌 email"/>
                <input type="password" placeholder="🔒 password" value={input1} onChange={(e) => setInput1(e.target.value)} />
                <input type="password" placeholder="🔒 password again" value={input2} onChange={(e) => setInput2(e.target.value)} />
                <button className={styles.button} onClick={handleCheck}>SIGN UP</button>
                {match !== null && <p>{match? "The passwords match. All good!" : "Oops! The passwords don't match. Please try again!"}</p>}
                <p className={styles.link}>Already have an account? <a href="/signin"> Sign in</a> and jump right in!</p>
            </div>
        </div>
    );
}