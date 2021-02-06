import React from "react";
import axios from "axios";

import "./App.css";

import { ImageUploader } from "./components/image-uploader/image-uploader.js";
import { PreviewUploader } from "./components/image-uploader/preview-uploader.js";
import { LoadingUploader } from "./components/image-uploader/loading-uploader.js";

export const App = (props) => {
	const [status, setStatus] = React.useState("upload");
	const [file, setFile] = React.useState({ name: "", path: "" }); // storing the uploaded file
	const [error, setError] = React.useState("");

	const handleFileUpload = (item) => {
    setStatus("loading");

		const formData = new FormData();
    formData.append("file", item);

		axios
			.post("http://localhost:4500/upload", formData, {
				onUploadProgress: (e) => {
					let process = Math.round((e.loaded / e.total) * 100);
					if (process < 100) {
						setStatus("loading");
					}
				},
			})
			.then((res) => {
				setFile({
					name: res.data.name,
					path: "http://localhost:4500" + res.data.path,
				});
				setStatus("success");
			})
			.catch((error) => {
				setError(error.message);
				setStatus("upload");
      });
  };

	return (
		<div className="App">
			{error && <div>{error}</div>}
			{status === "upload" && (
				<PreviewUploader onChange={handleFileUpload} />
			)}
			{status === "loading" && <LoadingUploader />}
			{status === "success" && <ImageUploader file={file} />}
		</div>
	);
};
