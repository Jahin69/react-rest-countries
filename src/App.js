import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}
// function Countries() {
//   const [countries, setCountires] = useState([]);
//   useEffect(() => {
//     fetch("https://restcountries.com/v3/all")
//       .then(res => res.json())
//       .then(data => setCountires(data));
//   }, []);
//   console.log(countries);
//   return (
//     <div>
//       {
//         countries.map(country => <Country name={country.name.common}></Country>)
//       }
//     </div>
//   );
// }

// function Country(props) {
//   return (
//     <div>
//       <h2>Name:{props.name}</h2>
//     </div>
//   );
// }

export default App;
