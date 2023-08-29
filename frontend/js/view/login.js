const blueColor = "#6270E9";
const users = [{ userName: "Kinnikun Nakayama", password: "muscle" }];

$(document).ready(() => {
  $("body")
    .append(`  <div class="bg-gray-100 flex items-center justify-center h-screen">
    <div class="w-full max-w-xs">
      <div class="bg-[${blueColor}] text-white text-center py-4">
        <h2 class="text-2xl font-bold">User Login</h2>
      </div>
      <form
        id="login-form"
        class="bg-white border border-[${blueColor}] shadow-md rounded px-8 pt-6 pb-8 mt-4"
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            id="login-btn"
            class="bg-[${blueColor}] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Log In
          </button>
        </div>
      </form>
    </div>`);
  $("#login-btn").click(() => {
    const usernameInput = $("#username").val();
    const passwordInput = $("#password").val();
    for (let i = 0; i < users.length; i++) {
      const { userName, password } = users[i];
      if (userName === usernameInput && password === passwordInput) {
        alert("Logged in successfully!");
        window.location.href = "/frontend/index.html";
        return;
      }
    }
    alert("Failed to Login.");
  });
});
