/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

const itemsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
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
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   const pageNumbers = Math.ceil(list.length / itemsPerPage);
   const linkedList = document.querySelector(".link-list");

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
}


// Call functions
showPage(data,1);
addPagination(data);
