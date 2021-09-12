async function grabResult() {
    var book_name = document.getElementById("bookName").value
    if (book_name != "") {
        //To run on Local Host change url='http://127.0.0.1:5000/'
        url='https://booksapibasic.herokuapp.com/'
        const response = await fetch(url + book_name, {
            method: 'GET',
            // string or object
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        var final = ''
        if (data.length != 0) {
            for (let i = 0; i < data.length; i++) {
                var stars = ''
                var title = data[i]['title']
                var pages = data[i]['pages']
                var publishDate = data[i]['publish_date']
                var rating = data[i]['rating']
                var price = data[i]['price']
                var author = data[i]['author']
                for (let i = 0; i < 5; i++) {
                    if (i < parseInt(rating)) {
                        stars = stars + '<span class="fa fa-star checked"></span>'
                    }
                    else {
                        stars = stars + '<span class="fa fa-star"></span>'
                    }
                }
                final = final + `<tr>
			<td>
				${title}
			</td>
			<td>
				${pages}
			</td>
			<td>
				${publishDate}
			</td>
			<td>
				${price}
			</td>
			<td>
				${author}
			</td>
			<td>
				${stars}
			</td>
		</tr>`
            }
            console.log(final)
            document.getElementById("results").style.display = 'block'
            document.getElementById("results").style.justifyContent = 'space-around'
            document.getElementById("results").innerHTML = `<table>
		<tr>
			<th>
				Title
			</th>
			<th>
				No. of Pages
			</th>
			<th>
				Publish Date
			</th>
			<th>
				price
			</th>
			<th>
				Author
			</th>
			<th>
				Rating
			</th>
		    </tr>`+ final + `</table>`;
        }
        else {
            document.getElementById("results").style.display = 'flex'
            document.getElementById("results").style.justifyContent = 'center'
            document.getElementById("results").innerHTML = '<p class="place-holder">No Book Found With This name</p>'
        }

    }
    else {
        document.getElementById("results").style.display = 'flex'
        document.getElementById("results").style.justifyContent = 'center'
        document.getElementById("results").innerHTML = '<p class="place-holder">Please tell me what to search?</p>'
    }
}