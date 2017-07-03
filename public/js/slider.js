$(document).ready(function() {
		$('#fullpage').fullpage({
			'verticalCentered': false,
			anchors: ['home', 'info', 'web', 'music', 'contacts'],
			'css3': true,
			easing: 'easeInOutCubic',
			/*'sectionsColor': ['#F0F2F4', '#fff', '#b3e6ff', '#fff'],*/
			'navigation': false,
			'onLeave': function(index, nextIndex, direction){
				if (index == 3 && direction == 'down'){
					$('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
				}
				else if(index == 3 && direction == 'up'){
					$('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
				}

			/*	$('#staticImg').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
				$('#staticImg').toggleClass('moveDown', nextIndex == 4);
				$('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');*/
			}
		});
});