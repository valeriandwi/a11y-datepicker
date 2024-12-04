import { create } from "zustand";

type PopoverStore = {
  show: boolean;
};

type PopoverAction = {
  setShow: (show: boolean) => void;
};

export const usePopoverStore = create<PopoverStore & PopoverAction>((set) => ({
  show: false,
  setShow: (show) => set({ show: show }),
}));
