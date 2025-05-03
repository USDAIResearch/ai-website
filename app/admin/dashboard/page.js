import { options } from "@/app/api/auth/[...nextauth]/options";
import DashboardLayoutComponent from "@/components/admin/DashboardLayout";
import Layout from "@/components/admin/Layout";
import { db } from "@/lib/helpers/db";
import { getServerSession } from "next-auth";
export const revalidate = 0;
async function Dashboard() {
  const session = await getServerSession(options);
  const researchPapers = await db.researchPaper.findMany({
    where: {
      status: "active",
    },
    orderBy: {
      updatedAt: "desc",
    },
    take: 3,
  });
  const researchPapersCount = await db.researchPaper.count({
    where: {
      status: "active",
      userEmail: session?.user?.email || ''
    },
  });
  return (
    <div className="bg-gray-50">
      <Layout>
        <DashboardLayoutComponent
          researchPapers={researchPapers}
          researchPapersCount={researchPapersCount}
        />
      </Layout>
    </div>
  );
}

export default Dashboard;
