import { useState } from "react";
import EnterLink from "./Components/EnterLink";
import DisplayLink from "./Components/DisplayLink";

function App() {
	const [shortLink, setShortLink] = useState("");
	const shortenLink = (link) => {
		const requestOptions = {
			method: "POST",
			headers: {
				Authorization: "a825ad1ed59275a3c841bb433d98152b2c932cb8",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				long_url: link,
			}),
		};

		fetch("https://api-ssl.bitly.com/v4/shorten", requestOptions)
			.then((response) => response.json())
			.then((data) => {
				if (data.link) {
					setShortLink(data.link);
				} else {
					setShortLink("You did not enter in a valid link");
				}
			});
	};

	return (
		<div className="container">
			<div className="row mt-3">
				<EnterLink enterLink={shortenLink} />
			</div>
			<div className="row mt-3">
				<DisplayLink shortenedLink={shortLink} />
			</div>
		</div>
	);
}

export default App;
