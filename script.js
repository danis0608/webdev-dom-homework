const listComment = document.getElementById('list-comments');
const buttonComment = document.getElementById('add-button');
const nameComment = document.getElementById('add-name');
const textComment = document.getElementById('add-comment');


const users = [
    {
        name: 'Глеб Фокин',
        comment: 'Это будет первый комментарий на этой странице',
        date: '12.02.22 12:18',
        likes: 3,
        click: false,
        class: "like-button",
    },
    {
        name: 'Варвара Н.',
        comment: 'Мне нравится как оформлена эта страница! ❤',
        date: '13.02.22 19:22',
        likes: 75,
        click: false,
        class: "like-button",
    },


]

const initLikesCounter = () => {
    const likeButtons = document.querySelectorAll('.like-button');
    console.log(likeButtons);

    for (const likeButton of likeButtons) {
        likeButton.addEventListener('click', () => {
            const likesCount = likeButton.dataset.likes;
            console.log(likeButton);
            if (users[likesCount].click == false) {
                users[likesCount].likes += 1;
                users[likesCount].click = true;

                renderComments();
            } else {
                users[likesCount].likes -= 1;
                users[likesCount].click = false;

                renderComments();
            }

        }
        )
    }
}

const renderComments = () => {
    commentsHtml = users.map((user, index) => {
        return `<li class="comment">
        <div class="comment-header">
          <div>${user.name}</div>
          <div>${user.date}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            ${user.comment}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${user.likes}</span>
            <button data-likes="${index}" class="${user.click ? 'like-button -active-like' : 'like-button'}"></button>
          </div>
        </div>
      </li>`
    }).join('');

    listComment.innerHTML = commentsHtml;

    initLikesCounter();

}

renderComments();

buttonComment.addEventListener('click', () => {

    const currentDate = new Date();
    const year = currentDate.getFullYear().toString().slice(-2);
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const day = ("0" + currentDate.getDate()).slice(-2);
    const hours = ("0" + currentDate.getHours()).slice(-2);
    const minutes = ("0" + currentDate.getMinutes()).slice(-2);
    const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;

    const oldListComment = listComment.innerHTML;
    nameComment.classList.remove('error');
    textComment.classList.remove('error');

    if (nameComment.value === '') {
        nameComment.classList.add('error');
        return;
    }

    if (textComment.value === '') {
        textComment.classList.add('error');
        return;
    }

    users.push({
        name: nameComment.value,
        comment: textComment.value,
        date: formattedDate,
        likes: 0,
        click: false,
    })


    renderComments();
}
)
