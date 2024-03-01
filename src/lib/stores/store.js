import { create } from 'zustand'

export const useBoardStore = create ((set)=>({
    board: 'senseBox MCU',
    setBoard: (board) => set({board}),
    
}))