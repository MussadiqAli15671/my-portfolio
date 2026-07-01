// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//   const country = request.geo?.country || 'UNKNOWN'

//   // Block USA
//   if (country === 'US') {
//     return new NextResponse('Access Denied', { status: 403 })
//   }

//   return NextResponse.next()
// }