import { ChangeEventHandler } from "react";

import Color from "../utils/colors";

interface ToggleProps {
  label?: string;
  isChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function Toggle({
  label,
  isChecked = true,
  onChange,
}: ToggleProps): JSX.Element {
  return (
    <>
      <label style={{ display: "flex", alignItems: "center" }}>
        {label}
        <div style={{ display: "inline-block", width: 5 }}></div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          style={{ accentColor: Color.primary }}
        />
      </label>
    </>
  );
}
