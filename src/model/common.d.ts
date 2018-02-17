interface Page {
  current: number
  total: number
  size: number
}

interface List<T> {
  list: Array<T>
  page: Page
}