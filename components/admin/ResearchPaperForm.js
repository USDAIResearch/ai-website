"use client";
import React, { useRef, useState } from "react";
import CreatableSelectComponent from "../commons/CreateableSelect";
import {
  createAuthor,
  createKeyword,
  createResearchPaper,
  createTheme,
} from "@/app/actions/admin/action";
import Loader from "../commons/Loader";
import { uploadToDrive } from "@/app/actions/paper/action";
import { MAX_FILE_UPLOAD_SIZE } from "@/utils/constants";
import { toast } from "react-toastify";

const ResearchPaperUploadForm = ({
  allAuthorsList = [],
  allKeywords = [],
  allThemes = [],
}) => {
  const formRef = useRef(null);
  const [isPending, setIsPending] = useState(false);
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState([]);
  const [themes, setThemes] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [abstract, setAbstract] = useState("");
  const [venue, setVenue] = useState("");
  const [file, setFile] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAbstractChange = (event) => {
    setAbstract(event.target.value);
  };

  const handleVenueChange = (event) => {
    setVenue(event.target.value);
  };

  const handleFileChange = (event) => {
    if (!validFileSize(event.target.files[0].size)) {
      toast.error(
        "Error: File size exceeds maximum limit. The maximum file size allowed is 3MB. Please choose a smaller file"
      );
    } else {
      setFile(event.target.files[0]);
    }
  };

  const validFileSize = (file) => {
    return file <= MAX_FILE_UPLOAD_SIZE;
  };

  const resetForm = () => {
    setTitle("");
    setAbstract("");
    setVenue("");
    setFile("");
    setAuthors([]);
    setThemes([]);
    setKeywords([]);
    formRef.current.reset();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsPending(true);

    // Validation Before Submission
    if (file && !validFileSize(file.size)) {
      toast.error(
        "Error: File size exceeds maximum limit. The maximum file size allowed is 3MB. Please choose a smaller file"
      );
      setIsPending(false);
      return null;
    }

    const formData = new FormData();
    formData.append("fileUrl", file);
    // Upload File to Google Drive
    const newFileUrl = await uploadToDrive(formData);
    formData.delete("fileUrl");

    // Append Content Link to Attachment Field
    formData.append("title", title);
    formData.append("authors", JSON.stringify(authors));
    formData.append("abstract", abstract);
    formData.append("venue", venue);
    formData.append("themes", JSON.stringify(themes));
    formData.append("keywords", JSON.stringify(keywords));
    formData.append("attachment", newFileUrl?.webContentLink || "");

    const response = await createResearchPaper(formData);
    setIsPending(false);
    if (response?.id) {
      toast.success(`Success: Paper ${response.id} created Successfully`);
      resetForm();
    } else {
      toast.error(`Error: Cannot create the paper. Something Went Wrong`);
    }
  };

  return (
    <div className="w-full">
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
          </label>
          <input
            type="text"
            id="venue"
            value={venue}
            onChange={handleVenueChange}
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
            defaultOptions={allKeywords}
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
            defaultOptions={allThemes}
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
            Choose a file (PDF only Max Size 3MB):
            <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            id="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {isPending ? <Loader /> : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default ResearchPaperUploadForm;
