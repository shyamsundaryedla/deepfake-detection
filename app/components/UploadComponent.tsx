import { useState, useRef } from "react";
import { FiUploadCloud, FiCheck } from "react-icons/fi";

export const UploadComponent: React.FC = () => {
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>("");
  const [analysisComplete, setAnalysisComplete] = useState<boolean>(false);
  const [confidenceScore, setConfidenceScore] = useState<number>(0);
  const [verdict, setVerdict] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileInputRef.current?.files?.[0]) return;

    setIsUploading(true);
    setUploadProgress(0);

    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setUploadProgress(i);
    }

    setIsUploading(false);
    setAnalysisComplete(true);
    setConfidenceScore(95);
    setVerdict("Facial inconsistencies detected in multiple frames.");
  };

  return (
    <section className="my-12">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">
          Upload Video for Analysis
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Supported formats: MP4, AVI, MOV (max 100MB)
        </p>
        <form onSubmit={handleUpload} className="space-y-6">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-indigo-300 border-dashed rounded-2xl cursor-pointer bg-indigo-50 hover:bg-indigo-100 transition-colors duration-200"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <FiUploadCloud className="w-12 h-12 mb-4 text-indigo-500" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">
                  MP4, AVI, MOV (MAX. 100MB)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                accept="video/*"
                onChange={handleFileChange}
                ref={fileInputRef}
              />
            </label>
          </div>
          {fileName && (
            <p className="text-sm text-gray-600 flex items-center">
              <FiCheck className="mr-2 text-green-500" /> {fileName}
            </p>
          )}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg"
            disabled={isUploading || !fileName}
          >
            {isUploading ? "Uploading..." : "Upload"}
          </button>
        </form>
        {isUploading && (
          <div className="mt-6">
            <div className="bg-indigo-100 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-center text-sm text-indigo-600 mt-2 font-medium">
              Uploading: {uploadProgress}%
            </p>
          </div>
        )}

        {analysisComplete && (
          <div className="mt-12 bg-gray-50 rounded-2xl shadow-md p-8">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              Analysis Results
            </h4>
            <p className="text-lg text-gray-700 mb-2">
              Confidence Score:{" "}
              <span className="font-semibold">{confidenceScore}%</span>
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Verdict: <span className="font-semibold">{verdict}</span>
            </p>
            <button
              className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 rounded-lg"
              onClick={() => window.alert("Downloading report...")}
            >
              Download Full Report
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
