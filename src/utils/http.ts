declare const window: Window & { browserFinger: string }
// 请求服务器
export const request = async function (path: string, data: any, method = 'POST', headers = {}, isReuqestAliyun = false) {
  const url = `/api/${path}`
  const options: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
      'x-bf': window.browserFinger,
    },
    method,
    credentials: 'include',
    body: JSON.stringify(data),
  }

  if (method === 'GET')
    delete options.body

  const result = await fetch(url, options)
  return await result.json()
}

// 请求国内服务器
export const requestAliyun = async function (path: string, data?: any, method = 'POST', headers = {}) {
  return request(path, data, method, headers, true)
}
