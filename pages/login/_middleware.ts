import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

import { auth } from '../../src/clients/Firebase';

export function middleware(req: NextRequest, _ev: NextFetchEvent) {
  const currentUser = auth;

  if (currentUser) {
    const url = req.nextUrl.clone();
    url.pathname = '/profile';

    return NextResponse.redirect(url);
  }
}
