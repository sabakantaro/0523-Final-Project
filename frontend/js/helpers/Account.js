const bodyClass = 'flex h-screen';

const baseHTML = `
  <div class="w-full lg:w-4/5 p-3 lg:p-[200px]">
    <div class="flex justify-between">
      <h2 class="text-2xl lg:text-5xl text-indigo-500 text-3xl font-bold p-4 mb-4">Add New Accounts</h2>
    </div>
    <div id="wrapper" class="border border-indigo-400 border-[2.5px] rounded-xl p-4 lg:p-[2rem]">
      <div>
        <form id="accountForm" class="space-y-4">
          <div class="w-full">
            <label for="newAccount" class="font-semibold text-2xl">New Account:</label>
            <input type="text" id="newAccount" name="newAccount" class="text-xl border border-indigo-300 rounded-xl px-4 py-3 w-full">
          </div>
          <div class="grid justify-items-end">
            <button type="submit" class="bg-indigo-500 text-white text-lg px-4 py-3 rounded-xl">Add new Account</button>
          </div>
        </form>
      </div>
      <div id="accountList" class="pt-[2rem]">
        <h2 class="text-2xl font-semibold mb-4">Accounts Summary</h2>
        <div class="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
          <table class="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
            <thead>
              <tr class="text-left">
                <th class="text-xl py-2 px-3 sticky top-0 border-b border-gray-200 bg-gray-100">Account</th>
                <th class="text-xl py-2 px-3 sticky top-0 border-b border-gray-200 bg-gray-100">Balance</th>
              </tr>
            </thead>
            <tbody id="accountListItems" class="text-gray-700">
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
`;

const sideBarHTML = `
  <div id="sidebar" class="hidden lg:flex flex-col items-center justify-between lg:w-1/5 bg-gray-100 py-16">
    <div class="px-14 mb-4 w-full">
      <h2 class="text-2xl lg:text-5xl text-indigo-500 text-3xl font-bold text-center">MyTrack</h2>
      <div class="flex flex-col space-y-8 pt-16">
        <a href="index.html" class="bg-indigo-300 hover:bg-indigo-400 font-semibold py-4 px-5 rounded-xl text-2xl text-gray-800 flex">
          <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 576 512">
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
          </svg>
          <p class="pl-5">Home</p>
        </a>
        <a href="categories.html" class="bg-indigo-300 hover:bg-indigo-400 font-semibold py-4 px-5 rounded-xl text-2xl text-gray-800 flex">
          <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 512 512">
            <path d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"/>
          </svg>
          <p class="pl-5">Categories</p>
        </a>
        <a href="accounts.html" class="bg-indigo-300 hover:bg-indigo-400 font-semibold py-4 px-5 rounded-xl text-2xl text-gray-800 flex">
          <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
          </svg>
          <p class="pl-5">Accounts</p>
        </a>
        <a href="transactions.html" class="bg-indigo-300 hover:bg-indigo-400 font-semibold py-4 px-5 rounded-xl text-2xl text-gray-800 flex">
          <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 512 512">
            <path d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"/>
          </svg>
          <p class="pl-5">Transactions</p>
        </a>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center space-y-4">
      <img src="../imgs/kinnikun.jpeg" alt="home" class="w-40 h-40 rounded-full border border-indigo-200 border-[10px]">
      <p class="text-2xl text-gray-800">Kinnikun Nakayama</p>
      <p class="text-xl text-gray-800">kinnikun@gmail.com</p>
  </div>
`;

const toastHTML = `
  <div id="accountToast" class="grid justify-items-center hidden w-full bg-green-500 text-white text-lg px-4 py-3 fixed -top-5">
    <p>Account added successfully!</p>
  </div>
`;

$(document).ready(function () {
  $('body')
    .addClass(bodyClass)
    .append(sideBarHTML)
    .append(baseHTML)
    .append(toastHTML);
  getAccounts();
  addAccount();
});

function getAccounts() {
  $.ajax({
    url: 'http://localhost:3000/accounts',
    method: 'GET',
    success: function (response) {
      console.log('Success:', response);
      let accountListItems = '';
      response.forEach((account) => {
        accountListItems += `
          <tr>
            <td class="border-dashed border-t border-gray-200 text-center p-2">
              <p class="font-semibold text-xl">${account.username}</p>
            </td>
            <td class="border-dashed border-t border-gray-200 text-right p-2">
              <p class="font-semibold text-xl">
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
    });

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
  });
}
