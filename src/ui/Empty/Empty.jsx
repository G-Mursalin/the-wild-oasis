function Empty({ resourceName }) {
  return <p>No {resourceName || "data"} could be found.</p>;
}

export default Empty;
