function inRange (val, min, max) {
	return Math.max(Math.min(val, max), min);
}

var ParallaxElement = function (elt) {
	this.elt = elt;
	this.wrapper = this.getWrapper();
	this.translation = {
		speed: {
			x: parseFloat(this.data('translateXSpeed', 0)),
			y: parseFloat(this.data('translateYSpeed', 0.10)),
			z: parseFloat(this.data('translateZSpeed', 0)),
		},
		initial: {
			x: parseFloat(this.data('translateX-initial', 0)),
			y: parseFloat(this.data('translateY-initial', 0)),
			z: parseFloat(this.data('translateZ-initial', 0)),
		},
		max: {
			x: parseFloat(this.data('translateXMax', 9999)),
			y: parseFloat(this.data('translateYMax', 9999)),
			z: parseFloat(this.data('translateZMax', 9999)),
		},
		min: {
			x: parseFloat(this.data('translateXMin', -9999)),
			y: parseFloat(this.data('translateYMin', -9999)),
			z: parseFloat(this.data('translateZMin', -9999)),
		},
	};

	this.rotation = {
		speed: parseFloat(this.data('rotateSpeed', 0)),
		max: parseFloat(this.data('rotateMax', 9999)),
		min: parseFloat(this.data('rotateMin', -9999)),
		initial: parseFloat(this.data('rotateInitial', 0)),
	};
	this.opacity = {
		speed: parseFloat(this.data('opacitySpeed', 0)),
		max: parseFloat(this.data('opacityMax', 1)),
		min: parseFloat(this.data('opacityMin', 0)),
		initial: parseFloat(this.data('opacityInitial', 1)),
	};
};

ParallaxElement.prototype.getWrapper = function () {
	var selector = this.data('wrapper');
	var wrapper = document.querySelector(selector);

	if (!wrapper) {
		console.error(
			'Invalid parallax wrapper "' + selector + '" for element ',
			this.elt
		);
	}

	return wrapper;
};

ParallaxElement.prototype.data = function (prop, defaultValue) {
	var value = this.elt.dataset[prop];

	return value !== undefined
				? value
				: defaultValue;
};

ParallaxElement.prototype.render = function (scroll) {
	var eltBounds = this.elt.getBoundingClientRect();
	var wrapperBounds = this.wrapper.getBoundingClientRect();

	// FIX: Avoid animating non-visible elements.
	if (wrapperBounds.top > window.innerHeight || eltBounds.bottom < 0) {
		return;
	}


	var baseLine = Math.min(window.innerHeight, this.wrapper.offsetTop);
	var delta = baseLine - wrapperBounds.top;

	var translate = {
		x: inRange(
			this.translation.initial.x + (this.translation.speed.x * delta),
			this.translation.min.x,
			this.translation.max.x
		).toFixed(1),
		y: inRange(
			this.translation.initial.y + (this.translation.speed.y * delta),
			this.translation.min.y,
			this.translation.max.y
		).toFixed(1),
		z: inRange(
			this.translation.initial.z + (this.translation.speed.z * delta),
			this.translation.min.z,
			this.translation.max.z
		).toFixed(1),
	};
	var rotate = inRange(
		this.rotation.initial + this.rotation.speed * delta,
		this.rotation.min,
		this.rotation.max
	).toFixed(1);

	this.elt.style.transform = (
		'translate3d('
			+ translate.x + 'px,'
			+ translate.y + 'px,'
			+ translate.z + 'px)'
		+ 'rotate3d(0, 0, 1,' + rotate + 'deg)'
	);

	this.elt.style.opacity = inRange(
		this.opacity.initial + (delta / window.innerHeight) * this.opacity.speed,
		this.opacity.min,
		this.opacity.max
	).toFixed(2);
};

var Parallax = function (cls, options) {
	var self = this;

	this.options = options || {};
	this.elements = Array.prototype.map.call(
		document.getElementsByClassName(cls),
		function (elt) { return new ParallaxElement(elt, self); }
	);

	if (this.config('debug')) {
		this.elements.forEach(function (elt) {
			elt.dump();
		});
	};

	this.start();
};

Parallax.prototype.start = function () {
	var scroll = {
		top: window.pageYOffset,
		bottom: window.pageYOffset + window.innerHeight,
	};

	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].render(scroll);
	}

	window.requestAnimationFrame(this.start.bind(this));
};

Parallax.defaults = {
	fps: 60,
	debug: false,
};

Parallax.prototype.config = function (prop) {
	return this.options[prop] !== undefined
				? this.options[prop]
				: Parallax.defaults[prop];
};


document.addEventListener("DOMContentLoaded", function(event) {
  new Parallax('parallax', { fps: 60 });
});
