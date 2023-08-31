import { Category } from "../helpers/Category.js";
import {
  sideBarHTML,
  mobileMenuBarHTML,
  mobileMenuHTML,
  toggleMobileMenu,
  highlightActiveLink,
} from "../helpers/Common.js";

/**
 * HTML
 */
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

const toastHTML = `
  <div id="categoryToast" class="hidden w-full bg-green-500 text-white text-lg px-4 py-3 fixed -top-5">
    <p class="text-center">Category added successfully!</p>
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

  // initially display the categories
  displayCategories();
  toggleMobileMenu();
  highlightActiveLink();
});
