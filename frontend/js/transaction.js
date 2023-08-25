// API endpoint
const baseUrl = 'http://localhost:3000'
const categoryEndpoint = `${baseUrl}/categories`
const transactionEndpoint = `${baseUrl}/transactions`

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
        amount: $("input[name='amount']").val(),
        categoryId: $("select[name='categoryId']").val(),
        description: $("input[name='description']").val(),
      }
    }

    console.log(body);

    $.ajax({
      url: transactionEndpoint,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(body),
      success: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.error(err);
      },
    });
}

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