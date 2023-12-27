import { ReactNode } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className={styles.headerContainer}>
        <div className={styles.headerLeftContainer}>
          <div className={styles.logoImageContainer}>
            <Image
              fill
              alt="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
            />
          </div>
        </div>
        <div className={styles.headerCenterContainer}>
          <input placeholder="Search" />
          <button>Search</button>
        </div>
        <div className={styles.headerRightContainer}>
          <button>+</button>
          <button>L</button>
          <button>P</button>
          <div className={styles.avatarImageContainer}>
            <Image fill alt="logo" src="/avatar.png" objectFit="cover" />
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
