import { create } from 'zustand'

export const useBoardStore = create ((set)=>({
    board: '',
    setBoard: (board) => set({board}),
    
}))