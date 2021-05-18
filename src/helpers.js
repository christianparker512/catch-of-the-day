export function formatPrice(cents){
    return (cents/100).toLocaleString("en-US", {
        style: "currency",
        currency: "USd"
    });
}

export function rando(arr){
    return arr[Math.floor(Math.random() *arr.length)];
}
export function slugify(text){
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g,"")
        .replace(/--+/g,"-")
        .replace(/^-+/,"")
        .replace(/-+$/,"");
}

export function getFunName(){
    const adjectives = [
        "Loyal",
        "Honest",
        "Hard Working",
        "Creative",
        "Artistic",
        "Funny",
        "Charismatic",
        "Big",
        "Bald",
        "beautiful"
    ];
    const nouns = [
        "man",
        "dude",
        "buddy",
        "father",
        "Artist",
        "guy",
        "Bob",
        "husband",
        "Bald",
        "dad",
        "son",
        "friend",
        "teacher",
        "coder",
        "programmer"
    ];

}