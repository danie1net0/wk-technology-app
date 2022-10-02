import { ApiPaginationMeta } from './api-pagination-meta';
import { ApiPaginationLinks } from './api-pagination-links';

export interface ApiPaginatedResponse<T> {
  data: T[]
  links: ApiPaginationLinks
  meta: ApiPaginationMeta
}
