const CurrentModule = (props) => {
  return (
    <div>
      <p>Studying {props.name}</p>
    </div>
  );
};

const Modules = () => {
  return (
    <div>
      <CurrentModule name="Front-End Web Development"></CurrentModule>
      <CurrentModule name="Machine Learning and Data Analytics"></CurrentModule>
      <CurrentModule name="Artificial Intelligence"></CurrentModule>
      <CurrentModule name="Secure Software Development"></CurrentModule>
      <CurrentModule name="Honours Project"></CurrentModule>
    </div>
  );
};

const domContainer = document.querySelector("#moduleContainer");
const root = ReactDOM.createRoot(domContainer);
root.render(<Modules />);
