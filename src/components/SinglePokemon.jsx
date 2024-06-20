function SinglePokemon({ item, index }) {
  return (
    <div>
      <div className="each-pokemon">
        {index + 1}
        <div>{item.name}</div>
        <div>Family: {item.family}</div>
        <div>Height: {item.height}</div>
        <div>Weight: {item.weight}</div>
        <div>
          {item.types.length >= 2 ? (
            <>
              Types:
              <ul>
                {item.types.map((type, index) => (
                  <li key={index}>{type}</li>
                ))}
              </ul>
            </>
          ) : item.types.length === 1 ? (
            `Type: ${item.types[0]}`
          ) : (
            "Pokemon does not have type"
          )}
        </div>
      </div>
    </div>
  );
}

export default SinglePokemon;
