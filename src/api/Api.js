import { useState, useEffect } from "react";
import axios from "axios";

// Here is the url for the API location, mine was set on localhost:3000
axios.defaults.baseURL = "http://localhost:3000";

// This custom hook is for Home.js component to get datas from the API
export const useAxios = (axiosParams) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [user, setUserInfos] = useState(undefined);
  const [activity, setActivity] = useState(undefined);
  const [sessions, setSessions] = useState(undefined);
  const [performance, setPerformance] = useState(undefined);

  const fetchData = async (params) => {
    try {
      // get & set User Infos Datas
      const result = await axios.request(params);
      setUserInfos(result.data.data);
      // get & set User Activity Datas
      const urlActivity = params.url + "/activity";
      const userActivity = await axios.request(urlActivity);
      setActivity(userActivity.data);
      // get & set User Sessions Datas
      const urlSessions = params.url + "/average-sessions";
      const userSessions = await axios.request(urlSessions);
      setSessions(userSessions.data);
      // get & set User Performance Datas
      const urlPerformance = params.url + "/performance";
      const userPerformance = await axios.request(urlPerformance);
      setPerformance(userPerformance.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, error, user, activity, sessions, performance };
};
