export interface ApiPaginationMeta {
  current_page: number
  from: number
  last_page: number
  links: [
    {
      active: boolean
      label: string
      url: string
    }
  ]
  path: string
  per_page: string
  to: number
  total: number
}
