import {
  SET_CONTRACTOR_TENDERS,
  SET_IS_LOADED,
  SET_MY_REPLIES,
  SET_USER,
  TOGGLE_IS_SUCCESS
} from "@redux/actionTypes";
import {
  cancelTenderAPI,
  createTenderAPI,
  getAllTenderRequestsAPI,
  getContractorAPI,
  getContractorTendersAPI,
  retenderAPI,
  startTenderAPI,
} from "@services";
import {Tender, TenderRequest, User} from "@app/types";
import { SetAccountTenders, SetIsLoaded, SetMyRepliesList, SetUser, ToggleIsSuccess } from "@redux/types";

export const setAccountTenders = (contractorTenders: Array<Tender> | null): SetAccountTenders => ({
  type: SET_CONTRACTOR_TENDERS,
  contractorTenders
})
export const setMyRepliesList = (allRequests: Array<TenderRequest> | null): SetMyRepliesList => ({
  type: SET_MY_REPLIES,
  allRequests
})
export const setUser = (user: User | null): SetUser => ({type: SET_USER, user})
export const toggleIsSuccess = (isSuccess: boolean): ToggleIsSuccess => ({type: TOGGLE_IS_SUCCESS, isSuccess})
export const setIsLoaded = (isLoaded: boolean): SetIsLoaded => ({type: SET_IS_LOADED, isLoaded})

export const getAccountTenders = (contractorId: number) => (dispatch: any) => {
  getContractorTendersAPI(contractorId)
    .then((tenders: Array<Tender>) => {
      dispatch(setAccountTenders(tenders))
      dispatch(setIsLoaded(true))
    })
}
export const createTender = (name: string, budget: number, description: string, contractorId: number) => (dispatch: any) => {
  createTenderAPI(name, budget, description, contractorId)
    .then((res: any) => {
      if (res.status === 200) {
        dispatch(toggleIsSuccess(true))
      }
    })
}
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
export const getMyRepliesList = (userId: number) => async (dispatch: any) => {
  const user = await getContractorAPI(userId)
  dispatch(setUser(user))

  const res = await getAllTenderRequestsAPI()
  dispatch(setMyRepliesList(res))
}