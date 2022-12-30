import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import killerIcon from "../public/images/killer-icon.png";
import survivorIcon from "../public/images/survivor-icon.png";
import styles from "../styles/Home.module.scss";
import { ImageData } from "../utils/models";

interface RoleButtonProps {
  imgData: ImageData;
  text: string;
}

function RoleButton({ imgData, text }: RoleButtonProps): JSX.Element {
  return (
    <div className={styles.roleButton}>
      <Image
        className={styles.roleButton__image}
        src={imgData.src}
        alt={imgData.altText}
        width={200}
        priority
      />
      <p className={styles.roleButton__text}>{text}</p>
    </div>
  );
}

export default function Home(): JSX.Element {
  const router = useRouter();

  function goToRandomRole() {
    const doGoToSurvivor = Math.random() < 0.5;
    if (doGoToSurvivor) {
      router.push("/roulette/survivor");
    } else {
      router.push("/roulette/killer");
    }
  }

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
            <Link href="/roulette/survivor">
              <RoleButton
                imgData={{ src: survivorIcon, altText: "Survivor Icon" }}
                text="Survivor"
              />
            </Link>
            <Link href="/roulette/killer">
              <RoleButton
                imgData={{ src: killerIcon, altText: "Killer Icon" }}
                text="Killer"
              />
            </Link>
          </section>

          <button
            className={`${styles.randomButton}`}
            type="button"
            onClick={goToRandomRole}
          >
            Pick one for me!
          </button>
        </div>

        <div style={{ flexGrow: 1 }}></div>
      </main>
    </>
  );
}
