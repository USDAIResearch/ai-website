import { google } from "googleapis";
import { Readable } from "stream";
import { v4 as uuidv4 } from "uuid";

const SCOPES = ["https://www.googleapis.com/auth/drive"];
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_DRIVE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_DRIVE_CLIENT_ID,
    private_key: process.env.GOOGLE_DRIVE_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
  },
  scopes: SCOPES,
});
const driveService = google.drive({ version: "v3", auth: auth });

export const uploadFile = async (file) => {
  try {
    const fileID = uuidv4().replace(/-/g, "");
    const fileStream = file.stream();
    const { data } = await driveService.files.create({
      media: {
        mimeType: file.mimeType,
        body: Readable.from(fileStream),
      },
      requestBody: {
        name: `${fileID}-${file.name}`,
        parents: [process.env.DRIVE_FOLDER_ID],
      },
      fields: "id,webContentLink",
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const readFile = async (fileUrl) => {
  const fileId = fileUrl?.split("id=")[1]?.split("&")?.[0] || null;
  const request = driveService.files.get(
    {
      fileId: fileId,
      alt: "media",
    },
    {
      responseType:"arraybuffer"
    }
  );

  try {
    const response = await request;
    return response.data;
  } catch (error) {
    console.error(error);
  }

  return request;
};
