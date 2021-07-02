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
			<h1>Link Shortener Website Project (DevProjects)</h1>
			<p>
				This is my first project I (Yathusan T.) has created for DevProjects and
				I am hoping to create more int he future. I know this is simple but it
				does work as intended.
			</p>
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
