//import carApi from "./apis/car";

function App() {
  const handleClick = async () => {
    //const res = await carApi.getCars();
    //console.log(res);
  };
  return (
    <button type="button" onClick={handleClick}>
      모든 차 불러오기
    </button>
  );
}

export default App;
