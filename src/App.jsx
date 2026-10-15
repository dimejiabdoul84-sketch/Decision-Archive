import { useState } from 'react'
import './App.css'


function App() {

  const [data, setData] = useState([
    {
      id: 1,
      type: "Decision Extract",
      title: "Decision Extract from statutory senate",
      dateApproved: "input date",
      summary: "Approved by Senate at its statutory meeting",
        },
        {
            id: 2,
            type: "Decision Extract",
            title: "Decision Extract from the special senate",
            dateApproved: "input date",
            summary: "Approved by senate at its special senate meeting",
        },
        {
            id:3,
            type: "promotion",
            title: "Promotion to the profesorial cadre",
            dateApproved: "input date",
            summary: "approved by senate at its statutory meeting"
        },
        {
            id:4,
            type: "academic calendar",
            title: "approved academic calendar",
            dateApproved: "input date",
            summary: "approved at the statutory meeting of senate"
        },
        {
            id:5,
            type: "Commitee of Deans matters",
            title: "reccomendation from the commitee of Deans",
            dateApproved: "input date",
            summary: "from the regular meeting of the commitee of deans",
        },
        {
            id:6,
            type: "appointment of subcommitees",
            title: "Constituted subcommitee of senate",
            dateApproved: "input date",
            summary: "from the statutory meeting of senate"
        }])
        const [titleInput, setTitleInput] = useState("")
        const [typeInput, setTypeInput] = useState("Decision Extract")
        const [dateInput, setDateInput] = useState("")
        const [summaryInput, setSummaryInput] = useState("")
      function findRecordById(id){
            let record = data.find(r=> r.id === id)
            if(!record){
              return null
            }
            return record
          }
      
        function AddRecord() {
        if (!titleInput || !dateInput) {
          alert("kindly fill in the title and date")
          return
        }
        let newRecord = {
          id: data.length + 1,
          type: typeInput,
          title: titleInput,
          dateApproved: dateInput,
          summary: summaryInput
        }
        setData([...data, newRecord])
        setTitleInput("")
        setDateInput("")
        setSummaryInput("")
      }

  return (
    <>
      <h1>SENATE UNIT DECISIONS ARCHIVE</h1>

      <div className="ticks"></div>

      <section>
        {data.map((r) => (
          <div key={r.id} className="record-card">
            <b>{r.type}</b><br />
            Title: {r.title}<br />
            Date Approved: {r.dateApproved}<br />
            Summary: {r.summary}
          </div>
        ))}
      </section>

      <button onClick={AddRecord}>add Record</button>
      <button onClick={() => console.log(findRecordById(3))}>Find Record</button>

      <section>
        <h2>add New Record</h2>

        <input
          type="text"
          placeholder="Enter title"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />

        <select value={typeInput} onChange={(e) => setTypeInput(e.target.value)}>
          <option value="Decision Extract">Decision Extract</option>
          <option value="Commitee of Deans matters">Commitee of Deans matters</option>
          <option value="promotion">promotion</option>
          <option value="academic calendar">academic calendar</option>
          <option value="appointment of subcommitees">appointment of subcommitees</option>
        </select>

        <input
          type="date"
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
        />
        <p> {typeInput}</p>

        <textarea
          placeholder="Enter summary"
          value={summaryInput}
          onChange={(e) => setSummaryInput(e.target.value)}
        />
        <p>: {summaryInput}</p>
      </section>

      <div className="ticks"></div>
    </>
  )
}

export default App
