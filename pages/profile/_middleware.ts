import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

import { auth } from '../../src/clients/Firebase';

export function middleware(req: NextRequest, _ev: NextFetchEvent) {
  const currentUser = auth.currentUser;

  if (!currentUser) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';

    return NextResponse.redirect(url);
  }
}
