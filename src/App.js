import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="b-wrapper">
				<Header />
				<Nav state={props.state.navbar} />
				<div className="b-wrapper-content">
					<Route
						path="/dialogs"
						render={() => (
							<Dialogs state={props.state.dialodsPage} />
						)}
					/>
					<Route
						path="/profile"
						render={() => (
							<Profile
								state={props.state.profilePage}
								addPost={props.addPost}
							/>
						)}
					/>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
