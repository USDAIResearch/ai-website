"use client";
import React, { useRef, useState } from "react";
import EditFromModal from "../commons/modal/EditFromModal";
import Loader from "../commons/Loader";
import CreatableSelectComponent from "../commons/CreateableSelect";
import {
  createAuthor,
  createKeyword,
  createTheme,
  updateResearchPaper,
} from "@/app/actions/admin/action";
import { useEffect } from "react";
import { toast } from "react-toastify";

const PaperEditModal = ({
  modalOpen,
  setModalOpen,
  selectedData = {},
  allAuthorsList = [],
  allThemeList = [],
  allKeywordList = [],
}) => {
  const formRef = useRef(null);
  const [isPending, setIsPending] = useState(false);
  const [title, setTitle] = useState(selectedData?.title || "");
  const [venue, setVenue] = useState(selectedData?.venue || "");
  const [authors, setAuthors] = useState(selectedData?.authors || []);
  const [themes, setThemes] = useState(selectedData?.themes || []);
  const [keywords, setKeywords] = useState(selectedData?.keywords || []);
  const [abstract, setAbstract] = useState(selectedData?.abstract || "");

  useEffect(() => {
    setTitle(selectedData?.title);
    setAuthors(selectedData?.authors);
    setVenue(selectedData?.venue);
    setThemes(selectedData?.themes);
    setKeywords(selectedData?.keywords);
    setAbstract(selectedData?.abstract);
  }, [selectedData]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAbstractChange = (event) => {
    setAbstract(event.target.value);
  };

  const handleVenueChange = (event) => {
    setVenue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsPending(true);

    const formData = new FormData();

    formData.append("title", title);
    formData.append("authors", JSON.stringify(authors));
    formData.append("abstract", abstract);
    formData.append("venue", venue);
    formData.append("themes", JSON.stringify(themes));
    formData.append("keywords", JSON.stringify(keywords));

    const response = await updateResearchPaper(formData, selectedData.id);
    setIsPending(false);
    if (response?.id) {
      toast.success(`Success: Paper ${selectedData?.id} Edited Successfully`);
    } else {
      toast.error(`Error: Cannot edit the paper. Something 
         Wrong`);
    }
  };

  return (
    <EditFromModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="bg-white rounded-lg shadow-sm">
        <h1 className="text-2xl flex items-center mb-4 font-semibold text-gray-900 dark:text-white">
          Edit Selected Paper
        </h1>

        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title:
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="authors"
              className="block text-sm font-medium text-gray-700"
            >
              Authors:
              <span className="text-red-500">*</span>
            </label>
            <CreatableSelectComponent
              defaultOptions={allAuthorsList}
              defaultValue={authors}
              isMultiple
              setSelectValue={setAuthors}
              createFunction={createAuthor}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="abstract"
              className="block text-sm font-medium text-gray-700"
            >
              Abstract:
              <span className="text-red-500">*</span>
            </label>
            <textarea
              id="abstract"
              value={abstract}
              onChange={handleAbstractChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="venue"
              className="block text-sm font-medium text-gray-700"
            >
              Venue:
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="venue"
              value={venue}
              onChange={handleVenueChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="Keywords"
              className="block text-sm font-medium text-gray-700"
            >
              Keywords:
              <span className="text-red-500">*</span>
            </label>
            <CreatableSelectComponent
              defaultValue={keywords}
              defaultOptions={allKeywordList}
              isMultiple
              setSelectValue={setKeywords}
              createFunction={createKeyword}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="Topics"
              className="block text-sm font-medium text-gray-700"
            >
              Themes:
              <span className="text-red-500">*</span>
            </label>
            <CreatableSelectComponent
              defaultValue={themes}
              defaultOptions={allThemeList}
              isMultiple
              setSelectValue={setThemes}
              createFunction={createTheme}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700"
            >
              Note: Can&#39;t edit PDF of already created file. Consider
              deleting the Research Paper.
              <span className="text-red-500">*</span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            {isPending ? <Loader /> : "Update Paper"}
          </button>
        </form>
      </div>
    </EditFromModal>
  );
};

export default PaperEditModal;
