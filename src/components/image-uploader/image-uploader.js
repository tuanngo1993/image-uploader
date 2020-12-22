import React from "react";
import { Button, Loader, Segment, Icon } from "semantic-ui-react";

import "./image-uploader.css";
import previewImage from "../../images/preview-image.svg";
import image from "../../images/image.png";

export const imageUploader = (props) => {
	return (
		<div className="image-uploader">
			<div className="image-uploader__container">
				<div className="image-uploader__header">
					{props.status === "upload" && (
						<>
							<div className="image-uploader__title">Upload Your Image</div>
							<div className="image-uploader__description">
								File should be jpeg, png,...
							</div>
						</>
					)}
					{props.status === "success" && (
						<>
							<Icon color="green" name="check circle" />
							<div className="image-uploader__description">
								Uploaded Successfully!
							</div>
						</>
					)}
				</div>
				<div className="image-uploader__body">
					{props.status === "loading" && (
						<div className="image-uploader__loading">
							<Segment>
								<Loader active>Uploading...</Loader>
							</Segment>
						</div>
					)}
					{props.status === "upload" && (
						<div className="image-uploader__dnd-area">
							<img
								src={previewImage}
								className="image-uploader__dnd-preview-image"
								alt="preview"
							/>
							<div className="image-uploader__dnd-label">
								Drag and Drop Your Image Here
							</div>
							<input type="file" className="image-uploader__input"></input>
						</div>
					)}
					{props.status === "success" && (
						<div className="image-uploader__uploaded-area">
							<img
								className="image-uploader__uploaded-image"
								src={image}
								alt="success"
							/>
						</div>
					)}
				</div>
				<div className="image-uploader__footer">
					{props.status === "upload" && (
						<>
							<p>OR</p>
							<Button primary>Choose a file</Button>
						</>
					)}
					{props.status === "success" && (
						<div className="image-uploader__share-area">
							<div className="image-uploader__link">
								https://images.yourdomain.com/photo-1496950866446-325
							</div>
							<Button primary size="large">
								Copy Link
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
