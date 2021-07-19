import {
  APP_INITIALIZED_SUCCESS,
  SET_ACCOUNT_TENDER,
  SET_CONTRACTOR_TENDERS, SET_CURRENT_PAGE, SET_HOME_TENDER,
  SET_IS_LOADED,
  SET_MY_REPLIES, SET_TENDER_CREATOR, SET_TENDER_OWNER, SET_TENDER_REQUESTS, SET_TENDERS, SET_TOTAL_COUNT,
  SET_USER, SET_USER_DATA, TOGGLE_IS_AUTH, TOGGLE_IS_LOADED,
  TOGGLE_IS_SUCCESS
} from "@redux/actionTypes";
import {Tender, TenderRequest, User} from "@app/types";

// here are types for actions

// accountPage
export type SetAccountTenders = {
  type: typeof SET_CONTRACTOR_TENDERS
  contractorTenders: Array<Tender>
}
export type SetMyRepliesList = {
  type: typeof SET_MY_REPLIES
  allRequests: Array<TenderRequest>
}
export type SetUser = {
  type: typeof SET_USER
  user: User
}
export type ToggleIsSuccess = {
  type: typeof TOGGLE_IS_SUCCESS
  isSuccess: boolean
}
export type SetIsLoaded = {
  type: typeof SET_IS_LOADED
  isLoaded: boolean
}

// accountTender
export type SetAccountTender = {
  type: typeof SET_ACCOUNT_TENDER
  tender: Tender
}
export type SetTenderRequests = {
  type: typeof SET_TENDER_REQUESTS
  tenderRequests: Array<TenderRequest>
}
export type SetTenderCreator = {
  type: typeof SET_TENDER_CREATOR
  tenderCreator: User
}

// app
export type InitializeAppSuccess = {
  type: typeof APP_INITIALIZED_SUCCESS
}

// auth
export type SetUserData = {
  type: typeof SET_USER_DATA,
  userData: User | null
}
export type ToggleIsAuth = {
  type: typeof TOGGLE_IS_AUTH,
  isAuth: boolean
}

// homePage
export type SetTenders = {
  type: typeof SET_TENDERS,
  tenders: Array<Tender>
}
export type SetTotalCount = {
  type: typeof SET_TOTAL_COUNT,
  totalCount: number
}
export type SetCurrentPage = {
  type: typeof SET_CURRENT_PAGE,
  pageNum: number
}
export type ToggleIsLoaded = {
  type: typeof TOGGLE_IS_LOADED,
  isLoaded: boolean
}

// homeTender
export type SetHomeTender = {
  type: typeof SET_HOME_TENDER,
  tender: Tender
}
export type SetTenderOwner = {
  type: typeof SET_TENDER_OWNER,
  tenderOwner: User
}