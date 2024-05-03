import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [inputs, setInputs] = useState({
    person1: "",
    person2: "",
    person3: "",
    person4: "",
    unitAmount: "",
    aus: "",
    selectedPerson: "",
  });
  const [results, setResults] = useState({
    total1: 0,

    total2: 0,

    total3: 0,

    total4: 0,

    totalAus1: 0,

    totalAus2: 0,

    totalAus3: 0,

    totalAus4: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const calculateTotal = () => {
    // Parse values from state and ensure they are numbers
    const p1 = parseFloat(inputs.person1) || 0;
    const p2 = parseFloat(inputs.person2) || 0;
    const p3 = parseFloat(inputs.person3) || 0;
    const p4 = parseFloat(inputs.person4) || 0;
    const unitAmount = parseFloat(inputs.unitAmount) || 0;

    // Calculeaza minusurile si cat au pierdut
    const total1 = 0 + unitAmount * (-p1 * 3 + p2 + p3 + p4);
    const total2 = 0 + unitAmount * (-p2 * 3 + p1 + p3 + p4);
    const total3 = 0 + unitAmount * (-p3 * 3 + p2 + p1 + p4);
    const total4 = 0 + unitAmount * (-p4 * 3 + p2 + p3 + p1);

    // Calculeaza minusurile si cat au pierdut cu tot cu aus
    const totalAus1 =
      inputs.selectedPerson === "person1"
        ? total1 + 3 * parseFloat(inputs.aus)
        : total1 - parseFloat(inputs.aus);
    const totalAus2 =
      inputs.selectedPerson === "person2"
        ? total2 + 3 * parseFloat(inputs.aus)
        : total2 - parseFloat(inputs.aus);
    const totalAus3 =
      inputs.selectedPerson === "person3"
        ? total3 + 3 * parseFloat(inputs.aus)
        : total3 - parseFloat(inputs.aus);
    const totalAus4 =
      inputs.selectedPerson === "person4"
        ? total4 + 3 * parseFloat(inputs.aus)
        : total4 - parseFloat(inputs.aus);
    // Output results

    setResults({
      total1,

      total2,

      total3,

      total4,

      totalAus1,

      totalAus2,

      totalAus3,

      totalAus4,
    });
  };

  const isFormComplete = Object.values(inputs).every((value) => value !== "");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Calculator Cruce</h1>
        <div>
          <div>
            <span>Minus Persoana 1:</span>
            <input
              type="number"
              name="person1"
              value={inputs.person1}
              onChange={handleInputChange}
              placeholder="Minus persoana 1"
            />
          </div>
          <div>
            <span>Minus Persoana 2:</span>
            <input
              type="number"
              name="person2"
              value={inputs.person2}
              onChange={handleInputChange}
              placeholder="Minus persoana 2"
            />
          </div>
          <div>
            <span>Minus Persoana 3:</span>
            <input
              type="number"
              name="person3"
              value={inputs.person3}
              onChange={handleInputChange}
              placeholder="Minus persoana 3"
            />
          </div>
          <div>
            <span>Minus Persoana 4:</span>
            <input
              type="number"
              name="person4"
              value={inputs.person4}
              onChange={handleInputChange}
              placeholder="Minus persoana 4"
            />
          </div>
          <div>
            Valoare punct minus:
            <input
              type="number"
              name="unitAmount"
              value={inputs.unitAmount}
              onChange={handleInputChange}
              placeholder="Valoare Punct Minus"
            />
          </div>
          <div>
            Valoare aus:
            <input
              type="number"
              name="aus"
              value={inputs.aus}
              onChange={handleInputChange}
              placeholder="Valoare aus"
            />
          </div>
          <div>
            Castigator:
            <select
              name="selectedPerson"
              value={inputs.selectedPerson}
              onChange={handleInputChange}
            >
              <option value="">Castigator</option>
              <option value="person1">Persoana 1</option>
              <option value="person2">Persoana 2</option>
              <option value="person3">Persoana 3</option>
              <option value="person4">Persoana 4</option>
            </select>
          </div>
          <button onClick={calculateTotal} disabled={!isFormComplete}>
            Calculeaza
          </button>
        </div>

        <div className="results">
          <table>
            <caption>Totaluri Fără Aus</caption>

            <tbody>
              <tr>
                <th>Persoana 1</th>
                <th>Persoana 2</th>
                <th>Persoana 3</th>
                <th>Persoana 4</th>
              </tr>

              <tr>
                <td>{results.total1}</td>
                <td>{results.total2}</td>
                <td>{results.total3}</td>
                <td>{results.total4}</td>
              </tr>
            </tbody>
          </table>

          <table>
            <caption>Totaluri Cu Aus</caption>

            <tbody>
              <tr>
                <th>Persoana 1</th>
                <th>Persoana 2</th>
                <th>Persoana 3</th>
                <th>Persoana 4</th>
              </tr>

              <tr>
                <td>{results.totalAus1}</td>
                <td>{results.totalAus2}</td>
                <td>{results.totalAus3}</td>
                <td>{results.totalAus4}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
