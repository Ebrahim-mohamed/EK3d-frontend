"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./Input";

export function Form() {
  const t = useTranslations("ContactPage");

  const formSchema = z.object({
    name: z.string().min(2, t("validation.nameRequired")),
    email: z.string().email(t("validation.emailInvalid")),
    subject: z.string().min(3, t("validation.subjectRequired")),
    message: z.string().min(10, t("validation.messageRequired")),
  });

  type FormData = z.infer<typeof formSchema>;

  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4002/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      reset({ ...data, message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[45%] max-[900px]:w-[70%] max-[600px]:w-[90%]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-6 p-6"
      >
        <div>
          <p className="text-[0.8rem] text-[#FF383C] font-[350]">
            {t("contactUs")}
          </p>

          <p className="text-[2rem] text-white font-bold">
            {t("title")}
          </p>
        </div>

        <Input
          label={t("labels.name")}
          placeholder={t("placeholders.name")}
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          label={t("labels.email")}
          placeholder={t("placeholders.email")}
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          label={t("labels.subject")}
          placeholder={t("placeholders.subject")}
          error={errors.subject?.message}
          {...register("subject")}
        />

        <Input
          label={t("labels.message")}
          placeholder={t("placeholders.message")}
          isTextArea
          error={errors.message?.message}
          {...register("message")}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-[#277FCD] text-white py-3 font-semibold disabled:opacity-50 cursor-pointer"
        >
          {loading ? t("buttons.loading") : t("buttons.submit")}
        </button>

        {status === "success" && (
          <p className="text-green-400 mt-2">
            {t("success")}
          </p>
        )}

        {status === "error" && (
          <p className="text-red-500 mt-2">
            {t("error")}
          </p>
        )}
      </form>
    </div>
  );
}