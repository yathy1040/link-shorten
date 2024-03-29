import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

const showButton = (props, copied, setCopied) => {
	if (props.shortenedLink) {
		return (
			<CopyToClipboard text={props.shortenedLink}>
				<button className="btn btn-primary">Copy</button>
			</CopyToClipboard>
		);
	}
};
function DisplayLink(props) {
	return (
		<div>
			<h4>Link: {props.shortenedLink}</h4>
			<div>{showButton(props)}</div>
		</div>
	);
}

export default DisplayLink;
