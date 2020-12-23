import React from "react";
import { Loader, Segment } from "semantic-ui-react";

export const LoadingUploader = () => {
	return (
		<div className="image-uploader">
			<div className="image-uploader__container">
				<div className="image-uploader__body">
					<div className="image-uploader__loading">
						<Segment>
							<Loader active>Uploading...</Loader>
						</Segment>
					</div>
				</div>
			</div>
		</div>
	);
};
