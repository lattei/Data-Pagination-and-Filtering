/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
//As per requirements, we will be showing 9 icons per page
const itemsPerPage = 9;
/*
Declaring variables for Search Bar. SearchInput, SearchButton + HTML for Search Bar
*/
const studentList = document.querySelector('.student-list');
const header = document.querySelector('header');
header.insertAdjacentHTML('beforeend', `<label for="search" class="student-search">
<span>Search by name</span>
<input id="search" placeholder="Search by name...">
<button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>`
);
const searchInput = document.querySelector("#search");
const SearchButton = document.querySelector("button[type=button]");

searchInput.addEventListener('keyup', (e) => {
   
   const filteredData = [];
   const userInput = searchInput.value.toLowerCase();
   for (let i = 0; i < data.length; i++) {
      const studentName = `${data[i].name.first} ${data[i].name.last}`.toLowerCase();
      if (studentName.includes(userInput)) {
         filteredData.push(data[i]);
      }
   }
   if (filteredData.length > 0) {
      showPage(filteredData, 1);
      addPagination(filteredData);
   } else {
      studentList.innerHTML = `<h3>No results were found!</h3>`;
      linkedList.innerHTML = "";
   }

      
   });
/*
showPage fn that creates a list of icons and appends them to the studentlist ul.
*/

function showPage(list, page) {
   const start = (page * itemsPerPage) - itemsPerPage;
   const end = (page * itemsPerPage) - 1;
   const studentList = document.querySelector('.student-list');

   studentList.innerHTML = "";
   for (let i = 0; i < list.length; i++) {
      if (i >= start && i <= end) {
         const html = `<li class="student-item cf">
            <div class="student-details">
            <img class="avatar" src="${list[i].picture.large}" alt="Photo of ${list[i].name.first} ${list[i].name.last}">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
            </div>
         <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
         </div>
      </li>`;
      studentList.insertAdjacentHTML("beforeend", html);
      }

   }

}


/*
As per requirements
This function will create, then add or remove elements for pagination!

*/
const linkedList = document.querySelector(".link-list");
function addPagination(list) {
   const pageNumbers = Math.ceil(list.length / itemsPerPage);
   

   linkedList.innerHTML = "";
   for (let i = 1; i <= pageNumbers; i++) {
      const html = `<li>
            <button type="button">${i}</button>
         </li>`;
      linkedList.insertAdjacentHTML("beforeend", html);
   }
   linkedList.querySelector("button").classList.add("active");

   linkedList.addEventListener('click', (e) => {
      
      const clickedButton = e.target.closest("button");
      if (clickedButton) {
         const activeButton = linkedList.querySelector(".active");
         activeButton.className = "";
         clickedButton.classList.add("active");
         showPage(list, clickedButton.textContent);

      }


   })
};


// Call functions
showPage(data,1);
addPagination(data);





