import {
  UpdateSectionPayload,
  UpdateSectionResponse,
} from "interfaces/api/updateSection";
import { NextApiHandler } from "next";
import { updateSectionService } from "services/updateSectionService";
import { decodeToken } from "utils/token";

const handler: NextApiHandler<UpdateSectionResponse> = async (req, res) => {
  // Allow POST only.
  if (req.method !== "POST") {
    res.setHeader("ALLOW", ["POST"]);
    res.status(405).json({
      success: false,
      message: "Method not allowed",
      data: false,
    });
    return;
  }

  // Ensure token exists.
  const { token } = req.cookies;
  if (!token) {
    res.status(200).json({
      success: false,
      message: "Unauthenticated",
      data: false,
    });
    return;
  }

  // If token has expired.
  const id = decodeToken(token);
  if (!id) {
    res.status(200).json({
      success: false,
      message: "Token expired",
      data: false,
    });
    return;
  }

  // Authorization as HR.
  if (id !== "999") {
    res.status(200).json({
      success: false,
      message: "Unauthorized",
      data: false,
    });
    return;
  }

  // Update section info.
  const { sectionId, sectionName }: UpdateSectionPayload = req.body;
  const updated = await updateSectionService({ sectionId, sectionName });

  // On failure.
  if (!updated) {
    res.status(200).json({
      success: false,
      message: "Try again later",
      data: false,
    });
    return;
  }

  // On success.
  res.status(200).json({
    success: true,
    message: "",
    data: true,
  });
};

export default handler;
