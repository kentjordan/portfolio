import { create } from "zustand";

const useNavbarStore = create((set) => {
  return {
    isMobileNavMenuOpened: false,
    toggleMobileNavMenu: () => {
      return set((state: any) => {
        return { isMobileNavMenuOpened: !state.isMobileNavMenuOpened };
      });
    },
  };
});

export { useNavbarStore };
