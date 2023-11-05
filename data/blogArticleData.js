const blogArticleData = [
    {
        id: 1,
        heading: '10 легких шагов к первому уроку вокала',
        description: ' С ними ваш старт в мир пения пройдёт легко и гармонично',
        mainImage: '/img/blogArticleImg.jpeg',

        text: [
            `Позаботьтесь о том, чтобы на уроке у вас была вода. Возьмите с собой небольшую бутылочку.`,

            `Оденьтесь удобно и комфортно. Никаких сдавливающих горло свитеров и водолазок, плотных и стягивающих украшений на шее.`,

            `Не приходите на урок простуженным или с любым другим недомоганием. Если чувствуете, что не в порядке - перенесите занятие.`,

            `В день урока исключите из своего меню кофе, семечки, цитрусовые, алкоголь, шоколад, табак. А в дальнейшем постарайтесь избегать употребление продуктов, которые могут вызывать раздражение слизистой, першение и кашель. Если пение - ваша мечта/ хобби/ профессия, то вам точно не нужны эти симптомы.`,

            `Подумайте над репертуаром. Подготовьте список песен, которые вы хотели бы исполнять, и покажите его педагогу.`,

            `Возьмите с собой на урок распечатанные тексты песен, тетрадь и ручку. 
            Не стесняйтесь записывать комментарии наставника и, при необходимости, записывать на диктофон или снимать на видео упражнения.`,

            `Настроение тоже играет роль! Настройтесь на позитивный лад перед уроком. Постарайтесь оставить за порогом класса все бытовые проблемы, чтобы получить от занятия настоящее удовольствие!`,

            `Ваш последний прием пищи должен быть за 2-3 часа до урока. Полный желудок не позволит вашей диафрагме работать на полную силу, но и натощак петь тоже нельзя. `,

            `Приходите на урок хорошо отдохнувшим.`,

            `И помните! Если вы очень хотите петь - выберите педагога и запишитесь на пробный урок! Не страшно, если вы забудете все пункты этой памятки перед первым занятием. Вам все объяснит, покажет, подскажет и напомнит ваш наставник!`,
        ],

        images: [],

    },
    // {
    //     id: 2,
    //     heading: 'Заголовок второй',
    //     description: 'Вторая статья блога о чем-то интересном и музыкальном',
    //     mainImage: '/img/blogArticleImg.jpeg',

    //     text: [
    //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    //         labore et dolore magna aliqua. Laoreet sit amet cursus sit. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. 
    //         Nulla porttitor massa id neque. Erat nam at lectus urna duis convallis convallis tellus. 
    //         Quis imperdiet massa tincidunt nunc pulvinar sapien. Molestie ac feugiat sed lectus vestibulum mattis. 
    //         Integer quis auctor elit sed vulputate mi sit. Sit amet consectetur adipiscing elit. Ipsum dolor sit amet 
    //         consectetur adipiscing elit. Aenean pharetra magna ac placerat. Potenti nullam ac tortor vitae purus faucibus 
    //         ornare suspendisse sed. Mi quis hendrerit dolor magna.`,

    //         `Volutpat ac tincidunt vitae semper quis lectus nulla at. Leo urna molestie at elementum. 
    //         Ipsum consequat nisl vel pretium lectus quam id leo in. Sed elementum tempus egestas sed sed risus pretium quam. 
    //         Sed vulputate odio ut enim blandit volutpat. Sit amet consectetur adipiscing elit duis tristique sollicitudin. 
    //         Molestie at elementum eu facilisis sed odio morbi quis commodo. Amet risus nullam eget felis eget nunc lobortis. 
    //         Curabitur vitae nunc sed velit dignissim sodales. Porta nibh venenatis cras sed. Volutpat diam ut venenatis 
    //         tellus in metus vulputate. Nulla aliquet porttitor lacus luctus accumsan. Aliquam malesuada bibendum arcu vitae elementum.`,

    //         `A diam maecenas sed enim ut sem viverra aliquet. Iaculis urna id volutpat lacus laoreet. 
    //         Lectus quam id leo in. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Sagittis id consectetur 
    //         purus ut faucibus pulvinar elementum. Integer vitae justo eget magna fermentum iaculis. Consequat ac felis donec et.
    //         Eu facilisis sed odio morbi. Quis vel eros donec ac odio. Facilisis sed odio morbi quis commodo odio aenean sed. 
    //         Eget nunc scelerisque viverra mauris in aliquam. Turpis tincidunt id aliquet risus feugiat in ante metus. 
    //         Condimentum mattis pellentesque id nibh tortor id. Aliquam eleifend mi in nulla posuere sollicitudin. 
    //         Gravida quis blandit turpis cursus. Lacinia quis vel eros donec ac odio tempor orci. Vitae justo eget magna 
    //         fermentum iaculis eu. Pellentesque habitant morbi tristique senectus. Mauris rhoncus aenean vel elit scelerisque 
    //         mauris pellentesque pulvinar. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus.`,
    //     ],

    //     images: ['/img/articlesImg/article_1/3.jpg',],
    // },
    // {
    //     id: 3,
    //     heading: 'Заголовок третий',
    //     description: 'Третья статья блога о чем-то интересном и музыкальном',
    //     mainImage: '/img/blogArticleImg.jpeg',

    //     text: [
    //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    //         labore et dolore magna aliqua. Laoreet sit amet cursus sit. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. 
    //         Nulla porttitor massa id neque. Erat nam at lectus urna duis convallis convallis tellus. 
    //         Quis imperdiet massa tincidunt nunc pulvinar sapien. Molestie ac feugiat sed lectus vestibulum mattis. 
    //         Integer quis auctor elit sed vulputate mi sit. Sit amet consectetur adipiscing elit. Ipsum dolor sit amet 
    //         consectetur adipiscing elit. Aenean pharetra magna ac placerat. Potenti nullam ac tortor vitae purus faucibus 
    //         ornare suspendisse sed. Mi quis hendrerit dolor magna.`,

    //         `Volutpat ac tincidunt vitae semper quis lectus nulla at. Leo urna molestie at elementum. 
    //         Ipsum consequat nisl vel pretium lectus quam id leo in. Sed elementum tempus egestas sed sed risus pretium quam. 
    //         Sed vulputate odio ut enim blandit volutpat. Sit amet consectetur adipiscing elit duis tristique sollicitudin. 
    //         Molestie at elementum eu facilisis sed odio morbi quis commodo. Amet risus nullam eget felis eget nunc lobortis. 
    //         Curabitur vitae nunc sed velit dignissim sodales. Porta nibh venenatis cras sed. Volutpat diam ut venenatis 
    //         tellus in metus vulputate. Nulla aliquet porttitor lacus luctus accumsan. Aliquam malesuada bibendum arcu vitae elementum.`,

    //         `A diam maecenas sed enim ut sem viverra aliquet. Iaculis urna id volutpat lacus laoreet. 
    //         Lectus quam id leo in. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Sagittis id consectetur 
    //         purus ut faucibus pulvinar elementum. Integer vitae justo eget magna fermentum iaculis. Consequat ac felis donec et.
    //         Eu facilisis sed odio morbi. Quis vel eros donec ac odio. Facilisis sed odio morbi quis commodo odio aenean sed. 
    //         Eget nunc scelerisque viverra mauris in aliquam. Turpis tincidunt id aliquet risus feugiat in ante metus. 
    //         Condimentum mattis pellentesque id nibh tortor id. Aliquam eleifend mi in nulla posuere sollicitudin. 
    //         Gravida quis blandit turpis cursus. Lacinia quis vel eros donec ac odio tempor orci. Vitae justo eget magna 
    //         fermentum iaculis eu. Pellentesque habitant morbi tristique senectus. Mauris rhoncus aenean vel elit scelerisque 
    //         mauris pellentesque pulvinar. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus.`,
    //     ],

    //     images: [],
    // },
    // {
    //     id: 4,
    //     heading: 'Заголовок четвертый',
    //     description: 'Четвертая статья блога о чем-то интересном и музыкальном',
    //     mainImage: '/img/blogArticleImg.jpeg',

    //     text: [
    //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    //         labore et dolore magna aliqua. Laoreet sit amet cursus sit. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. 
    //         Nulla porttitor massa id neque. Erat nam at lectus urna duis convallis convallis tellus. 
    //         Quis imperdiet massa tincidunt nunc pulvinar sapien. Molestie ac feugiat sed lectus vestibulum mattis. 
    //         Integer quis auctor elit sed vulputate mi sit. Sit amet consectetur adipiscing elit. Ipsum dolor sit amet 
    //         consectetur adipiscing elit. Aenean pharetra magna ac placerat. Potenti nullam ac tortor vitae purus faucibus 
    //         ornare suspendisse sed. Mi quis hendrerit dolor magna.`,

    //         `Volutpat ac tincidunt vitae semper quis lectus nulla at. Leo urna molestie at elementum. 
    //         Ipsum consequat nisl vel pretium lectus quam id leo in. Sed elementum tempus egestas sed sed risus pretium quam. 
    //         Sed vulputate odio ut enim blandit volutpat. Sit amet consectetur adipiscing elit duis tristique sollicitudin. 
    //         Molestie at elementum eu facilisis sed odio morbi quis commodo. Amet risus nullam eget felis eget nunc lobortis. 
    //         Curabitur vitae nunc sed velit dignissim sodales. Porta nibh venenatis cras sed. Volutpat diam ut venenatis 
    //         tellus in metus vulputate. Nulla aliquet porttitor lacus luctus accumsan. Aliquam malesuada bibendum arcu vitae elementum.`,

    //         `A diam maecenas sed enim ut sem viverra aliquet. Iaculis urna id volutpat lacus laoreet. 
    //         Lectus quam id leo in. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Sagittis id consectetur 
    //         purus ut faucibus pulvinar elementum. Integer vitae justo eget magna fermentum iaculis. Consequat ac felis donec et.
    //         Eu facilisis sed odio morbi. Quis vel eros donec ac odio. Facilisis sed odio morbi quis commodo odio aenean sed. 
    //         Eget nunc scelerisque viverra mauris in aliquam. Turpis tincidunt id aliquet risus feugiat in ante metus. 
    //         Condimentum mattis pellentesque id nibh tortor id. Aliquam eleifend mi in nulla posuere sollicitudin. 
    //         Gravida quis blandit turpis cursus. Lacinia quis vel eros donec ac odio tempor orci. Vitae justo eget magna 
    //         fermentum iaculis eu. Pellentesque habitant morbi tristique senectus. Mauris rhoncus aenean vel elit scelerisque 
    //         mauris pellentesque pulvinar. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus.`,
    //     ],

    //     images: [],
    // },
    // {
    //     id: 5,
    //     heading: 'Заголовок пятый',
    //     description: 'Пятая статья блога о чем-то интересном и музыкальном',
    //     mainImage: '/img/blogArticleImg.jpeg',

    //     text: [
    //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    //         labore et dolore magna aliqua. Laoreet sit amet cursus sit. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. 
    //         Nulla porttitor massa id neque. Erat nam at lectus urna duis convallis convallis tellus. 
    //         Quis imperdiet massa tincidunt nunc pulvinar sapien. Molestie ac feugiat sed lectus vestibulum mattis. 
    //         Integer quis auctor elit sed vulputate mi sit. Sit amet consectetur adipiscing elit. Ipsum dolor sit amet 
    //         consectetur adipiscing elit. Aenean pharetra magna ac placerat. Potenti nullam ac tortor vitae purus faucibus 
    //         ornare suspendisse sed. Mi quis hendrerit dolor magna.`,

    //         `Volutpat ac tincidunt vitae semper quis lectus nulla at. Leo urna molestie at elementum. 
    //         Ipsum consequat nisl vel pretium lectus quam id leo in. Sed elementum tempus egestas sed sed risus pretium quam. 
    //         Sed vulputate odio ut enim blandit volutpat. Sit amet consectetur adipiscing elit duis tristique sollicitudin. 
    //         Molestie at elementum eu facilisis sed odio morbi quis commodo. Amet risus nullam eget felis eget nunc lobortis. 
    //         Curabitur vitae nunc sed velit dignissim sodales. Porta nibh venenatis cras sed. Volutpat diam ut venenatis 
    //         tellus in metus vulputate. Nulla aliquet porttitor lacus luctus accumsan. Aliquam malesuada bibendum arcu vitae elementum.`,

    //         `A diam maecenas sed enim ut sem viverra aliquet. Iaculis urna id volutpat lacus laoreet. 
    //         Lectus quam id leo in. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Sagittis id consectetur 
    //         purus ut faucibus pulvinar elementum. Integer vitae justo eget magna fermentum iaculis. Consequat ac felis donec et.
    //         Eu facilisis sed odio morbi. Quis vel eros donec ac odio. Facilisis sed odio morbi quis commodo odio aenean sed. 
    //         Eget nunc scelerisque viverra mauris in aliquam. Turpis tincidunt id aliquet risus feugiat in ante metus. 
    //         Condimentum mattis pellentesque id nibh tortor id. Aliquam eleifend mi in nulla posuere sollicitudin. 
    //         Gravida quis blandit turpis cursus. Lacinia quis vel eros donec ac odio tempor orci. Vitae justo eget magna 
    //         fermentum iaculis eu. Pellentesque habitant morbi tristique senectus. Mauris rhoncus aenean vel elit scelerisque 
    //         mauris pellentesque pulvinar. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus.`,
    //     ],

    //     images: [],
    // },
    // {
    //     id: 6,
    //     heading: 'Заголовок шестой',
    //     description: 'Шестая статья блога о чем-то интересном и музыкальном',
    //     mainImage: '/img/blogArticleImg.jpeg',

    //     text: [
    //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    //         labore et dolore magna aliqua. Laoreet sit amet cursus sit. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. 
    //         Nulla porttitor massa id neque. Erat nam at lectus urna duis convallis convallis tellus. 
    //         Quis imperdiet massa tincidunt nunc pulvinar sapien. Molestie ac feugiat sed lectus vestibulum mattis. 
    //         Integer quis auctor elit sed vulputate mi sit. Sit amet consectetur adipiscing elit. Ipsum dolor sit amet 
    //         consectetur adipiscing elit. Aenean pharetra magna ac placerat. Potenti nullam ac tortor vitae purus faucibus 
    //         ornare suspendisse sed. Mi quis hendrerit dolor magna.`,

    //         `Volutpat ac tincidunt vitae semper quis lectus nulla at. Leo urna molestie at elementum. 
    //         Ipsum consequat nisl vel pretium lectus quam id leo in. Sed elementum tempus egestas sed sed risus pretium quam. 
    //         Sed vulputate odio ut enim blandit volutpat. Sit amet consectetur adipiscing elit duis tristique sollicitudin. 
    //         Molestie at elementum eu facilisis sed odio morbi quis commodo. Amet risus nullam eget felis eget nunc lobortis. 
    //         Curabitur vitae nunc sed velit dignissim sodales. Porta nibh venenatis cras sed. Volutpat diam ut venenatis 
    //         tellus in metus vulputate. Nulla aliquet porttitor lacus luctus accumsan. Aliquam malesuada bibendum arcu vitae elementum.`,

    //         `A diam maecenas sed enim ut sem viverra aliquet. Iaculis urna id volutpat lacus laoreet. 
    //         Lectus quam id leo in. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Sagittis id consectetur 
    //         purus ut faucibus pulvinar elementum. Integer vitae justo eget magna fermentum iaculis. Consequat ac felis donec et.
    //         Eu facilisis sed odio morbi. Quis vel eros donec ac odio. Facilisis sed odio morbi quis commodo odio aenean sed. 
    //         Eget nunc scelerisque viverra mauris in aliquam. Turpis tincidunt id aliquet risus feugiat in ante metus. 
    //         Condimentum mattis pellentesque id nibh tortor id. Aliquam eleifend mi in nulla posuere sollicitudin. 
    //         Gravida quis blandit turpis cursus. Lacinia quis vel eros donec ac odio tempor orci. Vitae justo eget magna 
    //         fermentum iaculis eu. Pellentesque habitant morbi tristique senectus. Mauris rhoncus aenean vel elit scelerisque 
    //         mauris pellentesque pulvinar. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus.`,
    //     ],

    //     images: [],
    // },
];

export default blogArticleData;