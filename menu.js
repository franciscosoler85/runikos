addEventListener('DOMContentLoaded', () => {

	const btn_burguer = document.querySelector('.burguer-boton')

	if (btn_burguer){

		btn_burguer.addEventListener('click', () => {

			const elem_menu = document.querySelector('.menu')

			elem_menu.classList.toggle('show')

		})


	}


})