const URL_ENDPOINT = 'https://64f15eda0e1e60602d23b9f2.mockapi.io/week12AssignmentFECoding_API/:endpoint'

$.get(URL_ENDPOINT).then(data => {
    data.map(person => {
      $('tbody').append(
        $(`
        <tr>
          <td>${person.id}</td>
          <td>${person.full-Name}</td>
          <td>${person.book-Name}</td>
        </tr>
        `)
      )
    })
  })

  // <td><button onclick="deleteUser(${person.id})">🗑</button></td>


  $('#myBtn').click(function () {
      $.post(URL_ENDPOINT, {
        fullName: $('#full-Name').val(),
        bookName:$('#book-Name').val(),
      })
    })