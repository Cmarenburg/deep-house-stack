
import type { WebhookEvent } from "@clerk/clerk-sdk-node";
import { Webhook } from "svix";

import type { ActionArgs } from "@remix-run/node"; 
import { json } from "@remix-run/node"; 

export const action = async ({ request }: ActionArgs) => {
  if (request.method !== "POST") {
    return json({ message: "Method not allowed" }, 405);
  }

  

  const secret = process.env.CLERK_SECRET_KEY!;

  const payload = await request.json();

  const headers = request.headers;

  const wh = new Webhook(secret);

  wh.verify(payload, headers);

  const event = payload.evt as WebhookEvent;

  switch (event.type) {
    case "email.created":
      // handle email created event
      switch (event.data.slug) {
        case "verification-code":
          // handle verify email event
          break;
        case "password-reset":
          // handle password reset event
          break;
        case "magic-link":
          // handle magic link event
          break;
        case "invitation":
          // handle invitation event
          break;
        case "organization-invitation":
          // handle organization invitation event
          break;
        case "password-changed":
          // handle password changed event
          break;
        case "password-reomved":
          // handle password removed event
          break;
        case "email-changed":
          // handle email changed event
          break;
        default:
          // handle other email events
          break;
      }
    default:
      // handle other events
      break;
  }

  /* process the webhook (e.g. enqueue a background job) */

  return json({ success: true }, 200);
};
