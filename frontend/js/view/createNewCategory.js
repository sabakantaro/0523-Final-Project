// const blueColor = "#6270E9";

/**
 * Icons
 */
const arrowRightIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 448 512">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
  </svg>
`;

const mobileMenuBarIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="1.8em" viewBox="0 0 448 512" fill="#fff">
    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
  </svg>
`;

const mobileMenuBarHTML = `
  <div id="mobileMenuBar" class="flex lg:hidden justify-between items-center bg-indigo-400 py-4 px-8 w-full">
    <div class="flex items-center space-x-4">
      <h2 class="text-2xl lg:text-5xl text-white font-bold">MyTrack</h2>
    </div>
    <div id="mobileMenuBtn" class="flex items-center justify-center">
      ${mobileMenuBarIcon}
    </div>
  </div>
`;

const homeIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 576 512">
    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
  </svg>
`;

const categoriesIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 512 512">
    <path d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"/>
  </svg>
`;

const accountsIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 512 512">
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
  </svg>
`;

const transactionsIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 512 512">
    <path d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"/>
  </svg>
`;

/**
 * HTML
 */
const mobileMenuHTML = `
  <div id="mobileMenu" class="hidden lg:hidden space-y-4 px-4 absolute bg-white w-full">
    <a href="index.html" class="flex items-center space-x-4 p-2 w-full border-b">
      ${homeIcon}
      <p class="pl-5">Home</p>
    </a>
    <a href="categories.html" class="flex items-center space-x-4 p-2 w-full border-b">
      ${categoriesIcon}
      <p class="pl-5">Categories</p>
    </a>
    <a href="accounts.html" class="flex items-center space-x-4 p-2 w-full border-b">
      ${accountsIcon}
      <p class="pl-5">Accounts</p>
    </a>
    <a href="categories.html" class="flex items-center space-x-4 p-2 w-full border-b">
      ${transactionsIcon}
      <p class="pl-5">Transactions</p>
    </a>
  </div>
`;

const baseHTML = `
  <div class="w-full lg:w-4/5">
  ${mobileMenuBarHTML}
  ${mobileMenuHTML}
    <div class=" p-3 lg:p-[200px]">
      <div class="flex justify-between">
        <h2 class="text-2xl lg:text-5xl text-indigo-500 font-bold p-4 mb-4">Add New Categories</h2>
      </div>
      <div id="wrapper" class="border-indigo-400 border-[2.5px] rounded-xl p-4 lg:p-[2rem]">
        <form id="categoryForm" class="space-y-4">
          <div class="w-full">
            <label for="newCategory" class="font-semibold text-lg lg:text-2xl">New Category:</label>
            <input type="text" id="newCategory" name="newCategory" class="text-md lg:text-xl border border-indigo-300 rounded-xl px-3 py-2 lg:px-4 lg:py-3 w-full">
          </div>
          <div class="grid justify-items-end">
            <button type="submit" class="bg-indigo-500 text-white px-3 py-2 lg:px-4 lg:py-3 rounded-xl text-sm lg:text-2xl">Add new Category</button>
          </div>
        </form>
        <div id="categoryList" class="pt-[2rem]">
          <h2 class="text-lg lg:text-2xl font-semibold mb-4">All Categories</h2>
          <div class="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
            <table class="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
              <thead>
                <tr class="text-left">
                  <th class="text-md lg:text-xl py-2 px-3 sticky top-0 border-b border-gray-200 bg-gray-100">Category Name</th>
                </tr>
              </thead>
              <tbody id="categoryListItems" class="text-gray-700"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

const sideBarHTML = `
  <div id="sidebar" class="hidden lg:flex flex-col items-center justify-between lg:w-1/5 bg-gray-100 py-16">
    <div class="px-14 mb-4 w-full">
      <h2 class="text-2xl lg:text-5xl text-indigo-500 font-bold text-center">MyTrack</h2>
      <div class="flex flex-col space-y-8 pt-16">
        <a href="index.html" class="bg-indigo-300 hover:bg-indigo-400 font-semibold py-4 px-5 rounded-xl text-2xl text-gray-800 flex relative">
          ${homeIcon}
          <p class="pl-5">Home</p>
          <div class="absolute top-[25%] right-8 hidden">
            ${arrowRightIcon}
          </div>
        </a>
        <a href="categories.html" class="bg-indigo-300 hover:bg-indigo-400 font-semibold py-4 px-5 rounded-xl text-2xl text-gray-800 flex relative">
          ${categoriesIcon}
          <p class="pl-5">Categories</p>
          <div class="absolute top-[25%] right-8 hidden">
            ${arrowRightIcon}
          </div>
        </a>
        <a href="accounts.html" class="bg-indigo-300 hover:bg-indigo-400 font-semibold py-4 px-5 rounded-xl text-2xl text-gray-800 flex relative">
          ${accountsIcon}
          <p class="pl-5">Accounts</p>
          <div class="absolute top-[25%] right-8 hidden">
            ${arrowRightIcon}
          </div>
        </a>
        <a href="transactions.html" class="bg-indigo-300 hover:bg-indigo-400 font-semibold py-4 px-5 rounded-xl text-2xl text-gray-800 flex relative">
          ${transactionsIcon}
          <p class="pl-5">Transactions</p>
          <div class="absolute top-[25%] right-8 hidden">
            ${arrowRightIcon}
          </div>
        </a>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center space-y-4">
      <img src="../imgs/kinnikun.jpeg" alt="home" class="w-40 h-40 rounded-full border-indigo-200 border-[10px]">
      <p class="text-2xl text-gray-800">Kinnikun Nakayama</p>
      <p class="text-xl text-gray-800">kinnikun@gmail.com</p>
    </div>
  </div>
