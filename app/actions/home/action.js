"use server";
import { db } from "@/lib/helpers/db";
import { prepareTopicData } from "@/lib/helpers/utils";
import { DEFAULT_PAGE_SIZE } from "@/utils/constants";
import { revalidatePath } from "next/cache";

export async function filterResearchPaper(filters) {
  try {
    const queryFilter = {
      pageNumber: 1,
      searchTerm: "",
    };
    Object.assign(queryFilter, filters);
    const pageSize = DEFAULT_PAGE_SIZE;
    let dbQuery = {
      where: {
        status: "active",
      },
      include: {
        feedbacks: {
          orderBy: {
            updatedAt: "desc",
          },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
      skip: (queryFilter.pageNumber - 1) * pageSize,
      take: pageSize,
    };
    // Search Query
    if (queryFilter.searchTerm) {
      dbQuery.where = {
        OR: [
          {
            title: {
              contains: queryFilter.searchTerm,
            },
          },
          {
            abstract: {
              contains: queryFilter.searchTerm,
            },
          },
        ],
      };
    }
    const filteredResearchPaper = await db.researchPaper.findMany(dbQuery);
    return filteredResearchPaper;
  } catch (error) {
    console.error("Error filtering papers:", error);
    throw error;
  } finally {
    await db.$disconnect();
  }
}

export async function createFeedback({
  email = "",
  comment = "",
  rating = "",
  researchPaperId = "",
}) {
  try {
    if (!email || !comment || !rating || !researchPaperId) {
      throw new Error("Email, Comment and Rating are mandatory fields");
    }
    const createdFeedback = await db.feedback.create({
      data: {
        email,
        comment,
        rating,
        researchPaper: {
          connect: { id: researchPaperId },
        },
        status: "active"
      },
    });
    revalidatePath(`/paper/${researchPaperId}`);
    return createdFeedback;
  } catch (error) {
    console.error("Error creating feedback:", error);
    throw error;
  } finally {
    await db.$disconnect();
  }
}

export async function fieldBasedResearchPaper(fields, fieldType) {
  try {
    const allResearchPaper = await db.researchPaper.findMany({
      where: {
        status: "active",
      },
    });
    const requiredIds = prepareTopicData(allResearchPaper, fields.id, fieldType);
    const finalPreparedDocs = await db.researchPaper.findMany({
      where: {
        status: "active",
        id: {
          in: requiredIds,
        },
      },
    });
    return finalPreparedDocs;
  } catch (error) {
    console.error("Error filtering papers:", error);
    throw error;
  } finally {
    await db.$disconnect();
  }
}
