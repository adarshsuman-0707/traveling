const BASE_URL = "http://localhost:5000/api";

export const endpoint = {
  LOGIN: `${BASE_URL}/auth/login`, // Use template literals for cleaner syntax
  SIGN_UP: `${BASE_URL}/auth/signup`,
  B2B_SIGN_UP: `${BASE_URL}/auth/B2Bsignup`,

};
