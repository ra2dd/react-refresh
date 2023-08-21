/*
<head>
        <title>Javascript refresh</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />

        <link href="./stylesheets/main.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins" />
</head>
*/

import { useState } from 'react';

function createTitle(title) {
    return title ? title : 'Default title'
}

function Header(props) {

    return <h2>Text added with ReactDom. { createTitle(props.title) }</h2>;
}

export default function HomePage() {
    const names = ['Name1', 'Name2', 'Name3'];
    const [likes, setLikes] = useState(0)
    
    function handleClick() {
        setLikes(likes + 1);
    }
    
    return (
        <div>
            <Header title="Props in React."/>
            <Header title="Another title."/>

            <ul>
                {names.map(
                    (name) => (
                        <li key={name}>{ name }</li>
                    )
                )}
            </ul>

            <button onClick={handleClick}>Likes ({likes})</button>
        </div>
    );
}
