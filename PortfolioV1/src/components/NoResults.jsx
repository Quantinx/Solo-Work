function NoResults({ displayElement = false }) {
  return (
    <div style={{ display: displayElement ? "block" : "none" }}>
      <div>No results found </div>
    </div>
  );
}

export default NoResults;
