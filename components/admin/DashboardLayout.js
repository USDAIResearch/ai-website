import Link from "next/link";
import ChartComponent from "./ChartComponent";
import { db } from "@/lib/helpers/db";
import { buildChartData } from "@/lib/helpers/utils";

const DashboardLayoutComponent = async ({
  researchPapers,
  researchPapersCount = "N/A",
}) => {
  const chartData = await db.researchPaper.groupBy({
    where: {
      status: "active",
    },
    by: ["themes"],
  });
  const groupChartData = buildChartData(
    chartData.map((item) => item.themes)?.flat()
  );
  const totalPublishedPapers = researchPapersCount;

  // Total Review Finding
  const feedbacks = await db.feedback.findMany({
    where: {
      status: "active",
    },
    select: {
      rating: true,
    },
  });

  const totalRatings = feedbacks.length;
  const sumRatings = feedbacks.reduce(
    (acc, feedback) => acc + parseFloat(feedback.rating),
    0
  );
  const averageRating = totalRatings > 0 ? sumRatings / totalRatings : 0;

  // Convert average rating to a scale out of 5
  const totalReviews = `${(averageRating / 5) * 5}/5`;
  return (
    <div className="flex flex-col lg:flex-row text-black">
      <div
        className={`${researchPapers.length ? "lg:w-2/4" : "lg:w-full"} p-4`}
      >
        <h1 className="text-2xl mb-5 font-semibold">My Overview</h1>
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="p-4 bg-blue-200 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              Total Published Papers
            </h2>
            <p className="text-4xl font-bold">{totalPublishedPapers}</p>
          </div>
          <div className="p-4 bg-green-200 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Overall Rating</h2>
            <p className="text-4xl font-bold">{totalReviews}</p>
          </div>
        </div>
        <h1 className="text-2xl mb-8 font-semibold">Popular Research Themes</h1>
        <ChartComponent chartComponentData={groupChartData} />
      </div>
      {researchPapers.length ? (
        <div className="lg:w-2/4 p-4">
          <h1 className="text-2xl mb-5 font-semibold">Latest Publications</h1>
          <div className="h-[75vh] overflow-y-auto">
            {researchPapers.map((paper) => (
              <div
                key={paper.id}
                className="bg-white shadow-md rounded-lg p-4 mb-4"
              >
                <h3 className="text-lg font-semibold mb-2">{paper.title}</h3>
                <p className="text-gray-700 mb-2">
                  Authors:{" "}
                  {paper.authors?.map((item) => item?.label)?.join(", ")}
                </p>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {paper.abstract}
                </p>
                <Link
                  href={`/paper/${paper.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Preview Paper
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DashboardLayoutComponent;
