"use client";

import { useCallback, useEffect, useState } from "react";

export interface UseDisclosureProps {
  defaultIsOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export const useDisclosure = (props: UseDisclosureProps = {}) => {
  const { defaultIsOpen = false, onOpen: onOpenProp, onClose: onCloseProp } = props;
  const [isOpen, setIsOpen] = useState<boolean>(defaultIsOpen);

  const open = useCallback(() => {
    setIsOpen(true);
    onOpenProp?.();
  }, [onOpenProp]);

  const close = useCallback(() => {
    setIsOpen(false);
    onCloseProp?.();
  }, [onCloseProp]);

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) onOpenProp?.();
      else onCloseProp?.();
      return next;
    });
  }, [onOpenProp, onCloseProp]);

  // Lock body scroll and register ESC key when open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close]);

  return {
    isOpen,
    open,
    close,
    toggle,
    setIsOpen,
  };
};
