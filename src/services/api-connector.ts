import { ApiService } from "./ApiService";
import env from '../../env.json';

const baseDomain : any = env.baseUrl;

const connectionConfig = {
  baseUrl: baseDomain,
  headers: {
    "Content-Type": "application/json",
  },
};

export const apiConnector = new ApiService(connectionConfig);