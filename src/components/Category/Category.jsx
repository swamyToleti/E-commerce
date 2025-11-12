"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Category.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "./image.png";
import whisky from "./whisky.png";
import rum from "./rum.png";
import vodka from "./vodka.png";
import wine from "./wine.png";

export default function Category() {
  const itemRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      const baseAnim = {
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        stagger: {
          amount: 1,
          from: "start",
          ease: "power2.inOut",
        },
      };

      mm.add("(min-width: 1025px)", () => {
        gsap.from("li", { x: 200, duration: 1, ...baseAnim });
      });

      mm.add("(max-width: 1024px) and (min-width: 701px)", () => {
        gsap.from("li", { y: 150, duration: 1, ...baseAnim });
      });

      mm.add("(max-width: 700px)", () => {
        gsap.from("li", { y: 70, duration: 0.8, ...baseAnim });
      });

      return () => mm.revert();
    }, itemRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.btn} ref={itemRef}>
        <ul>
          <li>
            <Link href="/products?group=1" className={styles.link}>
              <Image src={whisky} alt="WHISKY" />
            </Link>
          </li>
          <li>
            <Link href="/products?group=2" className={styles.link}>
              <Image src={wine} alt="WINE" />
            </Link>
          </li>
          <li>
            <Link href="/products?group=3" className={styles.link}>
              <Image src={logo} alt="BEER" />
            </Link>
          </li>
          <li>
            <Link href="/products?group=4" className={styles.link}>
              <Image src={vodka} alt="VODKA" />
            </Link>
          </li>
          <li>
            <Link href="/products?group=5" className={styles.link}>
              <Image src={rum} alt="RUM" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
