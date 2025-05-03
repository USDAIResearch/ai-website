import Layout from "@/components/admin/Layout";
import { db } from "@/lib/helpers/db";
import ResearchLayout from "@/components/admin/ResearchLayout";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
export const revalidate = 0;
const ResearchPage = async () => {
  const session = await getServerSession(options);
  const allAuthorsList = await db.author.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });
  const allThemeList = await db.theme.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });
  const allKeywordList = await db.keyword.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });

  const myResearchPaper = await db.user.findUnique({
    where: {
      email: session?.user?.email || '',
    },
    select: {
      researchPapers: {
        where: {
          status: "active",
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  return (
    <Layout>
      <ResearchLayout
        allAuthorsList={allAuthorsList}
        allThemeList={allThemeList}
        allKeywordList={allKeywordList}
        myResearchPaper={myResearchPaper?.researchPapers || []}
      />
    </Layout>
  );
};

export default ResearchPage;
