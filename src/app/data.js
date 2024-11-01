import * as allImagesModel1 from '@@/assets/image/model/veronika'
import * as allImagesModel2 from '@@/assets/image/model/nastya'
import * as allImagesModel3 from '@@/assets/image/model/angelina'
import * as allImagesModel4 from '@@/assets/image/model/anastasia'
import * as allImagesModel6 from '@@/assets/image/model/vadim'
import * as allImagesModel5 from '@@/assets/image/model/elia'



const data = [
    {   
        id: 'model1',
        url: 'veronika',
        title: 'Veronika',
        description: '',
        images: Object.values(allImagesModel1),
        meta: {
            title: 'Индивидуальная портретная съемка в студии – Дарья Меркулова, Москва и Тула',
            description: 'Индивидуальная студийная портретная съемка от фотографа Дарьи Меркуловой в Москве и Туле. Уникальные образы и внимание к деталям для создания выразительных и атмосферных портретов. Запись по телефону: +7 915 789-90-78.'
        }
    },
    {
        id: 'model2',
        url: 'nastya',
        title: 'Nastya',
        description: '',
        images: Object.values(allImagesModel2),
        meta: {
            title: 'Художественная портретная съемка на природе – Дарья Меркулова, Москва и Тула',
            description: 'Художественная портретная съемка на природе от фотографа Дарьи Меркуловой в Москве и Туле. Естественная красота и уникальные образы в гармонии с природой. Запись по телефону: +7 915 789-90-78.'
        }
    },
    {
        id: 'model3',
        url: 'angelina',
        title: 'Angelina',
        description: '',
        images: Object.values(allImagesModel3),
        meta: {
            title: 'Модельная фэшн-съемка – Дарья Меркулова, Москва и Тула',
            description: 'Профессиональная фэшн-съемка с моделями от фотографа Дарьи Меркуловой в Москве и Туле. Стильные образы и творческий подход к каждой фотосессии. Запись по телефону: +7 915 789-90-78.'
        }
    },
    {   
        id: 'model4',
        url: 'anastasia',
        title: 'Anastasia',
        description: '',
        images: Object.values(allImagesModel4),
        meta: {
            title: 'Студийная съемка с моделью – Дарья Меркулова, Москва и Тула',
            description: 'Профессиональная студийная съемка с моделью от фотографа Дарьи Меркуловой в Москве и Туле. Индивидуальный подход и креативные образы для каждой фотосессии. Запись по телефону: +7 915 789-90-78.'
        }
    },
    {   
        id: 'model5',
        url: 'elia-artem',
        title: 'Elia',
        description: '',
        images: Object.values(allImagesModel5),
        meta: {
            title: "Романтическая лав-стори съемка в студии – Дарья Меркулова, Москва и Тула",
            description: 'Уникальная лав-стори съемка в студии от фотографа Дарьи Меркуловой в Москве и Туле. Создание нежных и трогательных образов для пар в романтической атмосфере. Запись по телефону: +7 915 789-90-78.'
        }
    },
    {   
        id: 'model6',
        url: 'vadim',
        title: 'Vadim',
        description: '',
        images: Object.values(allImagesModel6),
        meta: {
            title: 'Портретная мужская съемка – Дарья Меркулова, Москва и Тула',
            description: 'Профессиональная портретная мужская съемка от фотографа Дарьи Меркуловой в Москве и Туле. Уникальные образы, отражающие индивидуальность и стиль, в каждой фотосессии. Запись по телефону: +7 915 789-90-78.'
        }
    },
    
];

export default data;