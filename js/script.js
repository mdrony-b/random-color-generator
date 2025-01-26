$(document).ready(function() {
    // Function to generate random color
    function generateRandomColor() {
        var randomColor = "#" + ("000000" + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
        return randomColor;
    }

    // Function to update preview and color field
    function updateColorPreview(randomColor) {
        $('.color-preview').css('background-color', randomColor);
        $('.color-field').val(randomColor);
        $('.copy-code').text(randomColor); // Update the copied code display
    }

    // When the "Generator" button is clicked
    $('.btn-gen').click(function() {
        var randomColor = generateRandomColor();
        updateColorPreview(randomColor);
        $('.copyed').fadeOut();
    });

    // Copy the color code to clipboard when the icon is clicked
    $('.click-to-copy').click(function() {
        var copyText = $('.color-field').val();
        navigator.clipboard.writeText(copyText).then(function() {
            // Show the "Color Code is copied" message
            $('.copyed').fadeIn();
            setTimeout(function() {
                $('.copyed').fadeOut();
            }, 2000);
        }).catch(function(err) {
            console.error('Failed to copy: ', err);
        });
    });
});