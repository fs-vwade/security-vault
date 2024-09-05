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
