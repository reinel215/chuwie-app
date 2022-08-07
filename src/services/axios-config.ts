import { ApiService } from "./ApiService";

const baseDomain : any = process.env.REACT_APP_LOCAL_API_URL;

const connectionConfig = {
  baseUrl: baseDomain,
  headers: {
    "Content-Type": "application/json",
  },
};

export const apiConnector = new ApiService(connectionConfig);