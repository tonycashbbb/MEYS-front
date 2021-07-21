export type Tender = {
  id: number
  name: number
  status: string
  budget: number
  contractorId: number
  createdDate: string
  description: string
}

export type User = {
  id: number
  name: string
  password: string
  email: string
  city: string
  companyName: string
  industry: string
  nip: string
  region: string
}

export type TenderRequest = {
  id: number
  status: string
  userId: number
  tenderId: number
  message: string
  createDate: null
}