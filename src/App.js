import React from "react";

import "./App.css";
import { imageUploader as ImageUploader } from "./components/image-uploader/image-uploader.js";

//https://images.yourdomain.com/photo-1496950866446-325

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
		console.log(item, status);
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
		return (
			<div className="App">
				<ImageUploader
					status={this.state.status}
					onChangeHandler={this.uploadFileHandler}
					link={this.state.link}
				/>
			</div>
		);
	}
}
