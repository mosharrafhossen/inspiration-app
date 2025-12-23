
    const quotes = [
      "Success comes to those who take action.",
      "Failure is the first step toward success.",
      "Value your time, and time will value you.",
      "Perseverance is the key to success.",
      "Stopping learning means stopping growth.",
      "Change yourself, and the world will change.",
      "Dream big, be brave, success will come.",
      "Today's hard work is tomorrow's success.",
      "Those who never give up are the real winners.",
      "Hard paths make strong people.",
      "Belief in yourself is the greatest strength.",
      "Hard work never goes to waste.",
      "Conquer fear, and success is guaranteed.",
      "Small efforts bring great results.",
      "Problems teach you how to find solutions.",
      "Those who keep learning always move forward.",
      "If not today, then definitely tomorrow.",
      "Giving up on yourself ends everything.",
      "Success tests your patience.",
      "Stay focused on the goal, and the path will appear.",
      "Mistakes lead to the right lessons.",
      "The greater the effort, the sweeter the result.",
      "Break your own limits.",
      "Nothing is impossible.",
      "Work builds your identity.",
      "Whoever conquers themselves conquers everything."
    ];

    let lastIndex = -1;

    function newQuote() {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * quotes.length);
      } while (randomIndex === lastIndex);

      lastIndex = randomIndex;
      document.getElementById("quote").innerText = quotes[randomIndex];
    }

    // Show a quote on page load
    newQuote();