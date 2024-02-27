import { PropsWithChildren } from "react";

interface Props {
  type: HTMLButtonElement["type"];
  onClick?: () => void;
}

export default function Button({
  children,
  type,
  onClick,
}: PropsWithChildren<Props>) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}
