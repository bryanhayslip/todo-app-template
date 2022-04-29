export async function getToDos() {
	const response = await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/bryanhayslip"
	);
	const payload = await response.json();

	return payload;
}

export async function createToDos() {
	const response = await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/bryanhayslip",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([]),
		}
	);
}
export async function deleteToDos() {
	const response = await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/bryanhayslip",
		{
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([]),
		}
	);
}
export async function putToDos() {
	const response = await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/bryanhayslip",
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([]),
		}
	);
}