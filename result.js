window.onload = function () {
    // Retrieve query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const resultType = urlParams.get('resultType');

    // Map personality types to images and descriptions
    const resultData = {
        ENTJ: {
            image: 'images/stevejobs.jpg', // Path to your image
            description: 'You are bold and straightforward, just like an ENTJ!You are an Extrovert, which means you are outgoing and gain energy by spending time around others. You thrive in social situations and naturally tend to take charge when decisions need to be made. You are confident and self-assured but sometimes struggle with being a little impatient or stubborn.'
        },
        INFP: {
            image: 'images/pexels-stefanstefancik-91224.jpg', // Example image
            description: 'You are known for your deep sense of idealism, empathy, and creativity. You often seek meaningful connections and pursue your passions with a strong sense of purpose. While you can be reserved, your rich inner world is filled with imagination and a strong drive to help others.'
        },
        ESTJ: {
            image: 'images/michelleobama.webp', // Example image
            description: 'You are an ESTJ! You are organized, dependable, and practical. You thrive on structure and are known for your strong leadership and dedication. You take pride in being responsible and ensuring tasks are done efficiently, and you bring order and direction to any project or group.'
        },
        ENFJ: {
            image: 'images/pexels-ollivves-1047051.jpg', // Example image
            description: 'You are an ENFJ! You are charismatic, empathetic, and inspiring. You have a natural ability to connect with people and motivate them to achieve their best. Your warmth and enthusiasm make you a beloved leader and mentor, and you excel at bringing harmony to any group.'
        },
        ISTJ: {
            image: 'images/pexels-ninauhlikova-725255.jpg', // Example image
            description: 'You are reliable, methodical, and responsible. You value traditions and rules and approach tasks with a strong sense of duty. Your practical mindset and attention to detail make you a dependable problem-solver in any situation.'
        },
        ISFJ: {
            image: 'images/beyonce-re2.jpg', // Example image
            description: ' You are nurturing, supportive, and deeply caring. You find joy in helping others and are often the quiet force behind the scenes, ensuring everyone feels comfortable and valued. Your sense of duty and loyalty is unmatched.'
        },
        INTJ: {
            image: 'images/elonmusk.jpg', // Example image
            description: 'You are strategic, independent, and visionary. You excel at analyzing complex problems and creating innovative solutions. Your determination and confidence in your ideas often set you apart as a natural leader.'
        },
        INFJ: {
            image: 'images/pexels-kenneth-jencks-940106-17070031.jpg', // Example image
            description: 'You are empathetic, insightful, and determined. You have a deep understanding of others and strive to create positive change. Your strong intuition and passion for your values guide you in all that you do.'
        },
        ESTP: {
            image: 'images/pexels-eberhardgross-691716.jpg', // Example image
            description: 'You are energetic, bold, and action-oriented. You love excitement and aren’t afraid to take risks. Your charm and quick thinking make you a natural at handling challenges on the fly.'
        },
        ESFP: {
            image: 'images/pexels-aysenaz-bilgin-421884106-17703811.jpg', // Example image
            description: ' You are fun-loving, spontaneous, and full of life. You thrive in the moment and bring joy wherever you go. Your enthusiasm and warmth draw people in, making you the life of any party.'
        },
        ENTP: {
            image: 'images/pexels-kenneth-jencks-940106-17070031.jpg', // Example image
            description: ' You are witty, clever, and innovative. You love to challenge ideas and think outside the box, making debates and discussions your playground. Your curiosity and adaptability fuel your success in various pursuits.'
        },
        ENFP: {
            image: 'images/michelleobama.webp', // Example image
            description: 'You are creative, enthusiastic, and deeply caring. You love exploring new ideas and possibilities, and your energy is contagious. You inspire others with your optimism and genuine interest in people.'
        },
        ISTP: {
            image: 'images/brucelee-re.webp', // Example image
            description: 'You are analytical, practical, and resourceful. You enjoy hands-on work and solving problems efficiently. Your independent and adaptable nature allows you to handle challenges with ease.'
        },
        ISFP: {
            image: 'images/pexels-ollivves-1047051.jpg', // Example image
            description: 'You are gentle, artistic, and highly attuned to the beauty around you. You value your independence and cherish your personal space, expressing yourself best through creative outlets.'
        },
        INTP: {
            image: 'images/alberteinstein.webp', // Example image
            description: 'You are logical, insightful, and driven by curiosity. You enjoy diving deep into theories and concepts, seeking to understand how everything works. Your independent nature allows you to think in unconventional ways.'
        },
        ESFJ: {
            image: 'images/jenefar.webp', 
            description: ' You are warm, social, and highly attuned to the needs of others. You thrive on creating harmony and are known for your ability to bring people together. Your kindness and organizational skills make you a pillar in any community.'
        }
    };

    // If the resultType exists in resultData, display the result
    if (resultData[resultType]) {
        const result = resultData[resultType];

        document.getElementById('resultType').innerText = `Your personality type is: ${resultType}`;
        document.getElementById('resultDescription').innerText = result.description;

        const img = document.createElement('img');
        img.src = result.image;
        img.alt = resultType;
        img.classList.add('img-fluid', 'rounded', 'mx-auto', 'd-block'); // Bootstrap classes for styling
        document.getElementById('resultImageContainer').appendChild(img);
    } else {
        // Handle if the resultType is not found
        document.getElementById('resultType').innerText = 'Error: Result type not found!';
    }
};
