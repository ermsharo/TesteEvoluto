import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { generateNewID } from "../utils/userListUtils";
import { addNewUser } from "./../redux/features/user/userSlice";





export const RequestUsers = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<boolean | String>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const sendUser = (item:any, index:number)=> {
    // console.log("Usuario saido da api", item)
     const userDefaultObj = {
         id: generateNewID(),
         username: `${item.name}`,
         email: `${item.email}`,
         status: true,
       };
       dispatch(addNewUser(userDefaultObj));

  }
  
  const runUserData = (data: any) =>{
    console.log("user data",data)
  data.forEach(sendUser);
  }
  


  const fetchData = async (): Promise<void> => {
    
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get<any>(
        `https://jsonplaceholder.typicode.com/users`
      );
      setData(response.data);
      runUserData(response.data);
  

    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error with Message: " + error.message);
        setError(true);
        console.error("Não foi possível requisitar os usuarios mockados");
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, error, loading] as const;
};
