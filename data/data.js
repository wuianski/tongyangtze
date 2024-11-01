export function getWorks() {
    const works = [
        {
            id: 1,
            title: "2011 to Present",
            src: "/works/鳶飛戾天魚躍于淵.jpeg",
            works: [
                {
                    id: 1,
                    title: "The movement of heaven is powerful.",
                    info: "Sources: The Book of Changes",
                    year: "Year: 2020",
                    size: "Size: 360 x 194 cm",
                    src: "/works/2020天行健.jpeg",
                },
                {
                    id: 2,
                    title: "Renew oneself daily.",
                    info: "Sources: The great learning, The Book of Rites",
                    year: "Year: 2020",
                    size: "Size: 360 x 194 cm",
                    src: "/works/2020日新.jpeg",
                },
                {
                    id: 3,
                    title: "At the auspicious moment, act without delay.",
                    info: "Sources: The Book of Changes",
                    year: "Year: 2020",
                    size: "Size: 360 x 194 cm",
                    src: "/works/2020見機而作.jpeg",
                },
                {
                    id: 4,
                    title: "Delight in the existence of heaven and understand its order.",
                    info: "Sources: The Book of Changes",
                    year: "Year: 2020",
                    size: "Size: 360 x 194 cm",
                    src: "/works/2020樂天知命.jpeg",
                },
                {
                    id: 5,
                    title: "Embracing the way of heaven brings progress.",
                    info: "Sources: The Book of Changes",
                    year: "Year: 2020",
                    size: "Size: 360 x 1037 cm",
                    src: "/works/2020何天之衢道大行也.jpeg",
                },
                {
                    id: 6,
                    title: "There are things that one must not do.",
                    info: "Sources: Zi Lu, The Analects of Confucius",
                    year: "Year: 2017",
                    size: "Size: 69 x 138 cm",
                    src: "/works/2017有所不為.jpeg",
                },
                {
                    id: 7,
                    title: "If you allow things to unfold naturally, they will take care of themselves.",
                    info: "Sources: Zhao Zhiqian, Quing dynasty",
                    year: "Year: 2017",
                    size: "Size: 69 x 138 cm",
                    src: "/works/2017了了不了之.jpeg",
                },
                {
                    id: 8,
                    title: "I do not open up the truth to one who is not eager to get knowledge, nor help out any one who is not anxious to explain himself.",
                    info: "Sources: Shu Er, The Analects of Confucius",
                    year: "Year: 2015",
                    size: "Size: 97 x 180 cm",
                    src: "/works/2015不憤不啓不悱不發.jpeg",
                },
                {
                    id: 9,
                    title: "They are determined to be sincere in what they do.",
                    info: "Sources: Zi Lu, The Analects of Confucius",
                    year: "Year: 2015",
                    size: "Size: 97 x 180 cm",
                    src: "/works/2015言必信行必果.jpeg",
                },
                {
                    id: 10,
                    title: "Three-point Reflection.",
                    info: "Sources: Xue Er, The Analects of Confucius",
                    year: "Year: 2014",
                    size: "Size: 180 x 97 cm",
                    src: "/works/2014三省.jpeg",
                },
                {
                    id: 11,
                    title: "What is full tumbles over.",
                    info: "Sources: The Right Hand Vessel, The Xunzi",
                    year: "Year: 2013",
                    size: "Size: 144 x 152 cm",
                    src: "/works/2013滿則覆.jpeg",
                },
                {
                    id: 12,
                    title: "Don't ignore one's conscience.",
                    info: "Sources: Chapter 14, Dao De Jing, Laozi",
                    year: "Year: 2013",
                    size: "Size: 144 x 152 cm",
                    src: "/works/2013不昧.jpeg",
                },
                {
                    id: 13,
                    title: "Solitary joy",
                    info: "Sources: King Hui of Liang: Part Two, The Mencius",
                    year: "Year: 2011",
                    size: "Size: 180 x 776 cm (180 x 97cm/ each, set of 8)",
                    src: "/works/獨樂樂.jpeg",
                },
                {
                    id: 14,
                    title: "The hawk flies up to heaven, the fish leaps in the deep.",
                    info: "Sources: Major Court Hymns, The Book of Odes",
                    year: "Year: 2011",
                    size: "Size: 180 x 776 cm (180 x 97cm/ each, set of 8)",
                    src: "/works/鳶飛戾天魚躍于淵.jpeg",
                },
            ],
        },
        {
            id: 2,
            title: "2001 to 2010",
            src: "/works/任所適.jpeg",
            works: [
                {
                    id: 1,
                    title: "Out of Nought: Not to do",
                    info: "Sources: Zi Lu, The Analects of Confucius",
                    year: "Year: 2009",
                    size: "Size: 138 x 276cm",
                    src: "/works/「無中生有」系列——有所不為.jpeg",
                },
                {
                    id: 2,
                    title: "Who will join me in drinking to the radiant moon?",
                    info: "Sources: Congratulations to the Groom, Xin Qi-ji, Song dynasty",
                    year: "Year: 2006",
                    size: "Size: 180 x 776 cm (180 x 97cm/ each, set of 8)",
                    src: "/works/誰共我醉明月.jpeg",
                },
                {
                    id: 3,
                    title: "Mine the mountains [for copper], boil the sea water [for salt].",
                    info: "Sources: Stele with Inscription for Expressing Loyalty Prospect, Su Shi, Song dynasty",
                    year: "Year: 2006",
                    size: "Size: 180 x 728 cm (180 x 91cm/ each, set of 8)",
                    src: "/works/鑄山煮海.jpeg",
                },
                {
                    id: 4,
                    title: "The mountain rain is about to fall; in the pavilion, the wind swirls about everywhere.",
                    info: "Sources: The Eastern Rostrum of Xianyang, Xu Hun, Tang dynasty",
                    year: "Year: 2006",
                    size: "Size: 180 x 776 cm (180 x 97cm/ each, set of 8)",
                    src: "/works/山雨欲來風滿樓.jpeg",
                },
                {
                    id: 5,
                    title: "Having arrived, be at ease.",
                    info: "Sources: Ji Shi, The Analects of Confucius",
                    year: "Year: 2006",
                    size: "Size: 180 x 776 cm (180x97cm/each, set of 8)",
                    src: "/works/既來之則安之.jpeg",
                },
                {
                    id: 6,
                    title: "Find work suitable to your talents.",
                    info: "Sources: Sutras 13, The Middle-length Discourses",
                    year: "Year: 2003",
                    size: "Size: 360 x 873 cm",
                    src: "/works/任所適.jpeg",
                },
                {
                    id: 7,
                    title: "Cutting and filing, chiseling and polishing, pure as gold or as tin, soft and rich as a scepter of jade.",
                    info: "Sources: Airs of the States, The Book of Odes",
                    year: "Year: 2002",
                    size: "Size: 182 x 736 cm (182 x 92cm/ each, set of 8)",
                    src: "/works/如切如磋如琢如磨如金如錫如圭如壁.jpeg",
                },
                {
                    id: 8,
                    title: "A swan goose elevates itself little by little to the perfect rock.",
                    info: "Sources: The Book of Changes",
                    year: "Year: 2002",
                    size: "Size: 181 x 368 cm (181x92 cm/each, set of 4)",
                    src: "/works/鴻漸于磐.jpeg",
                },
                {
                    id: 9,
                    title: "To wander while lying down.",
                    info: "Sources: Biography of Zong Bing, The History of the Song",
                    year: "Year: 2002",
                    size: "Size: 69 x 69 cm",
                    src: "/works/臥遊.jpeg",
                }
            ],
        },
        {
            id: 3,
            title: "1991 to 2000",
            src: "/works/浩如烟海.jpeg",
            works: [
                {
                    id: 1,
                    title: "There is another world.",
                    info: "Sources: Questions and Answers in the Mountains, Li Bai, Tang dynasty",
                    year: "Year: 2000",
                    size: "Size: 137.5 x 250.7 cm",
                    src: "/works/別有天.jpeg",
                },
                {
                    id: 2,
                    title: "Looking unyielding and strong.",
                    info: "Sources: Men of Former Times 11, The Analects of Confucius",
                    year: "Year: 2000",
                    size: "Size: 61.8 x 137.6 cm",
                    src: "/works/行行如也.jpeg",
                },
                {
                    id: 3,
                    title: "I alone am respectable.",
                    info: "Sources: Story of the Prince Attaining Enlightenment 1, The New Collection of Dunhuang Transformation Texts．Volume 3",
                    year: "Year: 1998",
                    size: "Size: 70 x 138 cm",
                    src: "/works/唯我獨尊.jpeg",
                },
                {
                    id: 4,
                    title: "Vast as the misty sea.",
                    info: "Sources: On a Dream, Shi Zhen-Guang, Sui dynasty",
                    year: "Year: 1997",
                    size: "Size: 138 x 254 cm",
                    src: "/works/浩如烟海.jpeg",
                },
                {
                    id: 5,
                    title: "Don't ignore one's conscience.",
                    info: "Sources: Chapter 14, Dao De Jing, Laozi",
                    year: "Year: 1997",
                    size: "Size: 66.3 x 134.6 cm",
                    src: "/works/不昧.jpeg",
                },
                {
                    id: 6,
                    title: "Loitering About",
                    info: "Sources: Inner Chapters, The Zhuangzi",
                    year: "Year: 1997",
                    size: "Size: 62 x53 cm",
                    src: "/works/逍遙遊.jpeg",
                },
                {
                    id: 7,
                    title: "Understanding your heart.",
                    info: "Sources: Buddha Sayings",
                    year: "Year: 1996",
                    size: "Size: 68 x 68 cm",
                    src: "/works/觀心.jpeg",
                },
                {
                    id: 8,
                    title: "[If at the beginning there is] a difference of a millimeter, [in the end] the discrepancy will be a thousand li.",
                    info: "Sources: Explanations of the Classics, The Book of Rites",
                    year: "Year: 1992",
                    size: "Size: 69 x 69 cm",
                    src: "/works/差若毫厘繆以千里.jpeg",
                },
                {
                    id: 9,
                    title: " [When asked about filial piety] the difficulty is with countenance.",
                    info: "Sources: Exercising Government, The Analects of Confucius",
                    year: "Year: 1991",
                    size: "Size: 69 x 69 cm",
                    src: "/works/色難.jpeg",
                }
            ],
        },
        {
            id: 4,
            title: "1990之前",
            src: "/works/滄海之滉漾浥勺水 不足以削其廣.jpeg",
            works: [
                {
                    id: 1,
                    title: "A Journey of a thousand miles begins with the first step.",
                    info: "Sources: Chapter 64, Dao De Jing, Laozi",
                    year: "Year: 1987",
                    size: "Size: 68 x 70 cm",
                    src: "/works/千里之行始於足下.jpeg",
                },
                {
                    id: 2,
                    title: "The mountain rain is imminent.",
                    info: "Sources: The Eastern Rostrum of Xianyang, Xu Hun, Tang dynasty",
                    year: "Year: 1982",
                    size: "Size: 66 x 70 cm",
                    src: "/works/山雨欲來.jpeg",
                },
                {
                    id: 3,
                    title: "Mist and clouds appear and disappear on a whim. Half vanishing into thin air, half lingering in the mountain. I pass my days and months in leisure, like the free-spirited mist and clouds; secluded deep in the remote forest, where I listen to sounds of the murmuring stream.",
                    info: "Sources: Painting Scroll in Gold and Green, Qian Xuan, Song dynasty",
                    year: "Year: 1973",
                    size: "Size: 34 x 103 cm",
                    src: "/works/烟雲出沒有無間 半在空虛半在山 我亦閒中消日月 幽林深處聽潺湲.jpeg",
                },
                {
                    id: 4,
                    title: "Taking a spoonful of water from surging sea cannot reduce its immensity.",
                    info: "Sources: The Master Who Embraces simplicity, Ge Hong, Eastern Jin period",
                    year: "Year: 1973",
                    size: "Size: 81 x 86.5 cm",
                    src: "/works/滄海之滉漾浥勺水 不足以削其廣.jpeg",
                }
            ],
        }

    ];
    return works;
}

