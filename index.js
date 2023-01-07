const wrapper = document.querySelector(".warpper"),
	searchInput = wrapper.querySelector("input"),
	volume = wrapper.querySelector(".word i"),
	infoText = wrapper.querySelector(".info-text"),
	synonyms = wrapper.querySelector(".synonyms .list"),
	removeIcon = wrapper.querySelector(".search span");
let audio;


function data (result, word) {
	if (result.title){
		infoText.innerHTML = `Unable to find the meaning of <span>"${word}"</span>. Please, search another word.`
	} else {
		wrapper.classList.add("active");
		let definitions = result [0].meaning[0].definition[0],
			phontetics = `${result[0].meaning[0].partOfSpeech} /${result[0].phonetics[0].text}/`;
	}
}