import instance from "./instance.service";
import {Tender, TenderRequest, User} from "@app/types";

export const getTendersAPI = () => {
  return instance
    .get<Array<Tender>>(`tenders/getTendersByStatus?tenderStatus=ONGOING`)
}

export const getTenderAPI = (tenderId: number) => {
  return instance
    .get<Tender>(`tenders?tenderId=${tenderId}`)
    .then(res => res.data)
}

export const getUserAPI = (contractorId: number) => {
  return instance
    .get<User>(`/contractors?contractorId=${contractorId}`)
    .then(res => res.data)
}

export const requestTenderAPI = (
  userId: number,
  tenderId: number,
  message: string
) => {
  return instance
    .post<TenderRequest>(`/tenderRequest`, {userId, tenderId, message})
}
