import { useState } from "react";

function EnterLink(props) {
	const [link, setLink] = useState("");

	const shortenButtonPressed = () => {
		props.enterLink(link);
		setLink("");
	};

	return (
		<div className="container">
			<div className="row">
				<h3>Enter in a link to shorten:</h3>
			</div>
			<div className="row">
				<label htmlFor="enter-link">Link:</label>
				<input
					id="enter-link"
					type="text"
					className="form-control"
					value={link}
					onChange={(e) => setLink(e.target.value)}
				/>
			</div>
			<div className="row mt-3">
				<button
					type="button"
					className="btn btn-primary"
					onClick={shortenButtonPressed}
				>
					Shorten
				</button>
			</div>
		</div>
	);
}

export default EnterLink;
