import { useState } from "react";

function FilterComponent({ allTypes, allFamilies, filter }) {
  const [weightFrom, setWeightFrom] = useState("");
  const [weightTo, setWeightTo] = useState("");
  const [heightFrom, setHeightFrom] = useState("");
  const [heightTo, setHeightTo] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedFamily, setSelectedFamily] = useState("");

  function handleFilter() {
    filter({
      weightFrom,
      weightTo,
      heightFrom,
      heightTo,
      selectedType,
      selectedFamily,
    });
    console.log(filter);
  }
  function handleClear() {
    setWeightFrom("");
    setWeightTo("");
    setHeightFrom("");
    setHeightTo("");
    setSelectedType("");
    setSelectedFamily("");
    filter({});
  }

  return (
    <div className="filter-box">
      <div className="inputs">
        <label>Weight:</label>
        <div className="weight-filter">
          <input
            type="number"
            placeholder="Weight from"
            value={weightFrom}
            onChange={(e) => setWeightFrom(e.target.value)}
          />
          <input
            type="number"
            placeholder="Weight to"
            value={weightTo}
            onChange={(e) => setWeightTo(e.target.value)}
          />
        </div>
        <label>Height:</label>
        <div className="height-filter">
          <input
            type="number"
            placeholder="Height from"
            value={heightFrom}
            onChange={(e) => setHeightFrom(e.target.value)}
          />
          <input
            type="number"
            placeholder="Height to"
            value={heightTo}
            onChange={(e) => setHeightTo(e.target.value)}
          />
        </div>
        <label>Type:</label>
        <div className="type">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">--Please choose type--</option>
            {allTypes.map((x, i) => (
              <option value={x} key={i}>
                {x}
              </option>
            ))}
          </select>
        </div>
        <label>Family:</label>
        <div className="family">
          <select
            value={selectedFamily}
            onChange={(e) => setSelectedFamily(e.target.value)}
          >
            <option value="">--Please choose family--</option>
            {allFamilies.map((x, i) => (
              <option value={x} key={i}>
                {x}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="action-btns">
        <button onClick={handleFilter}>Filter</button>
        <button onClick={handleClear}>Clear filter</button>
      </div>
    </div>
  );
}

export default FilterComponent;
