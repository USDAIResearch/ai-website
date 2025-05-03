import { options } from "@/app/api/auth/[...nextauth]/options";
import FeedbackLayout from "@/components/admin/FeedbackLayout";
import Layout from "@/components/admin/Layout";
import { db } from "@/lib/helpers/db";
import { getServerSession } from "next-auth";
export const revalidate = 0;
async function Dashboard() {
  const session = await getServerSession(options);
  const researchPaperList = await db.user.findUnique({
    where: {
      email: session?.user?.email || "",
    },
    select: {
      researchPapers: {
        where: {
          status: "active",
        },
        orderBy: {
          createdAt: "desc",
        },
        include: {
          feedbacks: {
            orderBy: {
              createdAt: "desc",
            },
          },
        },
      },
    },
  });
  return (
    <div className="bg-gray-50">
      <Layout>
        <FeedbackLayout researchPapers={researchPaperList?.researchPapers || []} />
      </Layout>
    </div>
  );
}

export default Dashboard;
