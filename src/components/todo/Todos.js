import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../../redux/reducer";

const mapStateToProps = (state) => {
	return {
		todos: state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (obj) => dispatch(addTodos(obj)),
	};
};

const Todos = (props) => {
	const [todo, setTodo] = useState("");

	const add = () => {
		if (todo === "") {
			alert("Input is Empty");
		} else {
			props.addTodo({
				id: Math.floor(Math.random() * 1000),
				item: todo,
				completed: false,
			});
			setTodo("");
		}
	};


	const handleChange = (e) => {
		setTodo(e.target.value);
	};

	return (
		<div class="input-group mb-3">
			<input
				type="text"
				class="form-control"
				placeholder="What do you need to do?"
				onChange={(e) => handleChange(e)}
				value={todo}
			/>
			<div class="input-group-append">
				<button class="btn btn-primary" type="button" onClick={() => add()}>Add</button>
			</div>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);