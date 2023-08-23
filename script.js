	const input = document.querySelector('#fruit');
	const suggestions = document.querySelector('.suggestions ul');
	const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
	let results;
	let inputVal;

	// This function filters the fruit array based on the given search string
	function search(str) {
		let results = [];
		results = fruit.filter(fruitName => fruitName.toLowerCase().includes(str.toLowerCase()));
		// TODO
		return results;
	}
// This function is triggered when the user types in the search input
	function searchHandler(e) {
		// TODO
		inputVal = e.target.value.toLowerCase(); // Convert user input to lowercase
		results = search(inputVal); // Get the filtered search results
		showSuggestions(results, inputVal); // Update and display suggestions
	}
	// This function displays the suggestions in the dropdown
	function showSuggestions(results, inputVal) {
		// Clear previous suggestions
		suggestions.innerHTML = '';
		// Create and append suggestion items to the dropdown
		results.forEach(result => {
			const suggestionItem = document.createElement('li');
			suggestionItem.textContent = result;
			suggestions.appendChild(suggestionItem);
		});
		suggestions.style.display = 'block';// Display the dropdown suggestions

	}
// This function is triggered when a suggestion is clicked
function useSuggestion(e) {
	if (e.target.tagName === 'LI') {
		input.value = e.target.textContent; // Set input value to clicked suggestion
		suggestions.style.display = 'none'; // Hide the dropdown
	}

	const highlightedIndex = results.findIndex(result => result.toLowerCase().includes(inputVal.toLowerCase()));
	// Add 'highlight' class to the suggestion that matches the input value
	if (highlightedIndex !== -1) {
		suggestions.children[highlightedIndex].classList.add('highlight');
	}
	
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
