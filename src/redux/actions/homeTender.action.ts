import {SET_HOME_TENDER, SET_TENDER_OWNER} from "@redux/actionTypes";
import {AccountPageActions} from "@redux/actions/index";
import {getContractorAPI, getTenderAPI, requestTenderAPI} from "@services";
import {Tender, User} from "@app/types";
import { SetHomeTender, SetTenderOwner } from "@redux/types";

export const setHomeTender = (tender: Tender): SetHomeTender => ({type: SET_HOME_TENDER, tender})
export const setTenderOwner = (tenderOwner: User): SetTenderOwner => ({type: SET_TENDER_OWNER, tenderOwner})

export const getHomeTender = (tenderId: number) => (dispatch: any) => {
    getTenderAPI(tenderId)
        .then((tender: Tender) => {
            dispatch(setHomeTender(tender))
        })
}
export const replyOnTender = (userId: number, tenderId: number, message: string) => async (dispatch: any) => {
    const res = await requestTenderAPI(userId, tenderId, message)

    if (res.status === 200) {
        dispatch(AccountPageActions.toggleIsSuccess(true))
    }
}
export const getTenderOwner = (tenderOwnerId: number) => (dispatch: any) => {
    getContractorAPI(tenderOwnerId)
      .then((tenderOwner: User) => {
          dispatch(setTenderOwner(tenderOwner))
      })
}