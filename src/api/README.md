# API Architecture

Use this pattern for every future API integration in the app:

- `src/api`: raw request/response functions (fetch/XHR calls)
- `src/hooks`: React hooks that wrap those API calls and expose loading/error state
- `src/types`: shared request, response, and helper interfaces

Example:

- `src/api/contactApi.ts`
- `src/hooks/useSendPortfolioEmail.ts`
- `src/types/contact.ts`

This keeps network logic separate from UI logic and makes the project easier to maintain.
