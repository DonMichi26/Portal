(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
		// Crea efecto parallax en elementos
		// xpos: posición horizontal (default "50%")
		// speedFactor: velocidad del efecto (default 0.5)
		// outerHeight: incluir padding/bordes en altura

		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		// Actualiza posición de fondo al hacer scroll
		function update (){
			
			$this.each(function(){
								
				firstTop = $this.offset().top;
			});
	
			if (outerHeight) {
				getHeight = function(jqo) {
					return jqo.outerHeight(true);
				};
			} else {
				getHeight = function(jqo) {
					return jqo.height();
				};
			}
				
			if (arguments.length < 1 || xpos === null) xpos = "50%";
			if (arguments.length < 2 || speedFactor === null) speedFactor = 0.5;
			if (arguments.length < 3 || outerHeight === null) outerHeight = true;
			
			
				var pos = $window.scrollTop();				
	
				$this.each(function(){
					var $element = $(this);
					var top = $element.offset().top;
					var height = getHeight($element);
	
					if (top + height < pos || top > pos + windowHeight) {
						return;
					}
					
					// Calcula nueva posición de fondo basada en scroll
					// Aplica el efecto parallax moviendo el background
					$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
					
				});
		}		

		// Vincula eventos scroll y resize
		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);