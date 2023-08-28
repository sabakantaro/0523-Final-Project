const blueColor = "#6270E9";

$(document).ready(() => {
  $("body").append(`  <div class="px-12">
      <div class="text-[${blueColor}] text-left py-4 ml-2">
        <h2 class="text-2xl font-bold">Add New Categories</h2>
      </div>
      <div
        class="outline outline-[${blueColor}] text-[#212529] font-semibold rounded-md p-4 space-y-4"
      >
        <div class="flex flex-col justify-start space-y-1">
          <p class="text-xl">New Category :</p>
          <input
          id="new-category-input"
            type="text"
            class="border rounded-md px-4 py-2 focus:outline-none"
          />
          <div class="flex justify-end pt-2">
            <button id="add-category" class="bg-[${blueColor}] rounded-md text-[#fff] font-medium p-2">
              Add New Category
            </button>
          </div>
        </div>
        <div class="flex flex-col justify-start space-y-1">
          <p class="text-xl">All Categories :</p>
          <table class="border-collapse table-auto" id="category-table">
            <thead>
              <tr>
                <th class="border bg-gray-100 px-4 py-2 text-center">
                  Category Name
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>`);

  // func to display categories
  const displayCategories = async () => {
    // clear the current content
    $("#category-table").html("");
    const categories = await Category.getCategories();
    // append the data
    categories.forEach((category) => {
      const name = category.name;
      const categoryEle = `<tbody>
              <tr class="border">
               <td class="border pl-4 py-2 text-center">${name}</td>
              </tr>
            </tbody>`;
      $("#category-table").append(categoryEle);
    });
  };

  // func to create a new category
  const createNewCategory = () => {
    const inputValue = $("#new-category-input").val();
    Category.postNewCategory(inputValue);
    $("#new-category-input").val("");
    displayCategories();
  };

  $("#add-category").click(() => {
    createNewCategory();
  });

  // initially display the categories
  displayCategories();
});
