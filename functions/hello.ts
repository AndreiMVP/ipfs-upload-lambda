import { Handler } from "@netlify/functions";
import { FilebaseClient } from "@filebase/client";
import { StatusCodes } from "http-status-codes";

const filebase = new FilebaseClient({
  token:
    "M0QzRDQyNEY4NEQ4OTEwN0U0MDU6UXRNOGJ2RkFxU0ZWWDNrRmZRcUE0Z0NDc1pKYzV1MEJBYWljVzRxbTp0ZXN0LWJ1Y2t5",
});

const pinToFilebase = async (msg: string) => {
  const content = new Blob([msg]);
  const cid = await filebase.storeBlob(content);
  return cid;
};

const handler: Handler = async (event) => {
  if (!event.body)
    return {
      statusCode: StatusCodes.BAD_REQUEST,
      body: JSON.stringify({ message: "Invalid body format" }),
    };

  const cid = await pinToFilebase(event.body);

  return {
    statusCode: StatusCodes.OK,
    body: JSON.stringify({ cid }),
  };
};

export { handler };
