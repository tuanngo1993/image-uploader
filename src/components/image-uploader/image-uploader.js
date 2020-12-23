import React from "react";
import { Button, Icon } from "semantic-ui-react";

import "./image-uploader.css";

export const ImageUploader = (props) => {
	const handleCopyLink = () => {
		navigator.clipboard
			.writeText(props.url)
			.then(() => {
				alert("Copied link!!!");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="image-uploader">
			<div className="image-uploader__container">
				<div className="image-uploader__header">
					<Icon color="green" name="check circle" />
					<div className="image-uploader__description">
						Uploaded Successfully!
					</div>
				</div>
				<div className="image-uploader__body">
					<div className="image-uploader__uploaded-area">
						<div className="image-uploader__uploaded-image">
							<img src={props.url} alt="success" />
						</div>
					</div>
				</div>
				<div className="image-uploader__footer">
					<div className="image-uploader__share-area">
						<div className="image-uploader__link">{props.url}</div>
						<Button primary size="large" onClick={handleCopyLink}>
							Copy Link
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
