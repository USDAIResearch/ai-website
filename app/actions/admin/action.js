"use server";

import { options } from "@/app/api/auth/[...nextauth]/options";
import { db } from "@/lib/helpers/db";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export async function createAuthor(optionList) {
  try {
    const author = await db.author.create({
      data: optionList,
    });
    revalidatePath("/admin/research");
    return author;
  } catch (error) {
    console.log("Error Adding New Author", error?.message);
  } finally {
    await db.$disconnect();
  }
}

export async function createTheme(optionList) {
  try {
    const author = await db.theme.create({
      data: optionList,
    });
    revalidatePath("/admin/research");
    return author;
  } catch (error) {
    console.log("Error Adding New Theme", error?.message);
  } finally {
    await db.$disconnect();
  }
}

export async function createKeyword(optionList) {
  try {
    const author = await db.keyword.create({
      data: optionList,
    });
    revalidatePath("/admin/research");
    return author;
  } catch (error) {
    console.log("Error Adding New Keyword", error?.message);
  } finally {
    await db.$disconnect();
  }
}

export async function createResearchPaper(formData) {
  try {
    const session = await getServerSession(options);
    if(!session?.user){
      throw new Error("Unauthenticated User")
    }
    const title = formData.get("title");
    const abstract = formData.get("abstract");
    const authors = JSON.parse(formData.getAll("authors"));
    const venue = formData.get("venue");
    const themes = JSON.parse(formData.getAll("themes"));
    const keywords = JSON.parse(formData.getAll("keywords"));
    const attachment = formData.get("attachment");
    const newResearchPaper = await db.researchPaper.create({
      data: {
        title,
        abstract,
        authors,
        themes,
        venue,
        keywords,
        attachment,
        status: "active",
        user: {
          connect: { email: session.user.email }
        }
      },
    });
    revalidatePath("/admin/research");
    return newResearchPaper;
  } catch (error) {
    console.error("Error creating research paper:", error);
    throw error;
  } finally {
    await db.$disconnect();
  }
}

export async function updateFeedbackStatus(id, newStatus) {
  try {
    if (!id || !newStatus) {
      throw new Error("Id and Status is required");
    }
    const feedback = await db.feedback.update({
      where: {
        id: id,
      },
      data: {
        status: newStatus,
      },
    });
    revalidatePath("/admin/feedback");
    return feedback;
  } catch (error) {
    console.log("Error Adding New Topic", error?.message);
  } finally {
    await db.$disconnect();
  }
}

export async function updateResearchPaper(formData, selectedId) {
  try {
    const title = formData.get("title");
    const abstract = formData.get("abstract");
    const authors = JSON.parse(formData.getAll("authors"));
    const themes = JSON.parse(formData.getAll("themes"));
    const keywords = JSON.parse(formData.getAll("keywords"));
    const venue = formData.get("venue");
    const research = await db.researchPaper.update({
      where: {
        id: selectedId,
      },
      data: {
        title,
        abstract,
        authors,
        venue,
        themes,
        keywords,
      },
    });
    revalidatePath("/admin/research");
    return research;
  } catch (error) {
    console.error("Error Updating Paper", error?.message);
  } finally {
    await db.$disconnect();
  }
}

export async function createUser(profile) {
  try {
    const user = await db.user.create({
      data: {
        name: profile.name,
        email: profile.email,
        image: profile.picture,
        role: "normal",
      },
    });
    return user;
  } catch (error) {
    console.log("Error Creating New User", error?.message);
  } finally {
    await db.$disconnect();
  }
}

export async function findUser(profile) {
  try {
    const user = await db.user.findUnique({
      where: {
        email: profile.email,
      },
    });
    return user;
  } catch (error) {
    console.log("Error finding User", error?.message);
  } finally {
    await db.$disconnect();
  }
}

export async function updateResearchPaperStatus(id) {
  try {
    if (!id) {
      return new Error("Research paper ID is required");
    }
    const user = await db.researchPaper.update({
      where: {
        id: id,
      },
      data: {
        status: "deleted",
      },
    });

    revalidatePath("/admin/research");
    return user;
  } catch (error) {
    console.log("Error updating research paper status", error?.message);
  } finally {
    await db.$disconnect();
  }
}
