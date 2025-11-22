/* Save Our Safer Streets - Dynamic Footer */

// Create and inject the footer HTML
function createFooter() {
	const footerHTML = `
	<footer class="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
		<a href="#home" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>

		<div class="w3-xlarge w3-section">
			<a href="https://bsky.app/profile/did:plc:3tw5jlu4q77kueucwm2jqqrt" title="Bluesky" target="_blank"
				class="w3-hover-text-green w3-margin"><i class="fa-brands fa-bluesky w3-hover-opacity"></i></a>
			<a href="https://www.facebook.com/groups/3166302756926054/?ref=share" title="Facebook" target="_blank"
				class="w3-hover-text-green"><i class="fa-brands fa-facebook-square w3-hover-opacity"></i></a>
			<a href="https://www.instagram.com/sossbethnalgreen/" title="Instagram" target="_blank"
				class="w3-hover-text-green w3-margin-left"><i class="fa-brands fa-instagram"></i></a>
			<a href="https://twitter.com/SaveBGstreets" title="Twitter/X" target="_blank"
				class="w3-hover-text-green w3-margin"><i class="fa-brands fa-x-twitter"></i></a>
			<a href="mailto:info@saveoursaferstreets.org?subject=Regarding Save our Safer Streets campaign&body=Hello,%0D%0A%0D%0AI'm emailing about the Save our Safer Streets campaign.%0D%0A %0D%0A[Add your content here, and include your name with address if you live in consultation zone]"
				class="w3-hover-text-green" title="email" target="_blank"><i
					class="fa-solid fa-paper-plane w3-hover-opacity"></i></a>
		</div>
		<p>
			Powered by
			<a href="https://www.facebook.com/groups/3166302756926054/?ref=share" title=" " target="_blank"
				class="w3-hover-text-green">Tower Hamlets Residents</a>
		</p>
	</footer>
	`;
	
	// Insert footer at the end of body (before closing tag)
	document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', createFooter);
} else {
	createFooter();
}

