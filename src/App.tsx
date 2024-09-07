import "./App.css";
import * as dialog from "@tauri-apps/plugin-dialog";
import * as fs from "@tauri-apps/plugin-fs";

import * as mupdf from "mupdf";

function App() {
	return (
		<div class="container">
			<h1>Welcome to Tauri!</h1>

			<button
				type="button"
				onClick={async () => {
					const file = await dialog.open();
					if (!file) return;

					const data = await fs.readFile(file);
					if (!data) return;

					const doc = mupdf.Document.openDocument(data, "application/pdf");

					console.log(doc.countPages());
				}}
			>
				Open PDF
			</button>
		</div>
	);
}

export default App;
