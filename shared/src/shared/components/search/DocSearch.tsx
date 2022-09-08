import { DocSearchModal, useDocSearchKeyboardEvents } from "@docsearch/react";
import { createPortal } from "preact/compat";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";

export default function Search() {
	const [isOpen, setIsOpen] = useState(false);
	const searchButton = useRef(document.getElementById("docsearch-button"));
	const searchButtonMobile = useRef(document.getElementById("docsearch-button-mobile"));
	const [initialQuery, setInitialQuery] = useState<string>();

	const onOpen = useCallback(() => {
		setIsOpen(true);
	}, [setIsOpen]);

	const onClose = useCallback(() => {
		setIsOpen(false);
	}, [setIsOpen]);

	const onInput = useCallback(
		(e) => {
			setIsOpen(true);
			setInitialQuery(e.key);
		},
		[setIsOpen, setInitialQuery]
	);

	useEffect(() => {
		searchButton.current?.addEventListener("click", onOpen);
		searchButtonMobile.current?.addEventListener("click", onOpen);
		return () => {
			searchButton.current?.removeEventListener("click", onOpen);
			searchButtonMobile.current?.removeEventListener("click", onOpen);
		};
	}, [searchButton.current, searchButtonMobile.current, onOpen]);

	useDocSearchKeyboardEvents({
		isOpen,
		onOpen,
		onClose,
		onInput,
		searchButton,
		searchButtonMobile,
	});

	if (!isOpen) return null;

	return createPortal(
		<DocSearchModal
			initialQuery={initialQuery}
			initialScrollY={window.scrollY}
			onClose={onClose}
			// indexName="astro"
			// appId="7AFBU8EPJU"
			// apiKey="4440670147c44d744fd8da35ff652518"
			indexName="crawler_unified"
			appId="SKG3CU3YQM"
			apiKey="79ba039ddf2bbd8467463afa6b576de3"
			getMissingResultsUrl={({ query }) => `https://github.com/orgs/deepgram/discussions/new?category=q-a&title=Search+term+missing+results+%22${encodeURIComponent(query)}%22`}
			placeholder="Search..."
		/>,
		document.body
	);
}
