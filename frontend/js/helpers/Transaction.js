import {
  categoryEndpoint,
  transactionEndpoint,
  accountEndpoint,
  sideBarHTML,
  toggleMobileMenu,
  highlightActiveLink,
} from '../helpers/Common.js';

const baseHTML = `

<main class="w-full lg:w-4/5 flex-col lg:flex items-center justify-center">

<!-- mobile menu -->
<div id="mobileMenuBar" class="flex lg:hidden justify-between items-center bg-indigo-400 py-4 px-8 w-full">
  <div class="flex items-center space-x-4">
    <h2 class="text-2xl lg:text-5xl text-white font-bold">MyTrack</h2>
  </div>
  <div id="mobileMenuBtn" class="flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" height="1.8em" viewBox="0 0 448 512" fill="#fff">
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
    </svg>
  </div>
</div>
<div id="mobileMenu" class="hidden lg:hidden space-y-4 px-4 absolute z-10 bg-white w-full">
  <a href="index.html" class="flex items-center space-x-4 p-2 w-full border-b">
    <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 576 512">
      <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path>
    </svg>
    <p class="pl-5">Home</p>
  </a>
  <a href="categories.html" class="flex items-center space-x-4 p-2 w-full border-b">
    <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 512 512">
      <path d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"></path>
    </svg>
    <p class="pl-5">Categories</p>
  </a>
  <a href="accounts.html" class="flex items-center space-x-4 p-2 w-full border-b">
    <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 512 512">
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
    </svg>
    <p class="pl-5">Accounts</p>
  </a>
  <a href="categories.html" class="flex items-center space-x-4 p-2 w-full border-b">
    <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 512 512">
      <path d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"></path>
    </svg>
    <p class="pl-5">Transactions</p>
  </a>
</div>

<!-- Transaction card -->
<div class="lg:w-2/3 max-w-screen-md  p-[20px]">
  <form id="transactionForm" class="border-2 border-indigo-400 rounded-xl">

    <!-- card header -->
    <div class="flex justify-between px-2.5 md:px-8 py-4 border-b-2 border-b-indigo-400 rounded">
      <button type="button"  id="depositButton" class="type-button w-[30%] md:px-4 py-2 rounded-md transition text-white text-xs md:text-base focus:outline-none active:bg-indigo-500 active:text-white bg-indigo-500" data-radio-id="deposit">
        Deposit
      </button>
      <button type="button" id="withdrawButton" class="type-button w-[30%] md:px-4 py-2 rounded-md transition text-black text-xs md:text-base focus:outline-none active:bg-indigo-500 active:text-white bg-indigo-300" data-radio-id="withdraw">
        Withdraw
      </button>
      <button type="button" id="transferButton" class="type-button w-[30%] md:px-4 py-2 rounded-md transition text-black text-xs md:text-base focus:outline-none active:bg-indigo-500 active:text-white bg-indigo-300" data-radio-id="transfer">
        Transfer
      </button>
    </div>
    <div class="hidden">
      <input type="radio" name="type" id="deposit" name="transactionType" value="1" checked>
      <input type="radio" name="type" id="withdraw" name="transactionType" value="2">
      <input type="radio" name="type" id="transfer" name="transactionType" value="3">
    </div>

    <!-- card body -->
    <div class="px-2.5 md:px-8 py-4">
      <div class="flex flex-col items-center gap-10">

        <div class="flex flex-col justify-between gap-2 w-full md:flex-row md:gap-10 md:items-center">
          <label for="accountId" class="block w-[10%]">Account:</label>
          <div class="w-full relative md:w-[80%]">
            <select name="accountId" id="accountId" class="w-full appearance-none bg-white border border-indigo-300 py-2 px-4 pr-10 rounded-lg leading-tight focus:outline-none focus:shadow-outline">
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-indigo-400">
                <i class="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-between gap-2 w-full md:flex-row md:gap-10 md:items-center">
          <label for="category" class="block w-[10%]">Category:</label>
          <div class="w-full relative md:w-[80%]">
            <select id="category" name="categoryId" class="w-full appearance-none bg-white border border-indigo-300 py-2 px-4 pr-10 rounded-lg leading-tight focus:outline-none focus:shadow-outline">
              <option value="">---</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-indigo-400">
                <i class="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>

        <!-- Show if the type is "Transfer" -->
        <div id="transferTo" class="hidden flex flex-col justify-between gap-2 w-full md:flex-row md:gap-10 md:items-center">
          <label for="" class="block w-[10%]">To:</label>
          <div class="w-full relative md:w-[80%]">
            <select name="accountIdTo" id="accountIdTo" class="w-full appearance-none bg-white border border-indigo-300 py-2 px-4 pr-10 rounded-lg leading-tight focus:outline-none focus:shadow-outline">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-indigo-400">
                <i class="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-between gap-2 w-full md:flex-row md:gap-10 md:items-center">
          <label for="" class="block w-[10%]">Description:</label>
          <input type="text" name="description" class="w-full md:w-[80%] appearance-none bg-white border border-indigo-300 py-2 px-4 pr-10 rounded-lg leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div class="flex flex-col justify-between gap-2 w-full md:flex-row md:gap-10 md:items-center">
          <label for="" class="block w-[10%]">Amount:</label>
          <input type="text" name="amount" class="w-full md:w-[80%] appearance-none bg-white border border-indigo-300 py-2 px-4 pr-10 rounded-lg leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div class="flex items-center justify-center gap-10 w-full">
          <button type="button" id="cancelButton" class="w-32 p-1.5 border border-red-500 rounded-lg text-red-500 hover:opacity-75">
            Cancel
          </button>
          <button type="submit" class="w-32 p-1.5 border border-green-500 rounded-lg bg-green-500 text-white hover:opacity-75">
            Confirm
          </button>
        </div>
      </form>
    </div>
  </form>
</div>
</main>
`;

