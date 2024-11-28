// 1. Import the style
import "@/assets/root.css";
import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";

export default defineContentScript({
	matches: ["<all_urls>"],
	runAt: "document_idle",
	cssInjectionMode: "ui",

	async main(ctx) {
		// 3. Define your UI
		const ui = await createShadowRootUi(ctx, {
			name: "my-tabs",
			position: "overlay",
			anchor: "body",
			append: "first",
			mode: "open",
			onMount: (container) => {
				// Define how your UI will be mounted inside the container
				const app = createApp(App);
				app.mount(container);
				return app;
			},
			onRemove: (app) => {
				// Unmount the app when the UI is removed
				app?.unmount();
			},
		});

		// 4. Mount the UI
		ui.mount();
	},
});
