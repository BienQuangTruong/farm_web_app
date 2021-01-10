import { useEffect } from "react";

export default function Scroll(props) {
  useEffect(function mount() {
    function changeBackgroundMenu() {
      if (window.scrollY >= 50) {
        props.setBackgroundMenu(true);
      } else {
        props.setBackgroundMenu(false);
      }
    }
    window.addEventListener("scroll", changeBackgroundMenu);

    return function unMount() {
      window.removeEventListener("scroll", changeBackgroundMenu);
    };
  });

  return null;
}
