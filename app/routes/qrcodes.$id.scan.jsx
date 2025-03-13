import { redirect, json } from "@remix-run/node"; // Import json
import invariant from "tiny-invariant";
import db from "../db.server";
import { getDestinationUrl } from "../models/QRCode.server";

export const loader = async ({ params }) => {   //acts a s middlemen when someone scans the code
  try {
    invariant(params.id, "Could not find QR code destination");

    const id = Number(params.id);
    const qrCode = await db.qRCode.findFirst({ where: { id } });

    invariant(qrCode, "Could not find QR code destination");

    await db.qRCode.update({    //counts how many times a qrcode has been scanned
      where: { id },
      data: { scans: { increment: 1 } },
    });

    return redirect(getDestinationUrl(qrCode));   //redirects the person who scanned the qrcode to correct pg
  } catch (error) {
    console.error("Error in loader:", error);
    // Redirect to an error route or return a JSON response
    return json({ error: "QR Code not found or error occurred" }, { status: 404 });
  }
};

