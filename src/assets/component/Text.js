import { useState } from "react";

function Test() {
    const [job, setJob] = useState("");
    const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem("todos")) || []);

    function HandleSubmit() {
        setJobs(prev => {
            localStorage.setItem("todos", JSON.stringify([...prev, job]))
            return [...prev, job];
        });

        setJob("");
    }


    return (
        <div className="layout">
            <div>
                <div>
                    <label>Việc nhà:</label>
                    <input
                        className="ma-l-12 ma-r-12" type="text"
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                    />
                    <button onClick={HandleSubmit}>Thêm việc</button>
                </div>

                <div>
                    <ul>
                        {jobs.map((job, index) => (
                            <li key={index}>{job}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Test;