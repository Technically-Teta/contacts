import { useState, useEffect } from "react";
import BookCard from "./bookcard";

const Books = (props) => {

    const [verses, setVerses] = useState([]);

    const loadData = () => {
        fetch('http://localhost:3003/api/verses')
            .then((response) => response.json())
            .then(data => {
                setVerses(data);
            })
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div className="Container">
            <div className='verses-container'>
                <span>Page 1</span>/{verses.length}
            </div>
            {verses.map((bible, index) => {
                return <BookCard key={index} bible={bible} />
            })}
        </div>
    )

}

export default Books;