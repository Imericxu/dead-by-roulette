import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import killerIcon from "../public/images/killer-icon.png";
import survivorIcon from "../public/images/survivor-icon.png";
import styles from "../styles/Home.module.css";

interface RoleButtonProps {
  imgSrc: string | StaticImageData;
  altText: string;
  text: string;
}

function RoleButton({ imgSrc, altText, text }: RoleButtonProps): JSX.Element {
  return (
    <div className={`primary-surface z-depth-2dp ${styles.roleButton}`}>
      <Image
        className={styles.roleButton__image}
        src={imgSrc}
        alt={altText}
        width={200}
        priority
      />
      <p className={styles.roleButton__text}>{text}</p>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Dead by Roulette</title>
        <meta name="description" content="Dead by Daylight randomizer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.page}>
        <div className={styles.contentWrapper}>
          <h1>Dead by Roulette</h1>

          <section className={styles.roleButtonsWrapper}>
            <Link href="">
              <RoleButton
                imgSrc={survivorIcon}
                altText="Survivor Icon"
                text="Survivor"
              />
            </Link>
            <Link href="">
              <RoleButton
                imgSrc={killerIcon}
                altText="Killer Icon"
                text="Killer"
              />
            </Link>
          </section>

          <button className={`${styles.pickOneButton}`} type="button">
            Pick one for me!
          </button>
        </div>

        <div style={{ flexGrow: 1 }}></div>
      </main>
    </>
  );
}
