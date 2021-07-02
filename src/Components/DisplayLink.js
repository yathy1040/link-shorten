import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

const showButton = (props, copied, setCopied) => {
	if (props.shortenedLink) {
		return (
			<CopyToClipboard text={props.shortenedLink}>
				<button>Copy</button>
			</CopyToClipboard>
		);
	}
};
function DisplayLink(props) {
	return (
		<div>
			<h2>Link: {props.shortenedLink}</h2>
			<div>{showButton(props)}</div>
		</div>
	);
}

export default DisplayLink;
