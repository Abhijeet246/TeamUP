import * as z from "zod";

export const GigValidation = z.object({
  thread: z.string().nonempty().min(3, { message: "Minimum 3 characters" }),
  accountId:z.string(),
  requirement : z.string().array(),
});