import instance from "./instance.service";
import {Tender, TenderRequest} from "@app/types";

export const getAccountTendersAPI = (contractorId: number) => {
  return instance
    .get<Array<Tender>>(`tenders/tendersByContractorId?contractorId=${contractorId}`)
    .then(res => res.data)
}

export const createTenderAPI = (
  name: string,
  budget: number,
  description: string,
  contractorId: number
) => {
  return instance
    .post<Tender>(`tenders`, {name, budget, description, contractorId})
}

export const startTenderAPI = (tenderId: number) => {
  return instance
    .put<Tender>(`tenders/startRegistration?tenderId=${tenderId}`)
}

export const cancelTenderAPI = (tenderId: number) => {
  return instance
    .put<Tender>(`tenders/cancelTender?tenderId=${tenderId}`)
}

export const retenderAPI = (tenderId: number) => {
  return instance
    .post<Tender>(`tenders/retender?tenderId=${tenderId}`)
}

export const getTenderRequestsAPI = (tenderId: number) => {
  return instance
    .get<Array<TenderRequest>>(`tenderRequest/allTenderRequestsForTender?tenderId=${tenderId}`)
    .then(res => res.data)
}

export const acceptTenderRequestAPI = (tenderRequestId: number) => {
  return instance
    .put<TenderRequest>(`tenderRequest?tenderRequestId=${tenderRequestId}`)
}

export const updateTenderAPI = (tenderData: Tender) => {
  return instance
    .put<Tender>(`tenders`, tenderData)
}

export const getAllTenderRequestsAPI = () => {
  return instance
    .get<Array<TenderRequest>>(`/tenderRequest/all`)
    .then(res => res.data)
}
