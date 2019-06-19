const student_list = document.getElementsByClassName('student-item cf');
const itemsPerPage = 10;



const showPage = (list, page) => {
   let startIndex = (page * 10) - 10;
   let endIndex = (page * 10);

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = 'block'
      } else {
         list[i].style.display = 'none'
      }
   }
}



const appendPageLinks = (list) => {
   // TODO If pagination div exists remove it
const pagingLinks = document.createElement("div");
pagingLinks.className = "pagination"
const presentPaging = document.querySelector('div.pagination')
let howManyPages = Math.ceil(list.length / itemsPerPage)
   

   document.querySelector(".page").appendChild(pagingLinks)
   const ul = document.createElement("ul")
   pagingLinks.appendChild(ul)


      for (let i = 1; i <= howManyPages; i++) {
      const li = document.createElement("li")
      const a = document.createElement("a")
      if (i === (howManyPages)) {
         howManyPages += a
      }
      li.appendChild(a);
      ul.appendChild(li);
      a.innerText = i
     
   }
} 

//Calling the show page function, passing in the global variable for the list items, and the number 1 for the first page.
//Calling the append page links function, passing in as an argument, the global variable for the list items.
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
ul.remove(li)
li.remove(a)
searchBar.classList.add("student-search")
input.placeHolder = "Search for students"
button.innerText = "Search"
searchBar.appendChild(input);
const emptyArray = []

var results = []

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
  };
  button.addEventListener("click", () => {
input.addEventListener('keyup', searchTool)

   searchTool()
   showPage(results, 1)
  appendPageLinks(results)

  
})




