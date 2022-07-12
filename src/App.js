// import logo from './logo.svg';
// import './App.css';
import TypewriterComponent from "typewriter-effect";

function App() {
	return (
		<div className="App">
			{/* <img src={logo} className="App-logo" alt="logo" /> */}
			<TypewriterComponent
				// onInit={(typewriter) => {
				// 	typewriter
				// 		.typeString("Hi Dad")
				// 		.pauseFor(2000)
				// 		.deleteAll()
				// 		.typeString("Hi Mom")
				// 		.deleteAll()
				// 		.start();
				// }}
				options={{
					strings: ["Please Like", "subscribe", "share"],
					loop: true,
					autoStart: true,
				}}
			/>
			{/* Edit and save to reload. */}
		</div>
	);
}

export default App;