export function getOthers() {
    const others = [
        {
            id: 1,
            title: "Jason Wu Collection Spring 2025",
            year: "2024",
            context: "Jason Wu Collaborates with Calligrapher Tong Yang-Tze for his Spring 2025 Collection.",
            src: "/others_cover/jasonwu.jpeg",
            link: "https://www.youtube.com/watch?v=ybANTIlVs_Q",
        },
        {
            id: 2,
            title: "Ink | Pulse",
            year: "2023",
            context: "The first dual-artist commission created specifically for the M+ Facade, Ink | Pulse is a live generative work that is a cross-disciplinary collaboration between acclaimed Taiwanese calligraphy artist Tong Yang-Tze and Hong Kong media artist Chris Cheung (h0nh1m). The algorithm-driven commission is inspired by and based on Tong Yang-Tze's Silent Music series, which are 100 ink-based pieces collected during Tong's creative process over the years. Renditions of Tong’s masterful strokes, dots, and markings are animated into pulsating apparitions and movements, as though sight-reading the artist’s soundless graphical score.",
            src: "/others_cover/ink-pulse.jpeg",
            link: "https://www.mplus.org.hk/en/mplus-facade/ink-pulse/",
        },
        {
            id: 3,
            title: "Ink",
            year: "2023",
            context: "In their newest collaboration Ink, choreographer Huang Yi and audiovisiual pioneer Ryoichi Kurokawa dismantle and reconstruct the lines from a hundred artworks in renowned calligrapher Tong Yang-Tze’s “Silent Music” series, exploring the various texture between body, sound, visual and space.  Hovering between delicate and frantic dynamics, Yi digs deeper into his cultural roots and reveals a wild movement language, turning dancers’ bodies into brushes that paint and leave marks on stage. With speed and a ferocious vocabulary, dancers churn like a vortex in one moment, only to become flowing liquid in the next. Kurokawa transforms the inkblots into luminous tracks, echoing and merging with the unique brushstrokes of Tong, constructing a continuous flow of paintings via stunning holographic projection.  Combining Yi’s explosive and precise language and Kurokawa’s meticulous and sophisticated artistry, Ink is a work that crosses borders and fuses analog and digital, reflecting the harmonic tension between the realms of ancient practice and future design.  Ink was co-commissioned by the National Taichung Theater and National Theater, Taipei in Taiwan and had its world premiere in June 2023.",
            src: "/others_cover/ink-yihuang1.jpeg",
            link: "https://huangyistudio.com/archives/project/ink",
        },
    ];
    return others;
}

