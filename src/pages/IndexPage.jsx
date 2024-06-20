import { useEffect, useState } from "react";
import http from "../plugin/http";
import mainStore from "../store/mainStore";
import SinglePokemon from "../components/SinglePokemon";
import FilterComponent from "../components/FilterComponent";

function IndexPage() {
  const { items, setItems, getAllTypes, getAllFamilies } = mainStore();
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    http.get(`/pokemons`).then((res) => {
      setItems(res);
      setFilteredItems(res);
    });
  }, [setItems]);

  const allTypes = getAllTypes();
  const allFamilies = getAllFamilies();

  function handleFilter(filters) {
    let filtered = items;
    if (filters.weightFrom) {
      filtered = filtered.filter((item) => item.weight >= filters.weightFrom);
    }
    if (filters.weightTo) {
      filtered = filtered.filter((item) => item.weight <= filters.weightTo);
    }
    if (filters.heightFrom) {
      filtered = filtered.filter((item) => item.height >= filters.heightFrom);
    }
    if (filters.heightTo) {
      filtered = filtered.filter((item) => item.height <= filters.heightTo);
    }
    if (filters.selectedType) {
      filtered = filtered.filter((item) =>
        item.types.includes(filters.selectedType)
      );
    }
    if (filters.selectedFamily) {
      filtered = filtered.filter(
        (item) => item.family === filters.selectedFamily
      );
    }

    setFilteredItems(filtered);
    console.log(filtered, "filtered items");
  }

  return (
    <div className="">
      <FilterComponent
        allTypes={allTypes}
        allFamilies={allFamilies}
        filter={handleFilter}
      />
      <div className="all-pokemons">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <SinglePokemon key={index} item={item} index={index} />
          ))
        ) : (
          <div>No items match the filter criteria.</div>
        )}
      </div>
    </div>
  );
}

export default IndexPage;
