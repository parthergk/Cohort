// recoil/counterRecoil.js
import { atom, selector } from "recoil";

export const counterRecoil = atom({
  key: "count",
  default: {
    inc: 0,
    dec: 0,
  },
});

export const incSelector = selector({
  key: "incSelector",
  get: ({ get }) => {
    const state = get(counterRecoil);
    return state.inc;
  },
});

export const decSelector = selector({
  key: "decSelector",
  get: ({ get }) => {
    const state = get(counterRecoil);
    return state.dec;
  },
});
