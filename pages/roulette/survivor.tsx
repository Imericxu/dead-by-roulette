import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { faDice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ShapedContainer from "../../components/ShapedContainer";
import Toggle from "../../components/Toggle";
import imgSportFlashlight from "../../public/images/items/sport-flashlight.webp";
import imgEbonyMementoMori from "../../public/images/offerings/ebony-memento-mori.webp";
import imgBbqAndChilli from "../../public/images/perks/barbeque-and-chilli.png";
import imgVittorio from "../../public/images/survivors/vittorio-big.webp";
import styles from "../../styles/roulette/Survivor.module.scss";
import { Shape } from "../../utils/models";
import RandomizedImage from "../../components/RandomizedImage";

export default function Survivor(): JSX.Element {
  const router = useRouter();
  const [isCharacterEnabled, setCharacterEnabled] = useState(true);
  const [isItemEnabled, setItemEnabled] = useState(true);
  const [arePerksEnabled, setPerksEnabled] = useState(true);

  function goToRandomRole() {
    const doGoToSurvivor = Math.random() < 0.5;
    if (doGoToSurvivor) {
      // FIXME: Randomize survivor again
    } else {
      router.push("/roulette/killer");
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.titleGroup}>
        <h1>Survivor</h1>
        <p className={styles.goToText}>
          Go to{" "}
          <Link className="link-text" href="/roulette/killer">
            killer
          </Link>{" "}
          or{" "}
          <button className={styles.randomRoleButton} onClick={goToRandomRole}>
            <FontAwesomeIcon icon={faDice} />
          </button>
        </p>
      </div>

      <div className={styles.toggleGroup}>
        <Toggle
          label="Character"
          isChecked={isCharacterEnabled}
          onChange={() => setCharacterEnabled((prev) => !prev)}
        />
        <Toggle
          label="Item + Offering"
          isChecked={isItemEnabled}
          onChange={() => setItemEnabled((prev) => !prev)}
        />
        <Toggle
          label="Perks"
          isChecked={arePerksEnabled}
          onChange={() => setPerksEnabled((prev) => !prev)}
        />
      </div>

      {/* Spacer */}
      <div style={{ height: 30 }}></div>

      <div className={styles.loadoutGroup}>
        <RandomizedImage
          width={300}
          height={350}
          shape={Shape.rectangle}
          imgInfo={{ src: imgVittorio, alt: "Vittorio" }}
        />
        <RandomizedImage
          width={120}
          height={120}
          shape={Shape.rectangle}
          imgInfo={{ src: imgSportFlashlight, alt: "Sport Flashlight" }}
        />
        <RandomizedImage
          width={100}
          height={100}
          shape={Shape.diamond}
          imgInfo={{ src: imgBbqAndChilli, alt: "Barbeque and Chilli" }}
        />
        <RandomizedImage
          width={150}
          height={150}
          shape={Shape.hexagon}
          imgInfo={{ src: imgEbonyMementoMori, alt: "Ebony Memonto Mori" }}
        />
      </div>
    </main>
  );
}
