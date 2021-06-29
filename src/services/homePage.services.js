import instance from "./services";

export const getTendersAPI = (currentPage, pageSize) => {
  return instance
    .get(`tenders/getTendersByStatus?tenderStatus=ONGOING`)
}

export const getTenderAPI = (tenderId) => {
  return instance
    .get(`tenders?tenderId=${tenderId}`)
    .then(res => res.data)
}

export const requestTenderAPI = (userId, tenderId, message) => {
  return instance
    .post(`/tenderRequest`, {userId, tenderId, message})
}
