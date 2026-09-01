import { create } from 'zustand'

export const useBoardStore = create ((set)=>({
    board: '',
    setBoard: (board) => set({board}),
    // raw `board` URL query value, kept so it can be re-appended to links after navigation
    boardQuery: '',
    setBoardQuery: (boardQuery) => set({boardQuery}),
}))