import "@/assets/root.css";

export default defineContentScript({
	matches: ["*://*.google.com/*"],
	main() {
		console.log("Hello content.");
	},
});
