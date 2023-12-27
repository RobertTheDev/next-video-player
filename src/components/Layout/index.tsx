import { ReactNode, useEffect, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { FaSearch, FaPlus, FaHeart, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function Layout({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
          <button>
            <FaSearch />
          </button>
        </div>
        <div className={styles.headerRightContainer}>
          <button
            onClick={() => {
              if (theme === "dark") {
                setTheme("light");
              } else {
                setTheme("dark");
              }
            }}
          >
            {theme === "dark" ? <FaMoon /> : <FaSun />}
          </button>
          <button>
            <FaPlus />
          </button>
          <button>
            <FaHeart />
          </button>

          <div className={styles.avatarImageContainer}>
            <Image fill alt="logo" src="/avatar.png" objectFit="cover" />
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
