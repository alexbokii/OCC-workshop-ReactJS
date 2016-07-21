var ToDoList = React.createClass({
	render: function() {
		return <h1>"Hello I'm to do list"</h1>;
	}
});

ReactDOM.render(
	<ToDoList />, document.getElementById('todo')
);