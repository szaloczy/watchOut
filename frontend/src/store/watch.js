import { create } from "zustand";

export const useWatchStore = create((set) => ({
    watches: [],
    setWatches: (watches) => set({ watches }),
    createWatch: async (newWatch) => {
        if (!newWatch.name || !newWatch.price || !newWatch.image) {
            return {success: false, msg: "Please fill in all fields"}
        }
        const res = await fetch("/api/watches", {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(newWatch),
        });
        const data = await res.json();
        set((state) => ({ watches: [...state.watches, data.data ]}));
        return {success: true, msg:"Watch created successfully"};
    },
}));

