import React from "react";

import "./App.css";

import { ImageUploader } from "./components/image-uploader/image-uploader.js";
import { PreviewUploader } from "./components/image-uploader/preview-uploader.js";
import { LoadingUploader } from "./components/image-uploader/loading-uploader.js";

export class App extends React.Component {
	constructor(props) {
		super();

		this.state = {
			status: "upload",
			url: "",
		};

		this.handleFileUpload = this.handleFileUpload.bind(this);
	}

	handleFileUpload(item) {
		setTimeout(() => {
			this.setState({
				status: "success",
				url: process.env.PUBLIC_URL + "/images/image.png",
			});
		}, 3000);

		this.setState({ status: "loading" });
	}

	render() {
		const { status, url } = this.state;
		return (
			<div className="App">
				{status === "upload" && (
					<PreviewUploader onChange={this.handleFileUpload} />
				)}
				{status === "loading" && <LoadingUploader />}
				{status === "success" && <ImageUploader url={url} />}
			</div>
		);
	}
}
