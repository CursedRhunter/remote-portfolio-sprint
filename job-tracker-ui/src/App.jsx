import { useState } from "react";

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  function addJob(e) {
    e.preventDefault();
    if (!company || !role) return;

    const newJob = {
      id: Date.now(),
      company,
      role,
      status,
    };

    setJobs([newJob, ...jobs]);
    setCompany("");
    setRole("");
    setStatus("Applied");
  }

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", fontFamily: "Arial" }}>
      <h1>Job Tracker</h1>

      <form onSubmit={addJob} style={{ display: "grid", gap: 10 }}>
        <input
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Rejected</option>
        </select>

        <button type="submit">Add</button>
      </form>

      <hr style={{ margin: "20px 0" }} />

      <h2>Applications</h2>

      {jobs.length === 0 ? (
        <p>No jobs yet. Add your first one.</p>
      ) : (
        <ul style={{ display: "grid", gap: 10, padding: 0 }}>
          {jobs.map((job) => (
            <li
              key={job.id}
              style={{
                listStyle: "none",
                border: "1px solid #ddd",
                padding: 12,
                borderRadius: 8,
              }}
            >
              <strong>{job.company}</strong> — {job.role}
              <div style={{ marginTop: 6, fontSize: 14 }}>
                Status: <b>{job.status}</b>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
