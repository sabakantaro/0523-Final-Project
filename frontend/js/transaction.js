// API endpoint
const baseUrl = 'http://localhost:3000'
const categoryEndpoint = `${baseUrl}/categories`

// API call
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

const transactionTypesAndIds = {
  deposit: 1,
  withdraw: 2,
  transfer: 3,
};

const saveTransaction = (e) => {
    e.preventDefault();

    const type = $("input[name='type']:checked").val();

    // TODO: if type is transfer, accountIdFromTo else null

    const body =   {
      newTransaction:{
        accountId: $("select[name='accountId']").val(),
        accountIdFrom:"", // sender ID if type = 'Transfer', otherwise null
        accountIdTo:"", // receiver ID if type = 'Transfer', otherwise null,
        type, // 'Deposit', 'Withdraw', 'Transfer'
        amount: $("input[name='amount']").val(), // amount of the transaction
        categoryId: $("select[name='categoryId']").val(), // category ID
        description: $("input[name='description']").val(), // description of the transaction
      }
    }

    console.log(body);
}

$(function() {
  getCategories();

  // change checked prop of a corresponding radio when a type button is clicked
  $('.type-button').click(function() {
    const radioId = $(this).data('radio-id');
    $(`#${radioId}`).prop('checked', true);
  });

  $('#transaction-form').submit(function(e) {
    saveTransaction(e);
  })
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
  document.getElementById('transaction-form').reset();

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