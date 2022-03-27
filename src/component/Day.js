
import { useNavigate, useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day() {
    const { day } = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    const history = useNavigate();

    function del() {
        if (window.confirm('삭제 하시겠습니까?')) {
            fetch(`http://localhost:3001/days/${day}`, {
                method: "DELETE",
            })
                .then(res => {
                    if (res.ok) {
                        history('/');
                    }
                })
        }
    }

    return (
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && (<span>Loading...</span>)}
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={del} className="btn_del">
                    Day {day} 삭제
                </button>
            </div>
        </>

    );
}