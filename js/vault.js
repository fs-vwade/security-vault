const body = document.body;
const elements = {
	form: {
		self: document.createElement("form"),
		ul: document.createElement("ul"),
		submit: document.createElement("button"),
		result: document.createElement("div"),
	},
	fields: [
		{
			label: "Combination 1",
			input: document.createElement("input"),
		},
		{
			label: "Combination 2",
			input: document.createElement("input"),
		},
		{
			label: "Combination 3",
			input: document.createElement("input"),
		},
	],
};
const sequence = {
	message:
		"You have received this message because you have been chosen to open an important vault. Here is the secret combination:",
	keys: {
		1: 5 + 5, //10, // should this be an equation? (unsure)
		2: 30 + 100 / 10,
		3: 3 * 13,
	},
	combination: undefined,
};
sequence.combination = `${sequence.keys[1]}-${sequence.keys[2]}-${sequence.keys[3]}`;
console.log(sequence.message, sequence.combination);
alert(`${sequence.message} ${sequence.combination}`);

//Object.entries(elements).forEach((e) => {
elements.fields.forEach((e) => {
	const list_item = document.createElement("li");

	list_item.append(e.label);
	list_item.append(e.input);
	elements.form.ul.append(list_item);
});

elements.form.self.append(elements.form.ul);
elements.form.self.append(elements.form.submit);
elements.form.self.append(elements.form.result);
body.append(elements.form.self);
