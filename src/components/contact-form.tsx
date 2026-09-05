"use client";

import { useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import { site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type Channel = "whatsapp" | "email";
type OrderType = "retail" | "wholesale";

type Fields = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const rows: {
  key: keyof Omit<Fields, "message">;
  label: string;
  type: string;
  autoComplete: string;
  required: boolean;
  hint?: string;
}[] = [
  {
    key: "name",
    label: "Name",
    type: "text",
    autoComplete: "name",
    required: true,
  },
  {
    key: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    required: true,
  },
  {
    key: "phone",
    label: "Phone",
    type: "tel",
    autoComplete: "tel",
    required: true,
    hint: "The quickest way to settle freight.",
  },
];

const orderTypes: [OrderType, string, string][] = [
  ["retail", "Retail", "One case, a single job or a first order"],
  ["wholesale", "Wholesale", "Multiple cases, bulk or container"],
];

const channels: [Channel, string, string][] = [
  ["whatsapp", "WhatsApp", "Fastest reply"],
  ["email", "Email", "Best for long lists"],
];

/**
 * The enquiry form. Nothing is posted to a server: it writes the message and
 * hands it to WhatsApp or the visitor's mail app, so the buyer presses send
 * themselves and keeps a copy in their own thread.
 */
export function ContactForm() {
  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [orderType, setOrderType] = useState<OrderType>("wholesale");
  const [channel, setChannel] = useState<Channel>("whatsapp");
  const [handedOff, setHandedOff] = useState<Channel | null>(null);

  function compose() {
    return (
      "Hi " +
      site.contact +
      ", this is an enquiry from the Quick Fast 2 You website.\n\n" +
      "Order type: " +
      (orderType === "retail" ? "Retail" : "Wholesale") +
      "\nName: " +
      fields.name +
      "\nEmail: " +
      fields.email +
      "\nPhone: " +
      fields.phone +
      "\n\nMessage:\n" +
      fields.message
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const body = compose();
    if (channel === "whatsapp") {
      window.open(whatsappLink(body), "_blank", "noopener,noreferrer");
    } else {
      window.location.href =
        "mailto:" +
        site.email +
        "?subject=" +
        encodeURIComponent(
          (orderType === "retail" ? "Retail" : "Wholesale") +
            " enquiry from " +
            (fields.name || "the website"),
        ) +
        "&body=" +
        encodeURIComponent(body);
    }
    setHandedOff(channel);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="overflow-hidden rounded-lg border border-hairline bg-surface"
    >
      <div className="border-b border-hairline px-7 py-7 sm:px-9">
        <p className="q-eyebrow mb-3">Enquiry</p>
        <h2 className="q-h2 text-frost">Tell us what you need</h2>
        <p className="q-body mt-3 text-[0.9375rem]">
          Nothing here opens an account. It writes your enquiry and hands it to
          WhatsApp or your email app, so you send it yourself.
        </p>
      </div>

      <div className="grid gap-7 px-7 py-8 sm:grid-cols-2 sm:px-9">
        {rows.map((row) => (
          <div
            key={row.key}
            className={cn(
              "flex flex-col gap-2.5",
              row.key === "name" && "sm:col-span-2",
            )}
          >
            <Label
              htmlFor={"f-" + row.key}
              className="q-eyebrow q-eyebrow--muted text-[0.6875rem]"
            >
              {row.label}
            </Label>
            <Input
              id={"f-" + row.key}
              name={row.key}
              type={row.type}
              required={row.required}
              autoComplete={row.autoComplete}
              value={fields[row.key]}
              onChange={(e) =>
                setFields((prev) => ({ ...prev, [row.key]: e.target.value }))
              }
              className="h-12 rounded-md border-hairline bg-canvas px-4 text-sm"
            />
            {row.hint ? (
              <p className="text-xs text-muted-foreground">{row.hint}</p>
            ) : null}
          </div>
        ))}

        <fieldset className="sm:col-span-2">
          <legend className="q-eyebrow q-eyebrow--muted mb-3 text-[0.6875rem]">
            Order type
          </legend>
          <RadioGroup
            value={orderType}
            onValueChange={(next) => setOrderType(next as OrderType)}
            className="grid gap-3 sm:grid-cols-2"
          >
            {orderTypes.map(([value, label, note]) => (
              <Label
                key={value}
                htmlFor={"ot-" + value}
                className={cn(
                  "flex cursor-pointer items-center gap-3.5 rounded-md border p-4 transition-colors duration-300",
                  orderType === value
                    ? "border-purple bg-surface-2"
                    : "border-hairline hover:bg-surface-2/60",
                )}
              >
                <RadioGroupItem id={"ot-" + value} value={value} />
                <span>
                  <span className="block text-sm text-frost">{label}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    {note}
                  </span>
                </span>
              </Label>
            ))}
          </RadioGroup>
        </fieldset>

        <div className="flex flex-col gap-2.5 sm:col-span-2">
          <Label
            htmlFor="f-message"
            className="q-eyebrow q-eyebrow--muted text-[0.6875rem]"
          >
            Message
          </Label>
          <Textarea
            id="f-message"
            name="message"
            required
            rows={5}
            value={fields.message}
            onChange={(e) =>
              setFields((prev) => ({ ...prev, message: e.target.value }))
            }
            placeholder={
              "16 x QF-DM4K-08\n1 x QF-NVR16-4T\n1 x QF-PSW8-120\nShipping to 75201"
            }
            className="min-h-[8rem] rounded-md border-hairline bg-canvas px-4 py-3.5 text-sm"
          />
          <p className="text-xs text-muted-foreground">
            Rough numbers are fine. If you are not sure of the SKU, tell us the
            channel count and how many days the site has to look back.
          </p>
        </div>

        <fieldset className="sm:col-span-2">
          <legend className="q-eyebrow q-eyebrow--muted mb-3 text-[0.6875rem]">
            How should it be sent?
          </legend>
          <RadioGroup
            value={channel}
            onValueChange={(next) => setChannel(next as Channel)}
            className="grid gap-3 sm:grid-cols-2"
          >
            {channels.map(([value, label, note]) => (
              <Label
                key={value}
                htmlFor={"ch-" + value}
                className={cn(
                  "flex cursor-pointer items-center gap-3.5 rounded-md border p-4 transition-colors duration-300",
                  channel === value
                    ? "border-purple bg-surface-2"
                    : "border-hairline hover:bg-surface-2/60",
                )}
              >
                <RadioGroupItem id={"ch-" + value} value={value} />
                <span>
                  <span className="block text-sm text-frost">{label}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    {note}
                  </span>
                </span>
              </Label>
            ))}
          </RadioGroup>
        </fieldset>
      </div>

      <div className="flex flex-col gap-4 border-t border-hairline px-7 py-7 sm:flex-row sm:items-center sm:px-9">
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-purple px-7 text-[0.9375rem] font-medium text-white transition-colors duration-300 hover:bg-purple-electric"
        >
          {channel === "whatsapp" ? (
            <>
              <WhatsAppIcon className="size-4" />
              Send on WhatsApp
              <ArrowUpRight className="size-3.5" />
            </>
          ) : (
            <>
              <Mail className="size-4" />
              Send by email
            </>
          )}
        </button>
        <p className="text-xs text-muted-foreground">
          We reply the same working day.
        </p>
      </div>

      <div aria-live="polite">
        {handedOff ? (
          <p className="border-t border-hairline bg-surface-2 px-7 py-5 text-sm text-frost sm:px-9">
            {handedOff === "whatsapp"
              ? "WhatsApp is open with your enquiry written out. Press send there and it reaches " +
                site.contact +
                " straight away."
              : "Your email app is open with the enquiry written out. Send it and it lands with " +
                site.contact +
                "."}
          </p>
        ) : null}
      </div>
    </form>
  );
}
