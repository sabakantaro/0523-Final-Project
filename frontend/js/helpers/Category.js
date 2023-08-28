const baseUrl = "http://localhost:3000/";
const url = `${baseUrl}categories`;
class Category {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  // get all categories
  static async getCategories() {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Failed to fetch categories");
      } else {
        const data = await res.json();
        return data;
      }
    } catch (err) {
      console.error(err);
    }
  }

  // get a category　* might be unnecessary
  static async getCategoryWithId(id) {
    const categories = await Category.getCategories();
    if (!categories) {
      throw new Error("Failed to fetch categories");
    }

    for (let i = 0; i < categories.length; i++) {
      let cur = categories[i];
      if (cur.id === id) return cur;
    }
    throw new Error("There's no user with this id.");
  }

  // post a new category
  static async postNewCategory(newCategory) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newCategory,
      }),
    };
    fetch(url, requestOptions)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
      })
      .catch((error) => {
        console.error(error);
        throw new Error("Couldn't post a new category.");
      });
  }
}

// module.exports = Category;
