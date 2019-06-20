
const student_list = document.getElementsByClassName('student-item cf');// accesses the dom by classname ( student-item cf) then stores items in a variable. 

const itemsPerPage = 10;//Creates a variable to store the number of items to show per page


//Displays a page of only 10 students page to hide all the students except for the ten you want displayed on a given page.
const showPage = (list, page) => {
   let startIndex = (page * 10) - 10;// accesses the first item in the array index
   let endIndex = (page * 10);// accesses the last item in the array index 

   for (let i = 0; i < list.length; i++) {//filtering through any given list
      if (i >= startIndex && i < endIndex) { // if each item is betwwen the two indexs

         list[i].style.display = 'block'// display each item as a block 
      } else {                          //if it is not between the two indexs
         list[i].style.display = 'none'// hide the items
      }
   }
}
// creates pagination links to any given list passed through it. 
const appendPageLinks = (list) => {

   const howManyPages = Math.ceil(list.length / itemsPerPage) //calculates the number of pages needed for the list being shown.
   const pagingLinks = document.createElement("div");//creating the html paging links
   pagingLinks.className = "pagination"// declaring "pagination" as a class
   const ul = document.createElement("ul")//Creating an unordered list 
   pagingLinks.appendChild(ul)// Appending the unorderd list in the div container


   document.querySelector(".page").appendChild(pagingLinks)// Adding my container onto my HTML by accessing CSS selector named ".page"




   for (let i = 1; i <= howManyPages; i++) {//filtering through the total number of pages 
      const li = document.createElement("li")//Creating the list tags
      const a = document.createElement("a")//Creating an anchor tag for my pagination links to be placed.
      a.textContent = i //links are now displayed as numbers
      a.href = "#" // texts are switched to clickable links
      if (i === 1) {// classifying links as active 
         a.className = "active"
      }
      ul.appendChild(li);// adding my list into my unordered list {EX: <ul><li></li></ul>}
      li.appendChild(a);// adding my anchor tag into my list
      /***  Ex:
            <ul>
               <li>
                   <a></a>
               </li> 
            </ul>
      ***/


   }//listens for a click event 
   ul.addEventListener("click", (e) => { // When the listener hears a click on pagination links show the appropriate page.
      const pagingLinkBtns = event.target;//targets where the user clicks
      let paginationNumber = event.target.textContent// points to which number was clicked on
      showPage(list, paginationNumber);// show page that was clicked
      let linkedBtns = document.querySelectorAll("a");//storing all links ito a variable 
      for (let i = 0; i < linkedBtns.length; i++) {//filtering through the total number of links 
         linkedBtns[i].className = "none"// makes all links inactive
      }
      pagingLinkBtns.className = "active"// turns CLICKED link active
   });



}

showPage(student_list, 1)//when page is load shows the first page
appendPageLinks(student_list);// show the correct amount of pagination links for the list passed through it

const searchBar = document.createElement("div")//Creating a div tag 
const input = document.createElement("input");//Creating a input tag 
const button = document.createElement("button")//Creating a button tag 
const pageHeader = document.querySelector("div.page-header")
searchBar.appendChild(input)// placing my input inside the div 
searchBar.appendChild(button)//nesting my button in the div 
pageHeader.appendChild(searchBar)//appending my completed search bar to the html

/***  Ex:        
      <div>
         <input>
             <button></button>
      </div>
***/


const ul = document.createElement("ul")//Creating a ul tag 
const li = document.createElement("li")//Creating a li tag 
const a = document.createElement("a")//Creating a anchor tag 
ul.appendChild(li)//nesting my list in the unorederd list
li.appendChild(a)//nesting my anchor tag in the list
searchBar.className = "student-search"// declaring "student-search" as a class
input.setAttribute("placeholder", "Search for students...")// tells the users what to type 
button.innerText = "Search"// displays "search" on the button.
searchBar.appendChild(input);//appends the users search 
var results = []// empty array to store the users input

const searchTool = () => {

   results = []

   for (i = 0; i < student_list.length; i++) {//filtering through the total number of students
      if (student_list[i].textContent.toUpperCase().includes(input.value.toUpperCase())) {
         student_list[i].style.display = "block";//show results
         results.push(student_list[i])

      } else {
         student_list[i].style.display = "none";//hide results 

      }
   }
}
button.addEventListener("click", (e) => { // listening for user click 
   searchTool()
   showPage(results, 1)
   appendPageLinks(results)
   const page = document.querySelector(".page") //accessing the class name ".page" storing it in a  variable 
   const presentPaging = document.querySelector('div.pagination');//accessing the div and the class pagination storing it in a  variable 
   page.removeChild(presentPaging)//remove the pagination if it is not need  

});

input.addEventListener('keyup', (e) => { // listening for keyup when user searches
   searchTool()
   showPage(results, 1)
   appendPageLinks(results)
   const page = document.querySelector(".page")//accessing the class name ".page" storing it in a  variable 
   const presentPaging = document.querySelector('div.pagination');//accessing the div and the class pagination storing it in a  variable 
   page.removeChild(presentPaging)//remove the pagination if it is not need  

});








