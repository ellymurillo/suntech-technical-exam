import { cloneDeep } from "lodash"
import { StoreState } from "pinia"

export default function resetStore({store}: StoreState<any>) {
  const initialState = cloneDeep(store.$state)
  store.$reset = () => store.$patch(cloneDeep(initialState))
}