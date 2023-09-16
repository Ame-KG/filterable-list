let contactList = ['SAM', 'AME', 'RAY', 'JEFF', 'MILES', 'RATCHEL', 'LEONIE', 'ANASTASIA', 'MELODY', 'JAN', 'TEBOHO', 'GONTSE', 'MESHAYA', 'THABO', 'REA', 'EMILY']
const ul = document.querySelector('ul')
const contactbar = document.querySelector('.contact-input')
const contact_btn = document.querySelector('.contact-btn')
const deletebar = document.querySelector('.delete-input')
const delete_btn = document.querySelector('.delete-btn')

// logic for displaying the contact list
function append(list) {
	list.sort().forEach((item)=>{
	const contact = document.createElement('li')
	contact.innerHTML = item
	ul.appendChild(contact)
	})
}

// logic to empty the contact list ul feild
function clear(){
	const content = Array.from(ul.children)
	content.forEach((item)=>{
		item.remove()
	})
}

// list item deletion logic
function deleter(list, removee){
	const newlist = []
	list.forEach((item)=>{
		if (item != removee){
			newlist.push(item)
		}
	})
	return newlist
}

// reset, clear function
function resetContactsFeild(){
	clear()
	append(contactList)
}

// search filtering per typed key logic
function search_filter(input_bar){
	const searchMatchList = contactList.filter((item)=>{
	return item.startsWith(input_bar.value.toUpperCase())
	})
	clear()
	append(searchMatchList)
}


// adding a name Event listener
contact_btn.addEventListener('click', (e)=>{
	if (contactbar.value == ''){
		resetContactsFeild()
	}
	else{
		contactList.push(contactbar.value.toUpperCase())
		resetContactsFeild()
		contactbar.value = ''
	}
})

// search logic & event listener
contactbar.addEventListener('input', (e)=>{
	if (contactbar.value == ''){
		resetContactsFeild()
	}
	else {
		search_filter(contactbar)
	}
})

// list item deletion logic and event listener
delete_btn.addEventListener('click', (e)=>{
	if (deletebar.value == '') {
		resetContactsFeild()
	}
	else {
		contactList = deleter(contactList, deletebar.value.toUpperCase())
		resetContactsFeild()
	}
})

// deletion search filter
deletebar.addEventListener('input', (e)=>{
	if (deletebar.value == ''){
		resetContactsFeild()
	}
	else {
		search_filter(deletebar)
	}
})

// display default contacts
append(contactList)