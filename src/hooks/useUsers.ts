import { useEffect, useState } from "react";
import userService, { User } from "../services/userService";
import { CanceledError } from "../services/api-client";

 const useUsers = () => {
    
  const [user, setUser] = useState<User[]>([]);

  const [error, setError] = useState("");

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAll<User>();
    request
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    // setLoading(false);

    return () => cancel();
  }, []);

  return {user, error, isLoading, setUser, setError}
 }

 export default useUsers; 