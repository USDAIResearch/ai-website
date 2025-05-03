"use client";
import { updateResearchPaperStatus } from "@/app/actions/admin/action";
import Link from "next/link";
import React, { useState } from "react";
import ResearchPaperUploadForm from "./ResearchPaperForm";
import PaperEditModal from "./PaperEditModal";
import { toast } from "react-toastify";

const ResearchLayout = ({
  allAuthorsList = [],
  allThemeList = [],
  allKeywordList = [],
  myResearchPaper = [],
}) => {
  const [loading, setLoading] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(undefined);
  const [selectedId, setSelectedId] = useState(null);
  const handlePaperDeletion = async (id) => {
    setLoading(id);
    const response = await updateResearchPaperStatus(id);
    setLoading(null);
    if (response.id) {
      toast.success(`Suceess: Paper ${id} edited successfully`);
    }
    else{
      toast.error(`Error: Cannot delete the paper. Something Went Wrong`)
    }
  };
  const handlePaperEdit = (id) => {
    setSelectedId(id);
    setEditModalOpen("form-modal");
  };
  return (
    <div className="flex flex-col lg:flex-row text-black">
      <div
        className={`${myResearchPaper.length ? "lg:w-2/4" : "lg:w-full"} p-4`}
      >
        <h1 className="text-2xl mb-5 font-semibold">Upload New</h1>
        <ResearchPaperUploadForm
          allKeywords={allKeywordList}
          allAuthorsList={allAuthorsList}
          allThemes={allThemeList}
        />
      </div>
      {myResearchPaper.length ? (
        <div className="lg:w-2/4 p-4">
          <h1 className="text-2xl mb-5 font-semibold">My Research Papers</h1>
          <div className="h-[75vh] overflow-y-auto">
            {myResearchPaper?.map((paper) => (
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
                <button
                  className="text-blue-500 hover:underline ml-5"
                  onClick={() => handlePaperEdit(paper.id)}
                >
                  Edit Paper
                </button>
                <button
                  disabled={loading === paper.id}
                  className="text-red-500 hover:underline ml-5"
                  onClick={() => handlePaperDeletion(paper.id)}
                >
                  {loading === paper.id ? "Deleting Paper" : "Delete Paper"}
                </button>
              </div>
            ))}
            <PaperEditModal
              modalOpen={editModalOpen}
              setModalOpen={setEditModalOpen}
              allAuthorsList={allAuthorsList}
              allThemeList={allThemeList}
              allKeywordList={allKeywordList}
              selectedData={myResearchPaper?.find(
                (item) => item.id === selectedId
              )}
            ></PaperEditModal>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ResearchLayout;
