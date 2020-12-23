import React from "react";
import { Button } from "semantic-ui-react";

export const PreviewUploader = (props) => {
	const inputEl = React.useRef(null);

	const handleFileUpload = (file, status) => {
		if (props.onChange) {
			props.onChange(file, status);
		}
	};

	const handleClickButton = () => {
		inputEl.current.click();
	};

	const handleChangeFileUpoad = (e) => {
		if (e.target.files && e.target.files.length > 0) {
			handleFileUpload(e.target.files);
		}
	};

	const handleDragOver = (e) => e.preventDefault();

	const handleDrop = (e) => {
		e.preventDefault();
		handleFileUpload(e.dataTransfer.files);
	};

	return (
		<div className="image-uploader">
			<div className="image-uploader__container">
				<div className="image-uploader__header">
					<div className="image-uploader__title">
						Upload Your Image
					</div>
					<div className="image-uploader__description">
						File should be jpeg, png,...
					</div>
				</div>
				<div className="image-uploader__body">
					<div
						className="image-uploader__dnd-area"
						onDrop={handleDrop}
						onDragOver={handleDragOver}
					>
						<img
							src={
								process.env.PUBLIC_URL +
								"/images/preview-image.svg"
							}
							className="image-uploader__dnd-preview-image"
							alt="preview"
						/>
						<div className="image-uploader__dnd-label">
							Drag and Drop Your Image Here
						</div>
						<input
							type="file"
							className="image-uploader__input"
							onChange={handleChangeFileUpoad}
							ref={inputEl}
						></input>
					</div>
				</div>
				<div className="image-uploader__footer">
					<p>OR</p>
					<Button primary onClick={handleClickButton}>
						Choose a file
					</Button>
				</div>
			</div>
		</div>
	);
};
