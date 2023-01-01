import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { faDice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Toggle from "../../components/Toggle";
import bbqAndChilliImage from "../../public/images/perks/barbeque-and-chilli.png";
import vittorioImage from "../../public/images/survivors/vitorrio-big.webp";
import styles from "../../styles/roulette/Survivor.module.scss";
import { Shape } from "../../utils/models";

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

      <div style={{ height: 30 }}></div>

      <div className={styles.loadoutGroup}></div>
    </main>
  );
}
