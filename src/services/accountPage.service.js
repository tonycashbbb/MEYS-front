import instance from "./instance.service";

export const getContractorAPI = (contractorId) => {
  return instance
    .get(`/contractors?contractorId=${contractorId}`)
    .then(res => res.data)
}

export const getContractorTendersAPI = (contractorId) => {
  return instance
    .get(`tenders/tendersByContractorId?contractorId=${contractorId}`)
    .then(res => res.data)
}

export const createTenderAPI = (name, budget, description, contractorId) => {
  return instance
    .post(`tenders`, {name, budget, description, contractorId})
}

export const startTenderAPI = (tenderId) => {
  return instance
    .put(`tenders/startRegistration?tenderId=${tenderId}`)
}

export const cancelTenderAPI = (tenderId) => {
  return instance
    .put(`tenders/cancelTender?tenderId=${tenderId}`)
}

export const retenderAPI = (tenderId) => {
  return instance
    .post(`tenders/retender?tenderId=${tenderId}`)
}

export const getTenderRequestsAPI = (tenderId) => {
  return instance
    .get(`tenderRequest/allTenderRequestsForTender?tenderId=${tenderId}`)
    .then(res => res.data)
}

export const acceptTenderRequestAPI = (tenderRequestId) => {
  return instance
    .put(`tenderRequest?tenderRequestId=${tenderRequestId}`)
}

export const updateTenderAPI = (tenderData) => {
  return instance
    .put(`tenders`, tenderData)
}

export const updateAccountAPI = (accountData) => {
  return instance
    .put(`/contractors`, accountData)
}

export const getAllTenderRequestsAPI = () => {
  return instance
    .get(`/tenderRequest/all`)
    .then(res => res.data)
}
