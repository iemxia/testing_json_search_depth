import { Cookie, CookieJar } from 'tough-cookie'
// import the tough cookie package

// parse a `Cookie` request header
const reqCookies = 'ID=298zf09hf012fh2; csrf=u32t4o3tb3gg43; _gat=1'.split(';').map(Cookie.parse)
// generate a `Cookie` request header
const cookieHeader = reqCookies.map(cookie => cookie.cookieString()).join(';')

// parse a Set-Cookie response header
const resCookie = Cookie.parse('foo=bar; Domain=example.com; Path=/; Expires=Tue, 21 Oct 2025 00:00:00 GMT')
// generate a Set-Cookie response header
const setCookieHeader = cookie.toString()

// store and retrieve cookies
const cookieJar = new CookieJar() // uses the in-memory store by default