//------------------------------------
// Initial setup
//------------------------------------
$(document).ready(() => {
  $('body').addClass('flex h-screen').append(sideBarHTML).append(baseHTML);

  toggleMobileMenu();
  highlightActiveLink();
});

//------------------------------------
// API call
//------------------------------------

/**
 * Get all categories
 *
 */
const getCategories = () => {
  $.ajax({
    url: categoryEndpoint,
    type: 'GET',
    success: (response) => {
      const select = $('#category');

      response.forEach((v) => {
        const option = $('<option>');
        option.val(v.id);
        option.text(v.name);
        select.append(option);
      });
    },
    error: (err) => {
      console.error(err);
    },
  });
};

/**
 * Create new transaction
 *
 * @param {*} reqBody
 */
const createNewTransaction = (reqBody) => {
  $.ajax({
    url: transactionEndpoint,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(reqBody),
    success: (response) => {
      console.log(response);
      alert('Success!');
      resetForm();
    },
    error: (err) => {
      console.error(err);
      alert('Something went wrong...');
    },
  });
};

const getAccounts = () => {
  $.ajax({
    url: accountEndpoint,
    type: 'GET',
    success: (response) => {
      console.log(response);
      const select = $('#accountId');
      const transferToSelect = $('#accountIdTo');

      transferToSelect.empty(); // Clear existing options

      response.forEach((account) => {
        const option = $('<option>');
        option.val(account.id);
        option.text(account.username);

        select.append(option);
        transferToSelect.append(option.clone()); // Create a new option for transferToSelect
      });
    },
    error: (err) => {
      console.error(err);
    },
  });
};

/**
 *
 *
 * @param { [key: newAccount]: string } reqBody
 */
const createNewAccount = (reqBody) => {
  $.ajax({
    url: accountEndpoint,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(reqBody),
    success: (response) => {
      console.log(response);
    },
    error: (err) => {
      console.error(err);
    },
  });
};

