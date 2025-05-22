document.addEventListener("DOMContentLoaded", () => {
    const symbolBoxes = document.querySelectorAll(".symbol-box");

    // Select elements for displaying information
    const symbolTitle = document.getElementById("symbol-title");
    const symbolDescription = document.getElementById("symbol-description");
    const audioElement = document.getElementById("symbol-audio");
    const audioSource = document.getElementById("audio-source");

    // Descriptions with examples for each phoneme
    const descriptions = {
        "/p/": "Voiceless bilabial plosive (both lips). Example: 'p' in 'pat'.",
        "/b/": "Voiced bilabial plosive (both lips). Example: 'b' in 'bat'.",
        "/t/": "Voiceless alveolar plosive (tongue on alveolar ridge). Example: 't' in 'top'.",
        "/d/": "Voiced alveolar plosive. Example: 'd' in 'dog'.",
        "/ʧ/": "Voiceless postalveolar affricate. Example: 'ch' in 'cheese'.",
        "/ʤ/": "Voiced postalveolar affricate. Example: 'j' in 'judge'.",
        "/k/": "Voiceless velar plosive (back of tongue). Example: 'k' in 'kite'.",
        "/g/": "Voiced velar plosive. Example: 'g' in 'go'.",
        "/f/": "Voiceless labiodental fricative (lower lip touches teeth). Example: 'f' in 'fish'.",
        "/v/": "Voiced labiodental fricative. Example: 'v' in 'van'.",
        "/θ/": "Voiceless dental fricative. Example: 'th' in 'think'.",
        "/ð/": "Voiced dental fricative. Example: 'th' in 'this'.",
        "/s/": "Voiceless alveolar fricative. Example: 's' in 'sun'.",
        "/z/": "Voiced alveolar fricative. Example: 'z' in 'zebra'.",
        "/ʃ/": "Voiceless postalveolar fricative. Example: 'sh' in 'shoe'.",
        "/ʒ/": "Voiced postalveolar fricative. Example: 's' in 'measure'.",
        "/m/": "Bilabial nasal. Example: 'm' in 'man'.",
        "/n/": "Alveolar nasal. Example: 'n' in 'net'.",
        "/ŋ/": "Velar nasal. Example: 'ng' in 'sing'.",
        "/h/": "Voiceless glottal fricative. Example: 'h' in 'house'.",
        "/l/": "Alveolar lateral approximant. Example: 'l' in 'love'.",
        "/r/": "Post-alveolar approximant. Example: 'r' in 'red'.",
        "/w/": "Bilabial glide. Example: 'w' in 'water'.",
        "/j/": "Palatal glide. Example: 'y' in 'yes'.",
        "/i:/": "Close front unrounded vowel. Example: 'ee' in 'see'.",
        "/ɪ/": "Near-close near-front unrounded vowel. Example: 'i' in 'bit'.",
        "/ʊ/": "Near-close near-back rounded vowel. Example: 'oo' in 'book'.",
        "/u:/": "Close back rounded vowel. Example: 'oo' in 'goose'.",
        "/e/": "Close-mid front unrounded vowel. Example: 'e' in 'met'.",
        "/ə/": "Schwa, mid central vowel. Example: 'a' in 'sofa'.",
        "/ɜ:/": "Open-mid central unrounded vowel. Example: 'ir' in 'bird'.",
        "/ɔ:/": "Open-mid back rounded vowel. Example: 'aw' in 'law'.",
        "/æ/": "Near-open front unrounded vowel. Example: 'a' in 'cat'.",
        "/ʌ/": "Open-mid back unrounded vowel. Example: 'u' in 'cup'.",
        "/ɑ:/": "Open back unrounded vowel. Example: 'a' in 'father'.",
        "/ɒ/": "Open back rounded vowel. Example: 'o' in 'lot'.",
        "/ɪə/": "Diphthong, near-close front to mid central. Example: 'ear' in 'here'.",
        "/eɪ/": "Diphthong, close-mid front to close front. Example: 'ai' in 'face'.",
        "/ʊə/": "Diphthong, near-close back to mid central. Example: 'ure' in 'cure'.",
        "/ɔɪ/": "Diphthong, open-mid back to close front. Example: 'oy' in 'boy'.",
        "/eə/": "Diphthong, close-mid front to mid central. Example: 'air' in 'hair'.",
        "/aɪ/": "Diphthong, open front to close front. Example: 'i' in 'price'.",
        "/aʊ/": "Diphthong, open front to near-close back. Example: 'ou' in 'mouth'.",
        "/əʊ/": "Diphthong, mid central to close back. Example: 'o' in 'go'."
    };

    // Audio file paths
    const audioFiles = {
        "/p/": "sounds/p.mp3",
        "/b/": "sounds/b.mp3",
        "/t/": "sounds/t.mp3",
        "/d/": "sounds/d.mp3",
        "/ʧ/": "sounds/tʃ.mp3",
        "/ʤ/": "sounds/dʒ.mp3",
        "/k/": "sounds/k.mp3",
        "/g/": "sounds/g.mp3",
        "/f/": "sounds/f.mp3",
        "/v/": "sounds/v.mp3",
        "/θ/": "sounds/θ.mp3",
        "/ð/": "sounds/ð.mp3",
        "/s/": "sounds/s.mp3",
        "/z/": "sounds/z.mp3",
        "/ʃ/": "sounds/ʃ.mp3",
        "/ʒ/": "sounds/ʒ.mp3",
        "/m/": "sounds/m.mp3",
        "/n/": "sounds/n.mp3",
        "/ŋ/": "sounds/ŋ.mp3",
        "/h/": "sounds/h.mp3",
        "/l/": "sounds/l.mp3",
        "/r/": "sounds/r.mp3",
        "/w/": "sounds/w.mp3",
        "/j/": "sounds/j.mp3",
        "/i:/": "sounds/i-long.mp3",
        "/ɪ/": "sounds/I.mp3",
        "/ʊ/": "sounds/u-short.mp3",
        "/u:/": "sounds/u-long.mp3",
        "/e/": "sounds/e.mp3",
        "/ə/": "sounds/schwa.mp3",
        "/ɜ:/": "sounds/er.mp3",
        "/ɔ:/": "sounds/o-long.mp3",
        "/æ/": "sounds/ae.mp3",
        "/ʌ/": "sounds/u.mp3",
        "/ɑ:/": "sounds/a-long.mp3",
        "/ɒ/": "sounds/o-short.mp3",
        "/ɪə/": "sounds/ie.mp3",
        "/eɪ/": "sounds/ei.mp3",
        "/ʊə/": "sounds/ue.mp3",
        "/ɔɪ/": "sounds/oi.mp3",
        "/eə/": "sounds/ea.mp3",
        "/aɪ/": "sounds/ai.mp3",
        "/aʊ/": "sounds/au.mp3",
        "/əʊ/": "sounds/ou.mp3"
    };

    // Add event listeners
    symbolBoxes.forEach((box) => {
        box.addEventListener("click", () => {
            const symbol = box.innerText;
            symbolTitle.innerText = symbol;
            symbolDescription.innerText = descriptions[symbol];
            audioSource.src = audioFiles[symbol];
            audioElement.load();
            audioElement.style.display = "block";
        });
    });
});
