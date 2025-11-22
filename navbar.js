/* Save Our Safer Streets - Dynamic Navbar */

// Create and inject the navbar HTML
function createNavbar() {
	const navbarHTML = `
	<!-- Navbar (sit on top) -->
	<div class="w3-top">
		<div class="w3-bar" id="myNavbar">
			<a class="
						w3-bar-item
						w3-button
						w3-white
						w3-opacity
						w3-hover-black
						w3-hide-medium
						w3-hide-large
						w3-right
					" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
				<i class="fa fa-bars"></i>
			</a>
		<a href="index.html#home" class="w3-bar-item w3-button w3-white w3-opacity">HOME</a>
		<div class="w3-dropdown-hover w3-hide-small">
			<button class="w3-bar-item w3-button w3-white w3-opacity" style="border: none; outline: none;">ABOUT</button>
			<div class="w3-dropdown-content">
				<a href="about.html#about">About us</a>
				<a href="about.html#ltns">Low traffic neighbourhoods</a>
			</div>
		</div>
		<a href="index.html#preaction" class="w3-bar-item w3-button w3-hide-small w3-white w3-opacity">ACTION</a>
			<a href="news.html" class="w3-bar-item w3-button w3-hide-small w3-white w3-opacity">NEWS</a>
			<a href="stories.html" class="w3-bar-item w3-button w3-hide-small w3-white w3-opacity">STORIES</a>
			<a href="you-asked.html" class="w3-bar-item w3-button w3-hide-small w3-white w3-opacity">YOU ASKED</a>
			<a href="press.html"
				class="w3-bar-item w3-button w3-opacity w3-hide-small w3-hide-medium w3-white">PRESS</a>
			<a href="index.html#contact" class="w3-bar-item w3-button w3-hide-small w3-white w3-opacity">CONTACT</a>
			<a href="#" class="w3-bar-item w3-button w3-hide w3-right w3-hover-red"> </a>
		</div>

		<!-- Navbar on small screens -->
		<div id="navDemo" class="
					w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium
				">
			<a href="about.html" class="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
			<a href="about.html#about" class="w3-bar-item w3-button" onclick="toggleFunction()" style="padding-left: 32px;">About us</a>
			<a href="about.html#ltns" class="w3-bar-item w3-button" onclick="toggleFunction()" style="padding-left: 32px;">Low traffic neighbourhoods</a>
			<a href="index.html#preaction" class="w3-bar-item w3-button" onclick="toggleFunction()">ACTION</a>
			<a href="news.html" class="w3-bar-item w3-button" onclick="toggleFunction()">NEWS</a>
			<a href="stories.html" class="w3-bar-item w3-button" onclick="toggleFunction()">STORIES</a>
			<a href="you-asked.html" class="w3-bar-item w3-button" onclick="toggleFunction()">YOU ASKED</a>
			<a href="press.html" class="w3-bar-item w3-button" onclick="toggleFunction()">PRESS</a>
			<a href="index.html#contact" class="w3-bar-item w3-button" onclick="toggleFunction()">CONTACT</a>
			<a href="#" class="w3-bar-item w3-button w3-hide">SEARCH</a>
		</div>
	</div>
	`;
	
	// Insert navbar at the beginning of body
	document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', createNavbar);
} else {
	createNavbar();
}

