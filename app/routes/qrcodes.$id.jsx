import React from "react";
import { json } from "@remix-run/node";
import invariant from "tiny-invariant";
import { useLoaderData } from "@remix-run/react";

// If getQRCodeImage uses server-side logic, import it here
import { getQRCodeImage } from "../models/QRCode.server";

export async function loader({ params }) {
  invariant(params.id, "Could not find QR code destination");
  const id = Number(params.id);

  // Moved db logic inside the loader
  const db = await import("../db.server").then((m) => m.default);
  const qrCode = await db.qRCode.findFirst({ where: { id } });

  invariant(qrCode, "Could not find QR code destination");

  let image = await getQRCodeImage(id); // If getQRCodeImage is server-safe, leave it here
  // If getQRCodeImage uses server-side logic, move it here:
  // let image = await import("../models/QRCode.server").then((m) => m.getQRCodeImage(id));

  return json({
    title: qrCode.title,
    image: image,
  });
}

export default function QRCode() {
  const { image, title } = useLoaderData(); // No type here

  return (
    <>
      <h1>{title}</h1>
      <img src={image} alt={`QR Code for product`} />
    </>
  );
}