import {
  sideBarHTML,
  toggleMobileMenu,
  highlightActiveLink,
  mobileMenuBarHTML,
  mobileMenuHTML,
} from './helpers/Common.js';

const baseHTML = `
  <div class="w-full lg:w-4/5">
    ${mobileMenuBarHTML}
    ${mobileMenuHTML}
    <div class="p-3 lg:p-[200px]">
      <div class="flex justify-between">
        <h2 id="totalAmount" class="text-2xl lg:text-5xl text-indigo-500 font-bold p-4 mb-2"></h2>
        <h2 id="totalAccountNum" class="text-2xl lg:text-5xl text-gray-400 font-bold p-4 mb-2"></h2>
      </div>
      <div class="flex content-center items-center py-4 flex-wrap gap-3">
        <select id="accountSelector" class="border-2 border-indigo-500 px-2 py-1 lg:px-3 lg:py-2 rounded-3xl ml-4 text-xs lg:text-lg"></select>
        <select id="transactionTypeSelector" class="border-2 border-indigo-500 px-2 py-1 lg:px-3 lg:py-2 rounded-3xl ml-4 text-xs lg:text-lg"></select>
        <select id="categorySelector" class="border-2 border-indigo-500 px-2 py-1 lg:px-3 lg:py-2 rounded-3xl ml-4 text-xs lg:text-lg"></select>

      </div>
      <div id="wrapper" class="border-indigo-200 border-[2.5px] rounded-xl">
        <div id="accountList">
          <div class="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
            <table class="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
              <thead>
                <tr class="text-left">
                  <th class="text-xs lg:text-xl py-1 px-2 lg:py-4 lg:px-5 sticky top-0 border-b bg-indigo-200">From</th>
                  <th class="text-xs lg:text-xl py-1 px-2 lg:py-4 lg:px-5 sticky top-0 border-b bg-indigo-200">To</th>
                  <th class="text-xs lg:text-xl py-1 px-2 lg:py-4 lg:px-5 sticky top-0 border-b bg-indigo-200">Type</th>
                  <th class="text-xs lg:text-xl py-1 px-2 lg:py-4 lg:px-5 sticky top-0 border-b bg-indigo-200">Category</th>
                  <th class="text-xs lg:text-xl py-1 px-2 lg:py-4 lg:px-5 sticky top-0 border-b bg-indigo-200">Description</th>
                  <th class="text-xs lg:text-xl py-1 px-2 lg:py-4 lg:px-5 sticky top-0 border-b bg-indigo-200">Amount</th>
                  <th class="text-xs lg:text-xl py-1 px-2 lg:py-4 lg:px-5 sticky top-0 border-b bg-indigo-200">Balance</th>
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

$(document).ready(function () {
  $('body').addClass('flex h-screen').append(sideBarHTML).append(baseHTML);

  toggleMobileMenu();
  highlightActiveLink();
  getTransactions();
  setAccountSelector();
  setTransactionTypeSelector();
  setCategorySelector();
  setTotalAmount();
  setTotalAccountNum();
});

let filterParams = {
  accountId: null,
  type: null,
  categoryId: null,
};

const getTransactions = async (params) => {
  const res = await fetch('http://localhost:3000/transactions');
  const data = await res.json();
  const accounts = await getAccounts();
  const categories = await getCategories();

  if (params) {
    filterParams = { ...filterParams, ...params };
  }

  if (filterParams.accountId) {
    data[0] = data[0].filter(
      (transaction) => transaction.accountId === Number(filterParams.accountId)
    );
  }

  if (filterParams.type) {
    data[0] = data[0].filter(
      (transaction) => transaction.type.toLowerCase() === filterParams.type
    );
  }

  if (filterParams.categoryId) {
    data[0] = data[0].filter(
      (transaction) =>
        transaction.categoryId === Number(filterParams.categoryId)
    );
  }

  let tempBalance = 0;

  data[0].forEach((transaction) => {
    const {
      accountId,
      accountIdFrom,
      accountIdTo,
      type,
      categoryId,
      description,
      amount,
    } = transaction;
    let usernameFromDisplay = '';
    if (accounts) {
      const filteredAccounts = accounts.filter(
        (account) => account.id === accountIdFrom
      );
      if (filteredAccounts.length > 0) {
        usernameFromDisplay = filteredAccounts[0].username;
      } else if (type === 'Deposit') {
        usernameFromDisplay = '-';
      } else if (type === 'Withdraw') {
        usernameFromDisplay = accounts.filter(
          (account) => account.id === accountId
        )[0].username;
      }
    }
    let usernameToDisplay = '';
    if (accounts) {
      const filteredAccounts = accounts.filter(
        (account) => account.id === accountIdTo
      );
      if (filteredAccounts.length > 0) {
        usernameToDisplay = filteredAccounts[0].username;
      } else if (type === 'Deposit') {
        usernameToDisplay = accounts.filter(
          (account) => account.id === accountId
        )[0].username;
      } else if (type === 'Withdraw') {
        usernameToDisplay = '-';
      }
    }
    let categoryDisplay = '';
    if (categories) {
      const filteredCategories = categories.filter(
        (category) => category.id === categoryId
      );
      if (filteredCategories.length > 0) {
        categoryDisplay = filteredCategories[0].name;
      }
    }
    let amountDisplay = '';
    let amountDisplayColor = '';
    if (type === 'Deposit') {
      amountDisplay = `+$${amount.toLocaleString('en-US')}`;
      amountDisplayColor = 'text-green-500';
    } else if (type === 'Withdraw') {
      amountDisplay = `-$${amount.toLocaleString('en-US')}`;
      amountDisplayColor = 'text-red-500';
    } else if (type === 'Transfer') {
      if (accountId === accountIdFrom) {
        amountDisplay = `-$${amount.toLocaleString('en-US')}`;
        amountDisplayColor = 'text-red-500';
      } else {
        amountDisplay = `+$${amount.toLocaleString('en-US')}`;
        amountDisplayColor = 'text-green-500';
      }
    }
    let balance = 0;
    if (type === 'Deposit') {
      tempBalance += amount;
      balance = `$${tempBalance.toLocaleString('en-US')}`;
    } else if (type === 'Withdraw') {
      tempBalance -= amount;
      balance = `$${tempBalance.toLocaleString('en-US')}`;
    } else if (type === 'Transfer') {
      if (accountId === accountIdFrom) {
        tempBalance -= amount;
        balance = `$${tempBalance.toLocaleString('en-US')}`;
      } else {
        tempBalance += amount;
        balance = `$${tempBalance.toLocaleString('en-US')}`;
      }
    }

    $('#accountListItems').append(`
      <tr>
        <td class="border-dashed border-t border-gray-200 px-1 py-2 lg:px-4 lg:py-3 text-xs lg:text-lg font-semibold">${usernameFromDisplay}</td>
        <td class="border-dashed border-t border-gray-200 px-1 py-2 lg:px-4 lg:py-3 text-xs lg:text-lg font-semibold">${usernameToDisplay}</td>
        <td class="border-dashed border-t border-gray-200 px-1 py-2 lg:px-4 lg:py-3 text-xs lg:text-lg font-semibold">${type}</td>
        <td class="border-dashed border-t border-gray-200 px-1 py-2 lg:px-4 lg:py-3 text-xs lg:text-lg font-semibold">${categoryDisplay}</td>
        <td class="border-dashed border-t border-gray-200 px-1 py-2 lg:px-4 lg:py-3 text-xs lg:text-lg font-semibold">${description}</td>
        <td class="border-dashed border-t border-gray-200 px-1 py-2 lg:px-4 lg:py-3 text-xs lg:text-lg font-semibold ${amountDisplayColor}">${amountDisplay}</td>
        <td class="border-dashed border-t border-gray-200 px-1 py-2 lg:px-4 lg:py-3 text-xs lg:text-lg font-semibold">${balance}</td>
      </tr>
    `);
  });
};

const getAccounts = async () => {
  const res = await fetch('http://localhost:3000/accounts');
  const data = await res.json();

  return data;
};

const getCategories = async () => {
  const res = await fetch('http://localhost:3000/categories');
  const data = await res.json();

  return data;
};

const setAccountSelector = async () => {
  const accounts = await getAccounts();

  $('#accountSelector').append(`
    <option value="all">All Accounts</option>
    `);
  accounts.forEach((account) => {
    $('#accountSelector').append(`
      <option value="${account.id}">${account.username}</option>
    `);
  });

  $('#accountSelector').change(function () {
    $('#accountListItems').html('');
    const selectedAccountId = $('#accountSelector').val();
    if (selectedAccountId === 'all') {
      getTransactions();
    } else {
      getTransactions({ accountId: selectedAccountId });
    }
  });
};

const setTransactionTypeSelector = () => {
  $('#transactionTypeSelector').append(`
    <option value="all">All Transactions</option>
    <option value="deposit">Deposit</option>
    <option value="withdraw">Withdraw</option>
    <option value="transfer">Transfer</option>
  `);

  $('#transactionTypeSelector').change(function () {
    $('#accountListItems').html('');
    const selectedTransactionType = $('#transactionTypeSelector').val();
    if (selectedTransactionType === 'all') {
      getTransactions();
    } else {
      getTransactions({ type: selectedTransactionType });
    }
  });
};

const setCategorySelector = async () => {
  const categories = await getCategories();

  $('#categorySelector').append(`
    <option value="all">All Categories</option>
    `);
  categories.forEach((category) => {
    $('#categorySelector').append(`
      <option value="${category.id}">${category.name}</option>
    `);
  });

  $('#categorySelector').change(function () {
    $('#accountListItems').html('');
    const selectedCategoryId = $('#categorySelector').val();
    if (selectedCategoryId === 'all') {
      getTransactions();
    } else {
      getTransactions({ categoryId: selectedCategoryId });
    }
  });
};

const setTotalAmount = async () => {
  const accounts = await getAccounts();
  let totalAmount = 0;
  accounts.forEach((account) => {
    totalAmount += account.transactions.reduce((acc, curr) => {
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
    }, 0);
  });

  $('#totalAmount').html(`$${totalAmount.toLocaleString('en-US')}`);
};

const setTotalAccountNum = async () => {
  const accounts = await getAccounts();

  $('#totalAccountNum').html(`Total Acc: ${accounts.length}`);
};
