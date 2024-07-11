import {
  clerkMiddleware,
  createRouteMatcher
} from '@clerk/nextjs/server';
// if user not logged in it will redirect to the signin page 
const isProtectedRoute = createRouteMatcher([
  // routes that will not approach without signin defined here 
  '/userinfo(.*)',
  
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};