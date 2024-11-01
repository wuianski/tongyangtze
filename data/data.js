export function getWorks() {
    const works = [
        {
            id: 1,
            title: "2011 to Present",
            src: "/works_cover/不昧.jpg",
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
            src: "/works_cover/千里之行始於足下.jpg",
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
            src: "/works_cover/山雨欲來.jpg",
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
            src: "/works_cover/差若毫厘繆以千里.jpg",
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
            year: 2020,
            title: "Moving Ink: Tong Yang-Tze",
            link: "https://www.tfam.museum/Exhibition/Exhibition_page.aspx?id=663&ddlLang=en-us",
        }
    ];
    return pastExs;
}

export function getUpcomingExs() {
    const upcomingExs = [
        {
            id: 1,
            year: 2025,
            title: "xxx",
            link: "https://www.metmuseum.org/exhibitions/the-great-hall-commission-tong-yang-tze",
        },
        {
            id: 2,
            year: 2025,
            title: "yyy",
            link: "https://www.mplus.org.hk/en/exhibitions/m-commission-tong-yang-tze/",
        },
        {
            id: 3,
            year: 2026,
            title: "zzz",
            link: "https://www.tfam.museum/Exhibition/Exhibition_page.aspx?id=663&ddlLang=en-us",
        }
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
            title: "yyy",
            link: "https://drive.google.com/file/d/1vK-835gKVGhTZK8_MpEMMPFolNJ8IJB1/view?usp=sharing",
        },
        {
            id: 3,
            year: 1944,
            title: "zzz",
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
        }
    ];
    return press;
}
