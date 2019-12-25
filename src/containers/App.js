import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css'

class App extends React.Component{
		constructor(){
			super()
			this.state={
				robots: [],
				searchfield: ''
			}
		}

		componentDidMount(){
				fetch('https://jsonplaceholder.typicode.com/users')
				.then(response=>{
					return response.json()
				})
				.then(users =>
					this.setState({robots: users})
				)
		}		

		OnSearchChange=(event)=>{
			this.setState({searchfield: event.target.value})
		}
	render(){
		const filterrobot=this.state.robots.filter(robot =>{
			return (robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())||
				robot.username.toLowerCase().includes(this.state.searchfield.toLowerCase()));
		})
		if(this.state.robots.length===0)
		{
			return <h1>LOADING</h1>;
		}
		else
		{
			return (
				<div className='tc'>
					<h1 className='f1'> ROBOFRIENDS </h1>
					<SearchBox searchchange={this.OnSearchChange}/>
					<Scroll>
						<CardList robots={filterrobot} />
					</Scroll>
				</div>
			);
		}
		
	}	
}

export default App;