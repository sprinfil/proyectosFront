
/*
  "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 335,
        "links": [
            {
                "url": "http:\/\/localhost:8000\/api\/lecturaPaginacion?page=2",
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "path": "http:\/\/localhost:8000\/api\/lecturaPaginacion",
        "per_page": 10,
        "to": 10,
        "total": 3342
    }
*/

export const createAdapterMeta = (endpointResponse) => {
  console.log(endpointResponse)
  if (endpointResponse?.meta != null) {
    return endpointResponse?.meta;
  } else {
    return {
      current_page: endpointResponse?.current_page,
      from: endpointResponse?.from,
      last_page: endpointResponse?.last_page,
      links: endpointResponse?.links,
      per_page: endpointResponse?.per_page,
      to: endpointResponse?.to,
      total: endpointResponse?.total,
    }
  }
}
