import { useContext } from "react";
import { AppContext } from "../store/store";

const useAuth = () => {
  return useContext(AppContext);
};

export default useAuth;
