
// Coding Steps:

  // Create a full CRUD application of your choice using an API or JSON Server.
  // Use JQuery/AJAX to interact with the API. 
  // Use a form to post new entities.
  // Build a way for users to update or delete entities.
  // Include a way to get entities from the API.
  // Use Bootstrap and CSS to style your project.


const URL_ENDPOINT = 'https://64f15eda0e1e60602d23b9f2.mockapi.io/week12AssignmentFECoding_API/books' //url from mockapi

function getDataRenderTable() {
  $.get(URL_ENDPOINT).then(data => { 
    $('tbody').empty()
    data.map(person => {
      $('tbody').append(
        $(`
        <tr>
        <td>${person.id}</td>
          <td>${person.fullName}</td>
          <td>${person.bookName}</td>
          <td><button onclick="deleteUser(${person.id})">🗑</button></td>
          </tr>
        `)
      )
    })
  })
}

getDataRenderTable() //get operation

 
  $('#myBtn').click(function (e) {
      e.preventDefault()
      $.post(URL_ENDPOINT, {
        fullName: $('#fullName').val(),
        bookName:$('#bookName').val(),
      }).then(getDataRenderTable)
    }) //post data then get data from api


  function deleteUser(id) {
    $.ajax(`${URL_ENDPOINT}/${id}`, {
    type: 'DELETE',
      }).then(getDataRenderTable)
    } //delete data


    function updateUser(e) {
      e.preventDefault()
      let id = $('#updateId').val()
    
      $.ajax({
        url: `${URL_ENDPOINT}/${id}`, 
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify({
          fullName: $('#updateName').val(),
          bookName: $('#updateBook').val(),
        })
      }).then(() => getDataRenderTable() )
    }
    
    $('#updateInfo').click(updateUser) //update data when button was clicked