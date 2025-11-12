import React from "react";
import Image from "next/image";
import styles from "./Nav.module.css";
import Link from "next/link";
import logo from "./logo.jpg";

export default function Nav(){
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="/"><Image src={logo} /></Link>
            </div>
            <div className={styles.content}>
                <input type="text" placeholder="search" />
                <ul>
                    <li><Link href="/more" className={styles.mylink}>More</Link></li>
                    <li><Link href="/Cart" className={styles.mylink}>Cart</Link></li>
                    <button>Log in</button>
                </ul>
            </div>

        </div>
    )
}