var items = [
    { img: "https://ik.imagekit.io/ydrtyh0dc/Categories/Home%20Decor/Home%20Decor%201.png", 
        text: "A cozy, sunlit living room with neutral tones, natural textures, soft furnishings, and calm modern decor."
    },
    { img: "https://ik.imagekit.io/ydrtyh0dc/Categories/Home%20Decor/Home%20Decor%202.png",
        text: "A bright, airy kitchen with white cabinetry, warm wood accents, woven barstools, and soft natural light throughout."
    },
    { img: "https://ik.imagekit.io/ydrtyh0dc/Categories/Home%20Decor/Home%20Decor%2011.png",
        text: "A bright spring-inspired pool room filled with greenery, sunlight, and calm water."
    },
    { img: "https://ik.imagekit.io/ydrtyh0dc/Categories/Home%20Decor/Home%20Decor%206.png",
        text: "Candlelit decor and plush textures create an inviting evening atmosphere."
    },
    { img: "https://ik.imagekit.io/ydrtyh0dc/Categories/Home%20Decor/Home%20Decor%203.png",
        text: "A bright blue kitchen with brass accents, woven barstools, white countertops, and soft natural light throughout."
    },
    { img: "https://ik.imagekit.io/ydrtyh0dc/Categories/Home%20Decor/Home%20Decor%204.png",
        text: "A cozy, modern living room with neutral tones, soft textures, and layered lighting."
    },
    { img: "https://ik.imagekit.io/ydrtyh0dc/Categories/Home%20Decor/Home%20Decor%205.png",
        text: "Warm red accents glow softly in a cozy nighttime living room."
    },
    { img: "https://ik.imagekit.io/ydrtyh0dc/Categories/Home%20Decor/Home%20Decor%207.png",
        text: "A cozy green-toned bedroom glowing softly with candlelight, layered textiles, and calming evening ambiance."
    },
    { img: "https://ik.imagekit.io/ydrtyh0dc/Categories/Home%20Decor/Home%20Decor%208.png",
        text: "Warm bedside lamps and natural greenery create a peaceful, intimate nighttime bedroom retreat."
    },
    { img: "https://ik.imagekit.io/ydrtyh0dc/Categories/Home%20Decor/Home%20Decor%209.png",
        text: "An elegant white kitchen with gold accents, marble surfaces, and timeless, upscale design."
    },
    { img: "https://ik.imagekit.io/ydrtyh0dc/Categories/Home%20Decor/Home%20Decor%2010.png",
        text: "A cozy winter living room with dark tones and glowing fireplace."
    },
    { img: "https://ik.imagekit.io/ydrtyh0dc/Categories/Home%20Decor/Home%20Decor%2012.png",
        text: "Spring garden pool oasis."
    },
    { img: "https://ik.imagekit.io/ydrtyh0dc/Categories/Home%20Decor/Home%20Decor%2013.png",
        text: "A cozy autumn patio with fireplace, candles, and fall foliage."
    },
    { img: "https://ik.imagekit.io/ydrtyh0dc/Categories/Home%20Decor/Home%20Decor%2014.png",
        text: "A calm, simple back porch with wicker seating, soft cushions, greenery, and warm lantern light creating a peaceful outdoor retreat."
    },
    { img: "https://ik.imagekit.io/ydrtyh0dc/Categories/Home%20Decor/Home%20Decor%2015.png",
        text: "A simple forest-inspired back porch surrounded by greenery, natural textures, and peaceful woodland atmosphere."
    },
];

const container = document.querySelector('.masonry-container');

items.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('masonry-item');

    div.innerHTML = `
        <img src="${item.img}" alt="Image"/>
        <p>${item.text}</p>
    `;
    container.appendChild(div);
});