flowers = ["Daisy",
"Rose",
"Iris",
"Narcissus",
"Orchid",
"Tulip",
"Sunflower",
"Cyclamen",
"Carnation",
"Poppy",
"Pansy",
"Violet",
"Mimosa",
"Daffodil",
"Lily",
"Hyacinth",
"Anemone",
"Gladiolus",
"Forget-me-not",
"Bluebell",
"Bougainvillea",
"Buttercup",
"Cactus flower",
"Camellia",
"Chrysanthemum",
"Cockscomb",
"Confederate rose",
"Crocus",
"Dahlia",
"Eglantine",
"Flamboyant",
"Foxglove",
"Geranium",
"Gerbera",
"Hibiscus",
"Honeysuckle",
"Hop",
"Jasmine",
"Lavender",
"Lilac",
"Lotus",
"Magnolia",
"Marigold",
"Morning-glory",
"Orange rose",
"Peony",
"Primrose",
"Snapdragon",
"Snowdrop",
"Tuberose",
"Apricot blossom",
"Cherry blossom",
"Dandelion",
"Moss rose",
"Shameplant",
"Hydrange"]

function getMatches(_name){
    let matches = [], fname = "", name = _name.toLowerCase();

    for(x of flowers){
        fname = x.toLowerCase()
        if(fname.includes(name)){
            matches.push(x)
        }
    }
    return matches;
}