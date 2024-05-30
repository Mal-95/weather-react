import React from "react";

export default function Foorter() {
    return (
        <footer>
            This project is coded by {" "}
            <a href="https://github.com/Mal-95" className="GithubLink" target="_blank" rel="noreferrer">
                <strong>Malebo Letsoalo</strong>
                </a>
            {" "}and is on {" "}
            <a href="https://github.com/Mal-95/weather-react" className="RepoLink" target="_blank" rel="noreferrer"><strong>GitHub</strong></a>
            {" "}and hosted on {" "}
            <a href="https://weather-react-app-challenge.netlify.app/" target="_blank" rel="noreferrer"><strong>Netlify</strong></a>
        </footer>
    );
}