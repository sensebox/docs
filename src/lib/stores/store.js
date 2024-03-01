import { create } from 'zustand'

export const useBoardStore = create ((set)=>({
    board: 'senseBoxMCU',
    setBoard: (board) => set({board}),
    
}))