//------------------------------------
// Functions
//------------------------------------

const transactionTypesAndIds = {
  Deposit: 1,
  Withdraw: 2,
  Transfer: 3,
};

/**
 * Save new transaction
 *
 * @param {*} e
 */
const saveTransaction = (e) => {
  e.preventDefault();

  const accountId = Number($("select[name='accountId']").val());
  const typeId = Number($("input[name='type']:checked").val());
  const accountIdFrom =
    typeId === transactionTypesAndIds.Transfer ? accountId : null;
  const accountIdTo =
    typeId === transactionTypesAndIds.Transfer
      ? Number($("select[name='accountIdTo']").val())
      : null;

  const body = {
    newTransaction: {
      accountId,
      accountIdFrom,
      accountIdTo,
      type: Object.keys(transactionTypesAndIds).find(
        (key) => transactionTypesAndIds[key] === typeId
      ),
      amount: Number($("input[name='amount']").val()),
      categoryId: Number($("select[name='categoryId']").val()),
      description: $("input[name='description']").val(),
    },
  };

  console.log(body);

  createNewTransaction(body);
};

const resetForm = () => {
  // Reset form values
  $('#transactionForm')[0].reset();

  // Reset type button active
  $('.type-button').each((index, btn) => {
    if (btn.id === 'depositButton') {
      $(btn).removeClass('bg-indigo-300').addClass('bg-indigo-500 text-white');
    } else {
      $(btn).removeClass('bg-indigo-500 text-white').addClass('bg-indigo-300');
    }
  });

  // Reset transferTo section visibility
  $('#transferTo').addClass('hidden');
};

//------------------------------------
// Event listeners
//------------------------------------
$(function () {
  getCategories();

  // change checked prop of a corresponding radio when a type button is clicked
  $('.type-button').click(function () {
    const radioId = $(this).data('radio-id');
    $(`#${radioId}`).prop('checked', true);
  });

  $('#transactionForm').submit(function (e) {
    saveTransaction(e);
  });
});

// Create accounts
const defaultAccounts = ['account1', 'account2', 'account3'];
const createDefaultAccounts = async () => {
  for (const accountName of defaultAccounts) {
    await createNewAccount({ newAccount: accountName });
  }
};
const checkAccountsExist = () => {
  $.ajax({
    url: accountEndpoint,
    type: 'GET',
    success: (response) => {
      const accountsExist = response.length > 0;
      if (!accountsExist) {
        createDefaultAccounts();
      }
    },
    error: (err) => {
      console.error(err);
    },
  });
};
window.addEventListener('DOMContentLoaded', async () => {
  checkAccountsExist();
  await getAccounts();
});

// Type buttons
$(document).on('click', '.type-button', function() {
  $('.type-button').removeClass('bg-indigo-500 text-white').addClass('bg-indigo-300');
  $(this).removeClass('bg-indigo-300').addClass('bg-indigo-500 text-white');

  if (this.id === 'transferButton') {
    $('#transferTo').removeClass('hidden');
  } else {
    $('#transferTo').addClass('hidden');
  }
});


// Cancel button
$(function () {
  let cancelButton = $('#cancelButton');
  if (cancelButton) {
    cancelButton.click(function () {
      resetForm();
    });
  }
});

// Toggle mobile button
$('#mobileMenuBtn').click(function () {
  if ($('#mobileMenu').hasClass('hidden')) {
    $('#mobileMenu').removeClass('hidden');
    gsap.fromTo(
      '#mobileMenu',
      { opacity: 0, y: 0 },
      { opacity: 1, y: 20, duration: 0.5, ease: 'power1.out' }
    );
  } else {
    gsap.fromTo(
      '#mobileMenu',
      { opacity: 1, y: 20 },
      {
        opacity: 0,
        y: 0,
        duration: 0.5,
        ease: 'power1.out',
        onComplete: function () {
          $('#mobileMenu').addClass('hidden');
        },
      }
    );
  }
});
