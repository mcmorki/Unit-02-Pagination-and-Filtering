
const student_list = document.getElementsByClassName('student-item cf');// accesses the dom by classname ( student-item cf) then stores items in a variable. 

const itemsPerPage = 10;//Creates a variable to store the number of items to show per page


//Displays a page of only 10 students page to hide all the students except for the ten you want displayed on a given page.
const showPage = (list, page) => {
   let startIndex = (page * 10) - 10;//chooses the first items index in the student list and display on 10 per page
   let endIndex = (page * 10);// limits the about of items being shown on the page, so that it does not include the 10th index value.

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = 'block'
      } else {
         list[i].style.display = 'none'
      }
   }
}

const appendPageLinks = (list) => {
   const pagingLinks = document.createElement("div");
   pagingLinks.className = "pagination"
   const howManyPages = Math.ceil(list.length / itemsPerPage)


   document.querySelector(".page").appendChild(pagingLinks)
   const ul = document.createElement("ul")
   pagingLinks.appendChild(ul)


   for (let i = 1; i <= howManyPages; i++) {
      const li = document.createElement("li")
      const a = document.createElement("a")
      a.textContent = i
      a.href = "#"
      if (i === 1) {
         a.className = "active"
      }
      li.appendChild(a);
      ul.appendChild(li);

   }
   ul.addEventListener("click", (e) => {
      const btn = event.target;
      let number = event.target.textContent
      showPage(list, number);
      let btns = document.querySelectorAll("a");
      for (let i = 0; i < btns.length; i++) {
         btns[i].className = "none"
      }
      btn.className = "active"
   });



}

showPage(student_list, 1)
appendPageLinks(student_list);

const searchBar = document.createElement("div")
const input = document.createElement("input");
const button = document.createElement("button")
const pageHeader = document.querySelector("div.page-header")
searchBar.appendChild(input)
searchBar.appendChild(button)
pageHeader.appendChild(searchBar)


const ul = document.createElement("ul")
const li = document.createElement("li")
const a = document.createElement("a")
ul.appendChild(li)
li.appendChild(a)
searchBar.className = "student-search"
input.setAttribute("placeholder", "Search for students...")
button.innerText = "Search"
searchBar.appendChild(input);


var results = []
// create Search
const searchTool = () => {

   results = []


   for (i = 0; i < student_list.length; i++) {
      if (student_list[i].textContent.toUpperCase().includes(input.value.toUpperCase())) {
         student_list[i].style.display = "block";
         results.push(student_list[i])
      } else {
         student_list[i].style.display = "none";

      }
   }
}
button.addEventListener("click", (e) => {
   searchTool()
   showPage(results, 1)
   appendPageLinks(results)
   const page = document.querySelector(".page")
   const presentPaging = document.querySelector('div.pagination');
   page.removeChild(presentPaging)

});

input.addEventListener('keyup', (e) => {
   searchTool()
   showPage(results, 1)
   appendPageLinks(results)
   const page = document.querySelector(".page")
   const presentPaging = document.querySelector('div.pagination');
   page.removeChild(presentPaging)

});








