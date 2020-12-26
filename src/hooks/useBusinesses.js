import { useState, useEffect } from "react";
import yelp from '../api/yelp';

// extracted hook logic from this vid: https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15707158#notes
export default () => {
  const [businesses, setBusinesses] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "santa ana",
        },
      });
      console.log("response.data.businesses", response.data.businesses);
      setBusinesses(response.data.businesses);
    } catch (err) {
      console.log("ERR! => ", err);
      setErrMsg("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  console.log('errmsg ', errMsg);
  return [searchApi, businesses, errMsg];
};