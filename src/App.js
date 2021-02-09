function App() {
  return (
    <button
      onClick={() =>
        fetch("/api/test")
          .then((res) => res.text())
          .then((text) => console.log(text))
      }
    >
      TEST SERVER
    </button>
  );
}

export default App;
