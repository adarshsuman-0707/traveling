import axios from "axios";

// Create Axios instance with default configuration
export const axiosInstance = axios.create({
  withCredentials: true, // Include credentials like cookies in requests
});

// Main API connector function
export const apiConnector = async (method, url, bodyData, header, params) => {
  if (!method || !url) {
    throw new Error("Method and URL are required for the API call.");
  }

  console.log("API URL:", url, "method =>", method, "bodydata =>", bodyData);

  try {
    // Make API request with the provided configuration
    const response = await axiosInstance({
      method, // HTTP method (e.g., GET, POST)
      url,    // Endpoint URL
      data: bodyData || null, // Request body (for POST, PUT, etc.)
      headers: header || null, // Optional custom headers
      params: params || null, // Query parameters
    });

    return response.data; // Return the response data
  } catch (error) {
    console.error("Error during API call:", error);
    throw error; // Re-throw the error for further handling
  }
};
