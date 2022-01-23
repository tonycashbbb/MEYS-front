import instance from "./instance.service";

export const getTendersAPI = (search = '') => {
  const request = !search.length
    ? () => instance.get(`tenders/getTendersByStatus?tenderStatus=ONGOING`)
    : () => instance.get(`tenders/getTendersByStatusAndName?tenderStatus=ONGOING&name=${search}`)

  return request()
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
