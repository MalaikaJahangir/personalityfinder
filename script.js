document.addEventListener("DOMContentLoaded", function () {
    // Handling the fade-out effect on the start button click
    const startButton = document.getElementById('start');
    if (startButton) {
        startButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent immediate navigation
            const targetUrl = this.href;

            // Add fade-out effect
            document.body.classList.add('fade-out');

            // Delay navigation to allow the animation to complete
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 300); // Duration matches CSS transition
        });
    }

    // Handling the slide-in effect for the proceed box
    const proceedBox = document.getElementById('proceedBox');
    if (proceedBox) {
        // Add the slide-in class after a slight delay for effect
        setTimeout(() => {
            proceedBox.classList.add('slide-in');
        }, 100); // Adjust the delay as desired
    }

    // Optional: Setting playback rate for the background video
    const backgroundVideo = document.getElementById('backgroundVideo');
    if (backgroundVideo) {
        backgroundVideo.playbackRate = 0.2;
    }

    const questionsContainer = document.getElementById('questionsContainer');

    // Dynamically add questions to the form
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `<h3>Question ${index + 1}: ${q.question}</h3>`;

        q.options.forEach((option, optionIndex) => {
            questionDiv.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${option.type}">
                    ${option.text}
                </label><br>
            `;
        });

        questionsContainer.appendChild(questionDiv);
    });

    // Handle form submission
    document.getElementById('quizForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Tally the user's responses
        let personalityTally = {
            ESTJ: 0, ENTJ: 0, ESFJ: 0, ENFJ: 0,
            ISTJ: 0, ISFJ: 0, INTJ: 0, INFJ: 0,
            ESTP: 0, ESFP: 0, ENTP: 0, ENFP: 0,
            ISTP: 0, ISFP: 0, INTP: 0, INFP: 0
        };

        // Iterate over the questions and get the user's selected answer
        questions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption) {
                const type = selectedOption.value;
                if (personalityTally.hasOwnProperty(type)) {
                    personalityTally[type]++;
                }
            }
        });

        // Find the personality type with the highest tally
        let maxCount = 0;
        let resultType = '';
        for (let type in personalityTally) {
            if (personalityTally[type] > maxCount) {
                maxCount = personalityTally[type];
                resultType = type;
            }
        }

        // Redirect to the result page with the resultType in the URL
        window.location.href = `result.html?resultType=${resultType}`;
    });
});
