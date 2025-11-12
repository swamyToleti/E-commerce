'use client' ;
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";
import { IM_Fell_English_SC, Marck_Script } from 'next/font/google';
import logo from "./image.png";



const iM_Fell_English_SC = IM_Fell_English_SC({subsets: ['latin'], weight: ['400',],});
const marck_Script = Marck_Script({ subsets: ['latin'], weight: ['400',],});



export default function Hero (){
    return(
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>CHOOSE YOUR WHISKY</h1>
                <h2>& Enjoy the Experience</h2>
            </div>
            <div className={styles.image}>
                <Image src={logo} />
            </div>
        </div>
    )
}