import type {
  PortfolioEmailRequest,
  PortfolioEmailResponse,
} from "../types/contact";

const PORTFOLIO_EMAIL_API_URL =
  "https://matechs-backend.vercel.app/api/sendEmailPortfolio";

export async function sendPortfolioEmail(
  payload: PortfolioEmailRequest
): Promise<PortfolioEmailResponse> {
  const response = await fetch(PORTFOLIO_EMAIL_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let message = `Email request failed with status ${response.status}.`;

    try {
      const errorBody = await response.json();
      if (typeof errorBody?.message === "string") {
        message = errorBody.message;
      }
    } catch {
      // Ignore JSON parse failures and keep the fallback error message.
    }

    throw new Error(message);
  }

  try {
    const data = (await response.json()) as PortfolioEmailResponse;
    return data;
  } catch {
    return {
      success: true,
      message: "Email sent successfully.",
    };
  }
}
