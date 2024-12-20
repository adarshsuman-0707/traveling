import { endpoint } from "../apis"; // Assuming this contains your endpoints like /signup
import { apiConnector } from "../apiConnector";
import { setIsLoggedIn, setLoading } from "../../Redux/slices/authSlice";
import toast from "react-hot-toast";

export function SignUp(city, username, email, password, phone, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true)); // Indicate loading state

    try {
      // Use endpoint directly if it's already defined for signup
      const url = endpoint.SIGN_UP;
      console.log(url, "url is being used for SignUp");

      // Make the POST request with all necessary data
      const response = await apiConnector("POST", url, {
        city,
        username,
        email,
        password,
        phone,
      });

      if (!response.success) {
        // If API indicates failure, throw an error to handle it
        throw new Error(response.message || "Signup failed");
      }

      // Handle success
      toast.success("Signup successful");
      navigate("/login"); // Redirect user to login page
    } catch (error) {
      // Handle errors
      console.error("Error in SignUp function:", error);
      toast.error(error.message || "An error occurred during signup. Please try again.");
    } finally {
      // Cleanup loading state and dismiss loading toast
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
  }}

//   <=---------login-------------->
export async function login(email,password){
    try {
        // Make the API call to the login endpoint
        const response = await apiConnector("POST", endpoint.LOGIN, { email, password });
        
        // Assuming the response contains success or failure status and a token
        if (response.data.success) {
          return {
            success: true,
            token: response.data.token,  // Return the token on success
          };
        } else {
          return {
            success: false,
            message: response.data.message || "Invalid login credentials",  // Handle failure message
          };
        }
      } catch (error) {
        console.error("Error during login:", error);
        return {
          success: false,
          message: error.message || "An error occurred during login. Please try again.",
        };
      }
}

