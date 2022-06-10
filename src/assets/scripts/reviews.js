const btn = document.querySelector('.review-form__btn')
const reviews = document.querySelector('.reviews')

btn.addEventListener('click', evt => {
  evt.preventDefault()

  const type = document.getElementById('type_input').value
  const name = document.getElementById('pet_name_input').value
  const review = document.getElementById('review_textarea').value

  if (type && name && review)
    reviews.innerHTML += `
        <div class="reviews__review review">
        <div class="heading">
          <p class="heading__row">
          <span class="heading__part">
           ${type}
          </span>
          <span class="heading__part">
            ${name}
          </span>
          </p>
        </div>
        <div class="review__inner">
          <img src="https://i.pinimg.com/originals/7b/4d/25/7b4d25e44f320e0de380bdf6efd2c4eb.jpg" alt="Автор комментария" class="review__photo">
          <p class="review__text">
            ${review}
          </p>
        </div>
      </div>
      </div>
    `
})