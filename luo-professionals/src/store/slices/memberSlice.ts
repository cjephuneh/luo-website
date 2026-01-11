import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Member {
  id: string
  name: string
  profession: string
  sector: string
  county: string
  email: string
}

interface MemberState {
  members: Member[]
  totalMembers: number
  loading: boolean
}

const initialState: MemberState = {
  members: [],
  totalMembers: 0,
  loading: false,
}

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setMembers: (state, action: PayloadAction<Member[]>) => {
      state.members = action.payload
    },
    setTotalMembers: (state, action: PayloadAction<number>) => {
      state.totalMembers = action.payload
    },
  },
})

export const { setMembers, setTotalMembers } = memberSlice.actions
export default memberSlice.reducer
