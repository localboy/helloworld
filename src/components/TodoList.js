import React, { useState } from "react";
import { connect } from "react-redux";
import {
    addTodos,
    completeTodos,
    removeTodos,
    updateTodos,
} from "../redux/reducer";
import TodoItem from "./todo/TodoItem";
import Todos from "./todo/Todos";


const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id)),
    };
};

const TodoList = (props) => {
    const [sort, setSort] = useState("active");
    return (
        <div className="row justify-content-center pt-3">
            <div className="col-md-8 col-sm-12">
                <Todos />
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" onClick={() => setSort("active")}>Active</button>
                    <button type="button" className="btn btn-primary" onClick={() => setSort("completed")}>Completed</button>
                    <button type="button" className="btn btn-primary" onClick={() => setSort("all")}>All</button>
                </div>
                <div className="displaytodos">

                    <ul className="list-group mt-2">
                        {props.todos.length > 0 && sort === "active"
                            ? props.todos.map((item) => {
                                return (
                                    item.completed === false && (
                                        <TodoItem
                                            key={item.id}
                                            item={item}
                                            removeTodo={props.removeTodo}
                                            updateTodo={props.updateTodo}
                                            completeTodo={props.completeTodo}
                                        />

                                    )
                                );
                            })
                            : null}
                        {/* for completed items */}
                        {props.todos.length > 0 && sort === "completed"
                            ? props.todos.map((item) => {
                                return (
                                    item.completed === true && (
                                        <TodoItem
                                            key={item.id}
                                            item={item}
                                            removeTodo={props.removeTodo}
                                            updateTodo={props.updateTodo}
                                            completeTodo={props.completeTodo}
                                        />
                                    )
                                );
                            })
                            : null}
                        {/* for all items */}
                        {props.todos.length > 0 && sort === "all"
                            ? props.todos.map((item) => {
                                return (
                                    <TodoItem
                                        key={item.id}
                                        item={item}
                                        removeTodo={props.removeTodo}
                                        updateTodo={props.updateTodo}
                                        completeTodo={props.completeTodo}
                                    />
                                );
                            })
                            : null}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);