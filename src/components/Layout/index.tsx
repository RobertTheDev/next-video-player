import { ReactNode, useEffect, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { FaSearch, FaPlus, FaHeart, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useTheme();

  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.pageContainer}>
      <header className={styles.headerContainer}>
        <div className={styles.headerLeftContainer}>
          <Link href={"/"} className={styles.logoImageContainer}>
            <Image
              fill
              alt="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
            />
          </Link>
        </div>
        <div className={styles.headerCenterContainer}>
          <div className={styles.searchContainer}>
            <input
              className={styles.searchInput}
              placeholder="Search"
              onChange={(e) => {
                setSearchQuery(e.currentTarget.value);
              }}
            />
            <button
              className={styles.searchButton}
              onClick={() => {
                router.push(`/results?q=${searchQuery}`);
              }}
            >
              <FaSearch />
            </button>
          </div>
        </div>
        <div className={styles.headerRightContainer}>
          <button
            className={styles.headerControlButton}
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
          <button
            className={styles.headerControlButton}
            onClick={() => {
              router.push("/upload-video");
            }}
          >
            <FaPlus />
          </button>
          <button
            className={styles.headerControlButton}
            onClick={() => {
              router.push("/saved");
            }}
          >
            <FaHeart />
          </button>

          <button
            className={styles.avatarImageContainer}
            onClick={() => {
              router.push("/channel/1");
            }}
          >
            <Image fill alt="logo" src="/avatar.png" objectFit="cover" />
          </button>
        </div>
      </header>
      <div className={styles.pageContentContainer}>
        <main>{children}</main>
      </div>
    </div>
  );
}