`;

const toastHTML = `
  <div id="categoryToast" class="hidden w-full bg-green-500 text-white text-lg px-4 py-3 fixed -top-5">
    <p class="text-center">Category created successfully!</p>
  </div>
`;

$(document).ready(() => {
  $("body")
    .addClass("flex h-screen")
    .append(sideBarHTML)
    .append(baseHTML)
    .append(toastHTML);

  // func to display categories
  const displayCategories = async () => {
    // clear the current content
    $("#categoryListItems").html("");
    const categories = await Category.getCategories();
    // append the data
    categories.forEach((category) => {
      const name = category.name;
      const categoryEle = `
              <tr class="border">
               <td class="border pl-4 py-2 text-center">${name}</td>
              </tr>
            `;
      $("#categoryListItems").append(categoryEle);
    });
  };

  // func to create a new category
  const createNewCategory = (e) => {
    e.preventDefault();
    const inputValue = $("#newCategory").val();
    Category.postNewCategory(inputValue);
    const toast = document.getElementById("categoryToast");
    toast.classList.remove("hidden");
    gsap.fromTo(
      toast,
      { opacity: 0, y: 0 },
      { opacity: 1, y: 20, duration: 0.5, ease: "power1.out" }
    );
    setTimeout(() => {
      gsap.fromTo(
        toast,
        { opacity: 1, y: 20 },
        { opacity: 0, y: 0, duration: 0.5, ease: "power1.out" }
      );
    }, 2000);
  };

  $("#categoryForm").submit((e) => {
    createNewCategory(e);
  });

  const highlightActiveLink = () => {
    const currentPath = window.location.pathname.split("/").pop();
    $("#sidebar a").each(function () {
      const href = $(this).attr("href").split("/").pop();

      if (currentPath === href) {
        console.log(this);
        $(this).addClass("bg-indigo-500");
        $(this).children("div").removeClass("hidden");
        $(this).children("svg").children("path").attr("fill", "#fff");
        $(this)
          .children("div")
          .children("svg")
          .children("path")
          .attr("fill", "#fff");
        $(this).children("p").addClass("text-white");
      }
    });
  };

  const toggleMobileMenu = () => {
    $("#mobileMenuBtn").click(function () {
      if ($("#mobileMenu").hasClass("hidden")) {
        $("#mobileMenu").removeClass("hidden");
        gsap.fromTo(
          "#mobileMenu",
          { opacity: 0, y: 0 },
          { opacity: 1, y: 20, duration: 0.5, ease: "power1.out" }
        );
      } else {
        gsap.fromTo(
          "#mobileMenu",
          { opacity: 1, y: 20 },
          {
            opacity: 0,
            y: 0,
            duration: 0.5,
            ease: "power1.out",
            onComplete: function () {
              $("#mobileMenu").addClass("hidden");
            },
          }
        );
      }
    });
  };

  // initially display the categories
  displayCategories();
  toggleMobileMenu();
  highlightActiveLink();
});
