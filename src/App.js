import "./App.css";
import { imageUploader as ImageUploader } from "./components/image-uploader/image-uploader.js";

function App() {
	return (
		<div className="App">
			<ImageUploader status="upload" />
		</div>
	);
}

export default App;