export function getAbout() {
    const about = `The presence is digital, print is dead. Really? Instead of weighing between the fexibility of digital media and the 
lovely feeling of a collectable, tactile print magazine, the initiators of «Wasserleben» combined both. While the 
printed content was kept short and sweet, video material and audio enriched the magazine to a refreshing way 
of «reading». With the use of augmented reality, still pictures came alive and the reader heard artists like Mike 
Meiré telling their stories — in their own words, with their own voice.`;

    return about;
}

export function getCurrentExs() {
    const currentExs = [
        {
            id: 1,
            year: 2024,
            title: "The Great Hall Commission: Tong Yang-Tze, Dialogue",
            link: "https://www.metmuseum.org/exhibitions/the-great-hall-commission-tong-yang-tze",
        },
    ];
    return currentExs;
}

export function getPastExs() {
    const pastExs = [
        {
            id: 1,
            year: 2021,
            title: "M+ Commission: Tong Yang-Tze",
            link: "https://www.mplus.org.hk/en/exhibitions/m-commission-tong-yang-tze/",
        },
        {
            id: 2,
            year: 2019,
            title: "Retrospective exhibition “Moving Ink: Tong Yang-Tze” at the Taipei Fine Arts Museum, Taipei.",
            link: "https://www.tfam.museum/Exhibition/Exhibition_page.aspx?id=663&ddlLang=en-us",
        },
        {
            id: 3,
            year: 2018,
            title: "“Golden Proverbs——Calligraphy Works of Tong Yang-Tze” at Eslite Bookstore Xinyi Branch Performance Hall, Taipei. ",
            link: "",
        },
        {
            id: 4,
            year: 2016,
            title: "“Silent Music: Solo Exhibition of Tong Yang-Tze” at BOZAR Centre for Fine Arts, Brussels, Belgium.",
            link: "",
        },
        {
            id: 5,
            year: 2016,
            title: "“Sayings of Confucius” at Eslite Bookstore Xinyi Branch Performance Hall",
            link: "",
        },
        {
            id: 6,
            year: 2016,
            title: "“Tune: Immortals by the River (Billows surge eastward in the Yangtze River) ”at Eslite Bookstore Suzhou, China.",
            link: "",
        },
        {
            id: 7,
            year: 2014,
            title: "“Sayings of Laozi and Zhuangzi” at Eslite Bookstore Xinyi Branch Performance Hall, Taipei.",
            link: "",
        },
        {
            id: 8,
            year: 2013,
            title: "“Contemplating Change” at Eslite Bookstore Xinyi Branch Performance Hall, Taipei.",
            link: "",
        },
        {
            id: 9,
            year: 2012,
            title: "“Solitary Joy” at Eslite Bookstore Xinyi Branch Performance Hall, Taipei.",
            link: "",
        },
        {
            id: 10,
            year: 2012,
            title: "“Silent Music—Variations” at the Kaohsiung Museum of Fine Arts, Kaohsiung.",
            link: "",
        },
        {
            id: 11,
            year: 2011,
            title: "Solo exhibition at Taiwan Academy, New York. ",
            link: "",
        },
        {
            id: 12,
            year: 2010,
            title: "“Brush Beyond Space: Works of Tong Yang-Tze” at the Hong Kong Heritage Museum, Hong Kong.",
            link: "",
        },
        {
            id: 13,
            year: 2009,
            title: "“Dialogues: An Exhibition of Chinese Calligraphy by Tong Yang-Tze” at the National Taiwan Museum of Art, Taichung. ",
            link: "",
        },
        {
            id: 14,
            year: 2009,
            title: "“Eternal Rhythm of Ink: Calligraphy by Tong Yang-Tze & Designs Based on Tong’s Art for Creative Industry” at the Kaohsiung Museum of Fine Arts, Kaohsiung.",
            link: "",
        },
        {
            id: 15,
            year: 2008,
            title: "“Chen Mo Shi Jin (Silence Is Gold) ”at Eslite Bookstore Xinyi Branch Performance Hall, Taipei.",
            link: "",
        },
        {
            id: 16,
            year: 2007,
            title: "“Heartstrings, Silent Music: Works of Tong Yang-Tze” at Eslite Bookstore Xinyi Branch Performance Hall, Taipei.",
            link: "",
        },
        {
            id: 17,
            year: 2006,
            title: "“Chen Mo Shi Jin (Ink Like Gold) ” at Eslite Vision, Taipei.",
            link: "",
        },
        {
            id: 18,
            year: 2004,
            title: "“Realm of Feelings—A Dialogue of Calligraphy and Space” a collaborative exhibition with architectural designer Ray Chen, at the Taipei Fine Arts Museum.",
            link: "",
        },
        {
            id: 19,
            year: 2003,
            title: "“Unrestrained Freedom—A Dialogue of Calligraphy and Space” at the National Theater and Concert Hall.",
            link: "",
        },
        {
            id: 20,
            year: 2003,
            title: "Solo exhibition at Taiwan Academy, New York, USA.",
            link: "",
        },
        {
            id: 21,
            year: 2002,
            title: "“Between Real and Unreal, Change to Overcome” at DaAi TV in collaboration with architect Eric Yao.",
            link: "",
        },
        {
            id: 22,
            year: 2000,
            title: "Solo exhibition at the National Museum of History, Taipei, Mountain Art Museum, Kaohsiung, and National Central University, Taoyuan.",
            link: "",
        },
        {
            id: 23,
            year: 1998,
            title: "Solo exhibition at the National Museum of History, Taipei.",
            link: "",
        },
        {
            id: 24,
            year: 1997,
            title: "Solo exhibition at Eslite Vision, Taipei.",
            link: "",
        },
        {
            id: 25,
            year: 1997,
            title: "Participated in “The Living Brush,” an exhibition of four calligraphy artists, in San Francisco, USA. Fellow participating artists included C. C. Wang, Fred Fang-Yu Wang and Tseng Yu-Ho.",
            link: "",
        },
        {
            id: 26,
            year: 1994,
            title: "Solo exhibitions at the Taipei Fine Arts Museum in Taipei and Duchamp Gallery in Kaohsiung.",
            link: "",
        },
        {
            id: 27,
            year: 1993,
            title: "Solo exhibition at Eslite Vision, Taipei, and the National Tsing Hua University Arts Center, Hsinchu.",
            link: "",
        },
        {
            id: 28,
            year: 1992,
            title: "Participate in the “International Modern Calligraphy Exhibition”, Seoul, Korea.",
            link: "",
        },
        {
            id: 29,
            year: 1992,
            title: "“Encountering the Others”international art exhibition, Kassel, Germany.",
            link: "",
        },
        {
            id: 30,
            year: 1989,
            title: "Solo exhibition at Howard Salon, Taipei.",
            link: "",
        },
        {
            id: 31,
            year: 1987,
            title: "Solo exhibition at Spring Gallery, Taipei.",
            link: "",
        },
        {
            id: 32,
            year: 1983,
            title: "Solo exhibition at Spring Gallery, Taipei.",
            link: "",
        },
        {
            id: 33,
            year: 1982,
            title: "Solo exhibition at Hugh Moss Gallery, London, UK.",
            link: "",
        },
        {
            id: 34,
            year: 1980,
            title: "Solo exhibition at Spring Gallery, Taipei.",
            link: "",
        },
        {
            id: 35,
            year: 1979,
            title: " “Five Artists Exhibition” at Apollo Art Gallery, Taipei.",
            link: "",
        },
        {
            id: 36,
            year: 1979,
            title: "Solo exhibition at Taichung City Culture Center.",
            link: "",
        },
        {
            id: 37,
            year: 1978,
            title: "Group exhibitions at Vassar College, New York, USA, and National Library, Ottawa, Canada. Solo exhibition at the National Museum of History, Taipei, Taiwan.",
            link: "",
        },
        {
            id: 38,
            year: 1977,
            title: "“Exhibition of Contemporary Christian Art” in Halifax, Canada. ",
            link: "",
        },
        {
            id: 39,
            year: 1976,
            title: "Group exhibitions across USA, including: Indianapolis Museum of Art, Indiana, Eisenhower College, New York, Bowdoin College, Maine, and Skidmore College, New York.",
            link: "",
        },
        {
            id: 40,
            year: 1975,
            title: "Group exhibitions across North America, including: Townson State College, Baltimore, Maryland, University of Pennsylvania, Philadelphia, Mount Holyoke College, Massachusetts, Ray Ladies Gallery, New Jersey, Wang Ming Gallery, Washington D.C., HMK Fine Art Studio, New York, USA; and Saint Mary’s University in Halifax, Canada.",
            link: "",
        },
        {
            id: 41,
            year: 1974,
            title: "Solo calligraphy exhibition at St. John’s University, New York, USA.",
            link: "",
        },
        {
            id: 42,
            year: 1973,
            title: "Solo exhibition at Spring Gallery, Taipei.",
            link: "",
        },
        {
            id: 43,
            year: 1973,
            title: "“Five Artists Calligraphy Exhibition” at the National Museum of History, Taipei.",
            link: "",
        },
        {
            id: 44,
            year: 1969,
            title: "Solo exhibition of calligraphy and paintings at the University of Massachusetts Amherst.s",
            link: "",
        }
    ];
    return pastExs;
}

