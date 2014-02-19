var orange = {
	init: function(){
		orange.layout.init();
	},
	layout: {
		init: function(){
			this.carousel();
			this.touchNav();
		},
		carousel: function(){
			$('#features').owlCarousel({
				navigation : false, // Show next and prev buttons
				slideSpeed : 300,
				paginationSpeed : 400,
				singleItem:true
			});
		},
		touchNav: function(){
			$('#menu-toggle').click(function(e){
				e.preventDefault();
				$('body').toggleClass('js-nav');


			});
		}
	}
}

$(document).ready(orange.init);