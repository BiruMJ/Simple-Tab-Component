// Selectors
const tabButtons = document.getElementsByClassName('tab-btn');
const tabContents = document.getElementsByClassName('tab-content');

// Function to remove active classes
function clearActiveClasses() {
  for (let i = 0; i < tabButtons.length; i++) { //tabButtons.length = 3
    tabButtons[i].classList.remove('active');  //tabButtons[0] = tab1
    tabContents[i].classList.remove('active');  //tabContents[0] = tab1
  }
}

// Function to activate the clicked tab
function activateTab(tabId, clickedButton) {
  document.getElementById(tabId).classList.add('active');
  clickedButton.classList.add('active');
}

// Attach event listeners using a loop
for (let i = 0; i < tabButtons.length; i++) {    //tabButtons.length = 3
  tabButtons[i].addEventListener('click', function () {   //tabButtons[0]
    const targetTab = this.getAttribute('data-tab');  //targetTab = tabButtons[0].getAttribute('data-tab') >>> targetTab = tab1
    // this = <button class="tab-btn" data-tab="tab2">Tab 2</button>
    clearActiveClasses();
    activateTab(targetTab, this);   //activateTab(tab1, [the clicked button element])
  });
}
