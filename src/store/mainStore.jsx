import { create } from "zustand";

const mainStore = create((set, get) => ({
  items: [],
  setItems: (newItems) => set(() => ({ items: newItems })),

  getAllTypes: () => {
    const items = get().items;
    const allTypes = items.reduce((acc, item) => {
      item.types.forEach((type) => {
        if (!acc.includes(type)) {
          acc.push(type);
        }
      });
      return acc;
    }, []);
    return allTypes;
  },

  getAllFamilies: () => {
    const items = get().items;
    const allFamilies = items.reduce((acc, item) => {
      if (item.family && !acc.includes(item.family)) {
        acc.push(item.family);
      }
      return acc;
    }, []);
    return allFamilies;
  },
}));

export default mainStore;
