interface Page {
  current: number
  total: number
  size: number
}

interface Response {
  code: number
  msg: string
}

interface ListResponse<T> extends Response {
  list: Array<T>
  page: Page
}

interface DataResponse<T> extends Response {
  data: T
}