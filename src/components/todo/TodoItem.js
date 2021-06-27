import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

const TodoItem = (props) => {

	const { item, updateTodo, removeTodo, completeTodo } = props;

	const inputRef = useRef(true);

	const changeFocus = () => {
		inputRef.current.disabled = false;
		inputRef.current.focus();
	};

	const update = (id, value, e) => {
		if (e.which === 13) {
			//here 13 is key code for enter key
			updateTodo({ id, item: value });
			inputRef.current.disabled = true;
		}
	};
	return (
		<li
			key={item.id}
			className="card mt-2"
		>
			<div className="card-body">
				<div className="row">
					<div className="col-md-11 col-sm-10 col-xs-6">
						<textarea
							className="form-control"
							ref={inputRef}
							disabled={inputRef}
							defaultValue={item.item}
							onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
							rows={3}
						/>
					</div>
					<div className="col-md-1 col-sm-2 col-xs-4">
						<div className="btn-group-vertical btn-group-sm" role="group" aria-label="Basic example">
							<button type="button" className="btn btn-outline-primary" onClick={() => changeFocus()}><AiFillEdit /></button>
							{item.completed === false ?
								<button type="button" className="btn btn-outline-success" onClick={() => completeTodo(item.id)}><IoCheckmarkDoneSharp /></button>
								: <button type="button" className="btn btn-success disabled"><IoCheckmarkDoneSharp /></button>}
							<button type="button" className="btn btn-outline-danger" onClick={() => removeTodo(item.id)}><IoClose /></button>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};

export default TodoItem;