export interface Students {
  data: StudentsData[]
  meta: Meta
}

export interface StudentsData {
  id: number
  attributes: Attributes
}

export interface Attributes {
  isu: number
  full_name: string
  education: string
  positions: string
  powers: string
  createdAt: null
  updatedAt: Date
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
