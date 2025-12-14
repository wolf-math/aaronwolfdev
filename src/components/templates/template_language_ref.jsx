export default function template({ title, definition, usage, operations, dunder, methods }) {
  return (
    <div>
      <h1>{title}</h1>

      <h2>Definition</h2>
      <p>{definition}</p>

      <h2>Usage</h2>
      
      usage.map(use => {
        <h3>{use.}
      })

      
      
    </div>
  );
}