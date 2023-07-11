export { default } from "next-auth/middleware"

export const config = { 
  matcher: [
    "/travels",
    "/reservations",
    "/properties",
    "/favorites"
  ]
};
