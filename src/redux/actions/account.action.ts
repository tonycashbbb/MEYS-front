import {Dispatch} from "redux";

import * as ActionTypes from "@redux/actionTypes";
import {
  cancelTenderAPI,
  createTenderAPI,
  getAllTenderRequestsAPI,
  getUserAPI,
  getAccountTendersAPI,
  retenderAPI,
  startTenderAPI,
} from "@services";
import {AppActions} from "@redux/actions"
import {Tender, TenderRequest, User} from "@app/types";
import {Nullable, SetAccountTenders, SetIsLoaded, SetMyRepliesList, SetUser, ToggleIsSuccess} from "@redux/types";

type Action = SetAccountTenders | SetMyRepliesList | SetUser | SetIsLoaded | ToggleIsSuccess

export const setAccountTenders = (contractorTenders: Nullable<Array<Tender>>) => ({
  type: ActionTypes.SET_CONTRACTOR_TENDERS,
  contractorTenders
} as const)
export const setMyRepliesList = (allRequests: Nullable<Array<TenderRequest>>) => ({
  type: ActionTypes.SET_MY_REPLIES,
  allRequests
} as const)
export const setUser = (user: Nullable<User>) => ({type: ActionTypes.SET_USER, user} as const)
export const setIsLoaded = (isLoaded: boolean) => ({type: ActionTypes.SET_IS_LOADED, isLoaded} as const)

export const getAccountTenders = (contractorId: number) => (dispatch: Dispatch<Action>) => {
  getAccountTendersAPI(contractorId)
    .then((tenders: Array<Tender>) => {
      dispatch(setAccountTenders(tenders))
      dispatch(setIsLoaded(true))
    })
}
export const createTender = (
  name: string,
  budget: number,
  description: string,
  contractorId: number
) => (dispatch: Dispatch<Action>) => {
  createTenderAPI(name, budget, description, contractorId)
    .then((res: any) => {
      if (res.status === 200) {
        dispatch(AppActions.toggleIsSuccess(true))
      }
    })
}
// dispatch of thunk
export const startTender = (tenderId: number, contractorId: number) => async (dispatch: any) => {
  await startTenderAPI(tenderId)
  dispatch(getAccountTenders(contractorId))
}
export const cancelTender = (tenderId: number, contractorId: number) => async (dispatch: any) => {
  await cancelTenderAPI(tenderId)
  dispatch(getAccountTenders(contractorId))
}
export const retender = (tenderId: number, contractorId: number) => async (dispatch: any) => {
  await retenderAPI(tenderId)
  dispatch(getAccountTenders(contractorId))
}
export const getMyRepliesList = (userId: number) => async (dispatch: Dispatch<Action>) => {
  const user = await getUserAPI(userId)
  dispatch(setUser(user))

  const res = await getAllTenderRequestsAPI()
  dispatch(setMyRepliesList(res))
}