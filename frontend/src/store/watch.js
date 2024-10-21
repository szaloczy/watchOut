import { create } from "zustand";

export const useWatchStore = create((set) => ({
    watches: [],
    setWatches: (watches) => set({ watches }),

    createWatch: async (newWatch) => {
        if (!newWatch.name || !newWatch.price || !newWatch.image) {
            return {success: false, msg: "Please fill fields"}
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

    fetchWatches: async () => {
        const res = await fetch("/api/watches");
        const data = await res.json();
        set({ watches: data.data });
    },
    
    deleteWatch: async (wid) => {
        const res = await fetch(`/api/watches/${wid}`, {
            method: "DELETE",
        });
        const data = await res.json();
        if(!data.success) {
            return {success: false, msg: data.msg};
        }
        set(state => ({ watches: state.watches.filter(watch => watch._id !== wid) }));
        return { success: true, msg: data.msg };
    },

    updateWatch: async(wid, updatedWatch) => {
        const res = await fetch(`/api/watches/${wid}`, {
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(updatedWatch),
        });
        const data = await res.json();
        if(!data.success){
            return { success: false, msg: data.msg};
        }
        
        set(state => ({
            watches: state.watches.map((watch) => (watch._id === wid ? data.data : watch)),
        }));

        return { success: true, msg: data.msg }
    },
}));

