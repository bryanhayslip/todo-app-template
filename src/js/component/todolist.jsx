import React from "react";
import { getToDos, createToDos } from "../api";

export const TodoList = () => {
	const [todos, setTodos] = React.useState([]);
	const [task, setTask] = React.useState("");

	React.useEffect = () => {
		const fn = async () => {
			const apiTodos = await getToDos();
			setList(apiTodos.map((x) => x.label));
			};
			fn();
			}, [];
	

	return (
		<div>
			<input
				value={task}
				onChange={(ev) => setTask(ev.currentTarget.value)}
				onKeyDown={(ev) => {
					if (ev.key === "Enter") {
						setTodos([...todos, task]);
						setTask("");
					}
				}}
			/>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</div>
	);
};
