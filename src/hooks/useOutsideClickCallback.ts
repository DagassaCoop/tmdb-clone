import { RefObject, useEffect } from "react";

export const useOutsideClickCallback = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: RefObject<any>,
  callback: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};
