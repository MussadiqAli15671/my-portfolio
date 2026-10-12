import { useCallback, useState } from "react";

import { sendPortfolioEmail } from "../api/contactApi";
import type {
  PortfolioEmailRequest,
  PortfolioEmailResponse,
} from "../types/contact";

export function useSendPortfolioEmail() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<PortfolioEmailResponse | null>(null);

  const submit = useCallback(async (payload: PortfolioEmailRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await sendPortfolioEmail(payload);
      setResponse(result);
      return result;
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong while sending the email.";

      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    submit,
    isLoading,
    error,
    response,
  };
}
