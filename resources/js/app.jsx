import "./bootstrap";
import ReactDOM from "react-dom/client";

const App = () => {
    return <div>HELLO WORLD 111111</div>;
};

export default App;

if (document.getElementById("root")) {
    ReactDOM.createRoot(document.getElementById("root")).render(<App />);
}
