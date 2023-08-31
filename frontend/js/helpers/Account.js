import {
  sideBarHTML,
  accountEndpoint,
  mobileMenuBarHTML,
  mobileMenuHTML,
  highlightActiveLink,
  toggleMobileMenu,
} from '../helpers/Common.js';

/**
 * HTML
 */
const baseHTML = `
  <div class="w-full lg:w-4/5">
  ${mobileMenuBarHTML}
  ${mobileMenuHTML}
    <div class=" p-3 lg:p-[200px]">
      <div class="flex justify-between">
        <h2 class="text-2xl lg:text-5xl text-indigo-500 font-bold p-4 mb-4">Add New Accounts</h2>
      </div>
      <div id="wrapper" class="border-indigo-400 border-[2.5px] rounded-xl p-4 lg:p-[2rem]">
        <form id="accountForm" class="space-y-4">
          <div class="w-full">
            <label for="newAccount" class="font-semibold text-lg lg:text-2xl">New Account:</label>
            <input type="text" id="newAccount" name="newAccount" class="text-md lg:text-xl border border-indigo-300 rounded-xl px-3 py-2 lg:px-4 lg:py-3 w-full">
          </div>
          <div class="grid justify-items-end">
            <button type="submit" class="bg-indigo-500 text-white px-3 py-2 lg:px-4 lg:py-3 rounded-xl text-sm lg:text-2xl">Add new Account</button>
          </div>
        </form>
        <div id="accountList" class="pt-[2rem]">
          <h2 class="text-lg lg:text-2xl font-semibold mb-4">Accounts Summary</h2>
          <div class="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
            <table class="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
              <thead>
                <tr class="text-left">
                  <th class="text-md lg:text-xl py-2 px-3 sticky top-0 border-b border-gray-200 bg-gray-100">Account</th>
                  <th class="text-md lg:text-xl py-2 px-3 sticky top-0 border-b border-gray-200 bg-gray-100">Balance</th>
                </tr>
              </thead>
              <tbody id="accountListItems" class="text-gray-700"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

const toastHTML = `
  <div id="accountToast" class="hidden w-full bg-green-500 text-white text-lg px-4 py-3 fixed -top-5">
    <p class="text-center">Account added successfully!</p>
  </div>
`;

/**
 * Account Class
 */
class Account {
  constructor() {
    this.init();
  }

  init() {
    $('body')
      .addClass('flex h-screen')
      .append(sideBarHTML)
      .append(baseHTML)
      .append(toastHTML);

    this.getAccounts();
    this.addAccount();
    toggleMobileMenu();
    highlightActiveLink();
  }

  getAccounts() {
    $.ajax({
      url: accountEndpoint,
      method: 'GET',
      success: function (response) {
        let accountListItems = '';
        response.forEach((account) => {
          accountListItems += `
            <tr>
              <td class="border-dashed border-t border-gray-200 text-center p-2">
                <p class="font-semibold text-sm lg:text-xl">${
                  account.username
                }</p>
              </td>
              <td class="border-dashed border-t border-gray-200 text-right p-2">
                <p class="font-semibold text-sm lg:text-xl">
                  $${account.transactions.reduce((acc, curr) => {
                    if (curr.type === 'Deposit') {
                      return acc + curr.amount;
                    } else if (curr.type === 'Withdraw') {
                      return acc - curr.amount;
                    } else if (curr.type === 'Transfer') {
                      if (curr.accountId === account.id) {
                        return acc - curr.amount;
                      } else {
                        return acc + curr.amount;
                      }
                    }
                  }, 0)}
                </p>
              </td>
            </tr>
          `;
        });
        $('#accountListItems').html(accountListItems);
      },
      error: function (error) {
        console.error('Error:', error);
      },
    });
  }

  addAccount() {
    $('#accountForm').submit(
      function (e) {
        e.preventDefault();

        const newAccount = $('#newAccount').val();

        $.ajax({
          url: accountEndpoint,
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
          this.getAccounts();
        }, 100);

        const toast = document.getElementById('accountToast');
        toast.classList.remove('hidden');
        gsap.fromTo(
          toast,
          { opacity: 0, y: 0 },
          { opacity: 1, y: 20, duration: 0.5, ease: 'power1.out' }
        );
        setTimeout(() => {
          gsap.fromTo(
            toast,
            { opacity: 1, y: 20 },
            { opacity: 0, y: 0, duration: 0.5, ease: 'power1.out' }
          );
        }, 2000);
      }.bind(this)
    );
  }
}

$(document).ready(function () {
  new Account();
});
