import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Stats {
  totalMembers: number
  activeProjects: number
  fundsRaised: number
  investmentsMobilized: number
}

interface StatsState extends Stats {
  loading: boolean
}

const initialState: StatsState = {
  totalMembers: 0,
  activeProjects: 0,
  fundsRaised: 0,
  investmentsMobilized: 0,
  loading: false,
}

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    setStats: (state, action: PayloadAction<Stats>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { setStats } = statsSlice.actions
export default statsSlice.reducer
