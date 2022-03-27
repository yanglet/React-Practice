import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

export default function CreateDay() {
    const days = useFetch("http://localhost:3001/days");
    const history = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    function addDay(e) {
        e.preventDefault();

        fetch(`http://localhost:3001/days/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                day : days.length + 1,
            }),
        })
            .then(res => {
                if (res.ok) {
                    alert("생성이 완료 되었습니다.");
                    history('/');
                    setIsLoading(false);
                }
            });
    }

    return (
        <div>
            <h3>현재 일수 : {days.length}일</h3>
            <button onClick={addDay} 
            style={{
                opacity: isLoading ? 0.3 : 1,
            }}>{isLoading ? "Saving..." : "Day 추가"}</button>
        </div>
    );
}