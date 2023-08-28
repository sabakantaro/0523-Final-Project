// API endpoint
const baseUrl = 'http://localhost:3000'
const categoryEndpoint = `${baseUrl}/categories`
const transactionEndpoint = `${baseUrl}/transactions`
const accountEndpoint = `${baseUrl}/accounts`

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

      response.forEach(v => {
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
}

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
    },
    error: (err) => {
      console.error(err);
    },
  });
}

const getAccounts = () => {
  $.ajax({
    url: accountEndpoint,
    type: 'GET',
    success: (response) => {
      console.log(response);
      const select = $('#accountId');
      const transferToSelect = $('#accountIdTo');

      transferToSelect.empty(); // Clear existing options

      response.forEach(account => {
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
}

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
    const accountIdFrom = typeId === transactionTypesAndIds.Transfer ? accountId : null;
    const accountIdTo = typeId === transactionTypesAndIds.Transfer ? Number($("select[name='accountIdTo']").val()) : null;

    const body =   {
      newTransaction:{
        accountId,
        accountIdFrom,
        accountIdTo,
        type: Object.keys(transactionTypesAndIds).find(key => transactionTypesAndIds[key] === typeId),
        amount: Number($("input[name='amount']").val()),
        categoryId: Number($("select[name='categoryId']").val()),
        description: $("input[name='description']").val(),
      }
    }

    console.log(body);

    createNewTransaction(body);
}

//------------------------------------
// Event listeners
//------------------------------------
$(function() {
  getCategories();

  // change checked prop of a corresponding radio when a type button is clicked
  $('.type-button').click(function() {
    const radioId = $(this).data('radio-id');
    $(`#${radioId}`).prop('checked', true);
  });

  $('#transactionForm').submit(function(e) {
    saveTransaction(e);
  })
});

// Create accounts
const defaultAccounts = [
  'account1',
  'account2',
  'account3',
];
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
      accountsExist = response.length > 0;
      if (!accountsExist) {
        createDefaultAccounts();
      }
    },
    error: (err) => {
      console.error(err);
    },
  });
}
window.addEventListener('DOMContentLoaded', async () => {
  checkAccountsExist();
  await getAccounts();
});

// Type buttons
const typeButtons = document.querySelectorAll('.type-button');

typeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    typeButtons.forEach((btn, i) => {
      if (i === index) {
        // active
        btn.classList.remove('bg-indigo-300');
        btn.classList.add('bg-indigo-500');
        btn.classList.add('text-white');

        // show transferTo section
        btn.id === 'transferButton'
          ? $('#transferTo').removeClass('hidden')
          : $('#transferTo').addClass('hidden');
      } else {
        // non-active
        btn.classList.remove('bg-indigo-500');
        btn.classList.add('bg-indigo-300');
        btn.classList.remove('text-white')
      }
    });
  });
});

// Cancel button
document.getElementById('cancelButton').addEventListener('click', () => {
  // reset form values
  document.getElementById('transactionForm').reset();

  // reset type button active
  typeButtons.forEach((btn) => {
    if (btn.id === 'depositButton') {
      btn.classList.remove('bg-indigo-300');
      btn.classList.add('bg-indigo-500');
      btn.classList.add('text-white');
    } else {
      btn.classList.remove('bg-indigo-500');
      btn.classList.add('bg-indigo-300');
      btn.classList.remove('text-white')
    }
  });

  // reset transferTo section visibility
  $('#transferTo').addClass('hidden');
});