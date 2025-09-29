import { useState } from "react";
import { catchErrors } from "./../tools";
import { toast } from "sonner";

export const useApiPetition = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);

  const request = async (service: () => Promise<any>) => {
    try {
      setError("");
      setLoading(true);
      const res = await service();
      setResponse(res);
      return res;
    } catch (err) {
      catchErrors(err, toast);
      // setError((await catchErrors(err)) || "");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    response,
    request,
  };
};
