import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  const subject = event.queryStringParameters?.name || "World";

  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  };
};
