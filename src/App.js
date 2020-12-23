import React from "react";

import "./App.css";
import image from "./images/image.png";

import { ImageUploader } from "./components/image-uploader/image-uploader.js";

export class App extends React.Component {
	constructor(props) {
		super();

		this.state = {
			status: "upload",
			link: "",
		};

		this.uploadFileHandler = this.uploadFileHandler.bind(this);
	}

	uploadFileHandler(item, status) {
		setTimeout(() => {
			this.setState({
				status: status,
				link: `https://images.mydomain.com/${item[0].name
					.split(" ")
					.join("-")}`,
			});
		}, 3000);

		this.setState({ status: "loading" });
	}

	render() {
		const { status } = this.state;
		return (
			<div className="App">
				<ImageUploader
					status={status}
					onChangeHandler={this.uploadFileHandler}
					link={this.state.link}
					image={
						status === "success" && (
							<img src={image} alt="success" />
						)
					}
				/>
			</div>
		);
	}
}
