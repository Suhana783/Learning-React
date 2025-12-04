import { useState, useEffect } from 'react';

function AutoGreet() {

    const [text, setText] = useState("");
    const [hour, setHour] = useState(null);

    useEffect(() => {
        const h = new Date().getHours();
        setHour(h);
    }, []);

    function handleGreet() {
        if (hour < 12) {
            setText("Good Morning");
        } else if (hour < 16) {
            setText("Good Afternoon");
        } else {
            setText("Good Evening");
        }
    }

    return (
        <>
            <div>
                <p>{text}</p>
                <button onClick={handleGreet}>Greet</button>
            </div>
        </>
    )
}

export default AutoGreet;
