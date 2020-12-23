import React from "react";
import { Button, Loader, Segment, Icon } from "semantic-ui-react";

import "./image-uploader.css";
import previewImage from "../../images/preview-image.svg";

export class ImageUploader extends React.Component {
	constructor(props) {
		super(props);

		this.uploadInput = React.createRef();
		this.focusUploadInputHandler = this.focusUploadInputHandler.bind(this);
		this.fileUploadHanlder = this.fileUploadHanlder.bind(this);
		this.onChangeFileHandler = this.onChangeFileHandler.bind(this);
		this.onDropHandler = this.onDropHandler.bind(this);
		this.onDragOverHandler = this.onDragOverHandler.bind(this);
		this.copyLinkHandler = this.copyLinkHandler.bind(this);
	}

	fileUploadHanlder(file, status) {
		if (this.props.onChangeHandler) {
			this.props.onChangeHandler(file, status);
		}
	}

	onChangeFileHandler(e) {
		if (e.target.files && e.target.files.length > 0) {
			this.fileUploadHanlder(e.target.files, "success");
		}
	}

	focusUploadInputHandler() {
		this.uploadInput.current.click();
	}

	onDragOverHandler(e) {
		e.preventDefault();
	}

	onDropHandler(e) {
		e.preventDefault();
		this.fileUploadHanlder(e.dataTransfer.files, "success");
	}

	copyLinkHandler() {
		navigator.clipboard
			.writeText(this.props.link)
			.then(() => {
				alert("Copied link!!!");
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div className="image-uploader">
				<div className="image-uploader__container">
					<div className="image-uploader__header">
						{this.props.status === "upload" && (
							<>
								<div className="image-uploader__title">
									Upload Your Image
								</div>
								<div className="image-uploader__description">
									File should be jpeg, png,...
								</div>
							</>
						)}
						{this.props.status === "success" && (
							<>
								<Icon color="green" name="check circle" />
								<div className="image-uploader__description">
									Uploaded Successfully!
								</div>
							</>
						)}
					</div>
					<div className="image-uploader__body">
						{this.props.status === "loading" && (
							<div className="image-uploader__loading">
								<Segment>
									<Loader active>Uploading...</Loader>
								</Segment>
							</div>
						)}
						{this.props.status === "upload" && (
							<div
								className="image-uploader__dnd-area"
								onDrop={this.onDropHandler}
								onDragOver={this.onDragOverHandler}
							>
								<img
									src={previewImage}
									className="image-uploader__dnd-preview-image"
									alt="preview"
								/>
								<div className="image-uploader__dnd-label">
									Drag and Drop Your Image Here
								</div>
								<input
									type="file"
									className="image-uploader__input"
									onChange={this.onChangeFileHandler}
									ref={this.uploadInput}
								></input>
							</div>
						)}
						{this.props.status === "success" && (
							<div className="image-uploader__uploaded-area">
								<div className="image-uploader__uploaded-image">
									{this.props.image}
								</div>
							</div>
						)}
					</div>
					<div className="image-uploader__footer">
						{this.props.status === "upload" && (
							<>
								<p>OR</p>
								<Button
									primary
									onClick={this.focusUploadInputHandler}
								>
									Choose a file
								</Button>
							</>
						)}
						{this.props.status === "success" && (
							<div className="image-uploader__share-area">
								<div className="image-uploader__link">
									{this.props.link}
								</div>
								<Button
									primary
									size="large"
									onClick={this.copyLinkHandler}
								>
									Copy Link
								</Button>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}
