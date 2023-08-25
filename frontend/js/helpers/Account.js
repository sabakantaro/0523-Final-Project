const bodyClass = 'flex h-screen';

const baseHTML = `
<div class="w-3/4 p-4 overflow-y-auto m-auto">
  <div id="wrapper" class="border border-indigo-500">
  <h2 class="text-2xl font-semibold mb-4">Add New Accounts</h2>
  <form id="accountForm" class="space-y-4">
    <div class="w-full">
      <label for="newAccount" class="font-medium">New Account:</label>
      <input type="text" id="newAccount" name="newAccount" class="border border-indigo-300 rounded-lg px-3 py-2">
    </div>
    <button type="submit" class="bg-indigo-500 text-white px-3 py-2 rounded">Add new Account</button>
  </form>
  <div id="accountList" class="mt-4">
    <h2 class="text-2xl font-semibold mb-4">Accounts</h2>
    <ul id="accountListItems" class="space-y-2"></ul>
  </div>
</div>
`;

const sideBarHTML = `
<div id="sidebar" class="w-1/4 bg-gray-100 text-white p-4 flex flex-col">
</div>
`;

$(document).ready(function () {
  $('body').addClass(bodyClass).append(sideBarHTML);
  $('body').append(baseHTML);
  getAccounts();
  addAccount();
});

function getAccounts() {
  $.ajax({
    url: 'http://localhost:3000/accounts',
    method: 'GET',
    success: function (response) {
      console.log('Success:', response);
      const accountListItems = response.map(
        (account) => `<li>${account.username}</li>`
      );
      const transactionListItems = response.map((account) => {
        const transactions = account.transactions.map((transaction) => {
          return `<li>${transaction.type} ${transaction.amount}</li>`;
        });
        return `<li>${account.username}<ul>${transactions.join('')}</ul></li>`;
      });
      $('#accountListItems').html(accountListItems);
      $('#transactionListItems').html(transactionListItems);
    },
    error: function (error) {
      console.error('Error:', error);
    },
  });
}

function addAccount() {
  $('#accountForm').submit(function (e) {
    e.preventDefault();

    const newAccount = $('#newAccount').val();

    $.ajax({
      url: 'http://localhost:3000/accounts',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ newAccount: newAccount }),
      success: function (response) {
        console.log('Success:', response);
      },
      error: function (error) {
        console.error('Error:', error);
      },
    });
    setTimeout(() => {
      getAccounts();
    }, 200);
  });
}
