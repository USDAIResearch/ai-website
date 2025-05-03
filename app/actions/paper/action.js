"use server";

import { readFile, uploadFile } from "@/app/services/fileUploader";

export const readFileByteArray = async (url) => {
  if (!url) {
    return null;
  }
  try {
    const resp = await readFile(url);
    const uint8Array = new Uint8Array(resp);
    const byteArray = Array.from(uint8Array);
    return byteArray
  } catch (error) {
    console.error("error", error.message);
  }
};

export const uploadToDrive = async (formData) => {
  const file = formData.get("fileUrl");
  if (!file) {
    return null
  }
  try {
    const resp = await uploadFile(file);
    return resp
  } catch (error) {
    console.error("error", error.message);
  }
};