export function getUpcomingExs() {
    const upcomingExs = [
        {
            id: 1,
            year: null,
            title: "",
            link: "",
        },
        {
            id: 2,
            year: null,
            title: "",
            link: "",
        },

    ];
    return upcomingExs;
}

export function getArticle() {
    const article = [
        {
            id: 1,
            year: 2014,
            auther: "Han Pao-Teh",
            title: "Painting Within Calligraphy—On Tong Yang-Tze’s Contemporary Calligraphy",
            link: "https://drive.google.com/file/d/1Vm4R1xmwImEuY20Ei5SEktRlAdEo1MK0/view?usp=sharing",
        },
        {
            id: 2,
            year: 2011,
            title: "Sounds of Nature: Music with Form in the Calligraphy of Tong Yang-Tze",
            link: "https://drive.google.com/file/d/1vK-835gKVGhTZK8_MpEMMPFolNJ8IJB1/view?usp=sharing",
        },
        {
            id: 3,
            year: 1944,
            title: "Remarks on the Sayings of Lazoi and Zhuangzi Exhibition",
            link: "https://drive.google.com/file/d/1BOkPc1gKwlnydtZl_fxuUfYMn8k7gF_2/view?usp=sharing",
        }
    ];
    return article;
}

export function getPress() {
    const press = [
        {
            id: 1,
            name: "OCULA",
            year: 2023,
            title: "Created by calligraphy artist Tong Yang-Tze and new media artist Chris Cheung (h0nh1m), the work will go on display from 30 June.",
            link: "https://ocula.com/magazine/art-news/m-to-show-generative-ink-work-on-tv-like-facade/",
        },
        {
            id: 2,
            name: "The Guardian",
            year: 2021,
            title: "‘She has invaded all our lives’ – Tong Yang-tze, the artist making calligraphy cool",
            link: "https://www.theguardian.com/artanddesign/2021/nov/16/tong-yang-tze-artist-making-calligraphy-cool-m-hong-kong",
        },
        {
            id: 3,
            name: "Taiwan News",
            year: 2020,
            title: "Renowned Taiwanese calligrapher showcases colossal artwork in US",
            link: "https://taiwannews.com.tw/news/3894223",
        },
        {
            id: 4,
            name: "OCULA",
            year: 2018,
            title: "From Ink to Apparel III – Another Calligraphy and Fashion Crossover",
            link: "https://english.cw.com.tw/article/article.action?id=2170&from=search",
        },
        {
            id: 5,
            name: "The Guardian",
            year: 2017,
            title: "Flouting Calligraphic Conventions: Tong Yang-tze Breathes New Life into an Old Art",
            link: "https://www.taiwan-panorama.com/en/Articles/Details?Guid=3aeb1bc6-f08b-47ea-9572-fed0ec2d89a6&langId=3&CatId=8&postname=Flouting%20Calligraphic%20Conventions%3A%20Tong%20Yang-tze%20Breathes%20New%20Life%20into%20an%20Old%20Art",
        },
        {
            id: 6,
            name: "Taiwan News",
            year: 2016,
            title: "Reviving the Joy of ‘Characters’",
            link: "https://english.cw.com.tw/article/article.action?id=72",
        },
        {
            id: 7,
            name: "OCULA",
            year: 2016,
            title: "Innovative Exhibition Showcases Calligraphy in 16,384 Ways",
            link: "https://international.thenewslens.com/article/43981",
        },
        {
            id: 8,
            name: "The Guardian",
            year: 2012,
            title: "Calligrapher Tong Yang-tze creates soundless symphony",
            link: "https://www.taipeitimes.com/News/lang/archives/2012/04/16/2003530418",
        },
        {
            id: 9,
            name: "Taiwan News",
            year: 1980,
            title: "She Wields Her Mighty Pen",
            link: "https://www.taiwan-panorama.com/en/Articles/Details?Guid=4efb08a5-2c32-400c-8ccb-ff134d883a49&langId=3&CatId=8&postname=She%20Wields%20Her%20Mighty%20Pen",
        }
    ];
    return press;
}
