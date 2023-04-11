function generate() {

    const quotes = {
        '- Albert Einstein': '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it\'s beauty."',
        '- Anne Morrow Lindbergh': '"Him that I love, I wish to be free -- even from me."',
        '- Erik Pevernagie': '"Liberty is only possible on the condition of regularity. We cannot be free and play the game of life without abiding to the rules, but the rules have to be adapted constantly in line with our experiences and the events we encounter. ( “If he doesn\'t play ball "',
        '- Stewart Brand': '"Information wants to be free."',
        '- Charlotte Brontë': '"I am no bird; and no net ensnares me: I am a free human being with an independent will."',
        '- Coco Chanel': '"The most courageous act is still to think for yourself. Aloud."',
        '-  Mahatma Gandhi': '"Freedom is not worth having if it does not include the freedom to make mistakes."',
        '- Любо Пенев': '"Да духат супата"',
    }

    const authors = Object.keys(quotes);

    const author = authors[Math.floor(Math.random() * authors.length)];
    const quote = quotes[author];

    document.getElementById('quote').textContent = quote;
    document.getElementById('author').textContent = author;
}