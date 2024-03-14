"use server";

import { Resend } from "resend";
import LeadEmailTemplate from "../../components/templates/LeadEmailTemplate";
import { z } from "zod";
import { revalidatePath } from "next/cache";

export type FormState = {
  message: string;
  errors: string | undefined;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendLeadEmail = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string(),
  });

  const values = schema.parse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  try {
    await resend.emails.send({
      from: "Michael Web Solutions <joshua@jkmichael.com>",
      to: ["joshua@jkmichael.com"],
      subject: "NEW LEAD!",
      react: LeadEmailTemplate({
        name: values.name,
        email: values.email,
        body: values.message,
      }) as React.ReactElement,
    });

    revalidatePath("/");
    return { message: "success", errors: undefined };
  } catch (error) {
    return {
      message: "Whoops! looks like your message didn't send. Please try again.",
      errors: error,
    };
  }
};
