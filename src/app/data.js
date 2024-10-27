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
        images: Object.values(allImagesModel1)
    },
    {
        id: 'model2',
        url: 'nastya',
        title: 'Nastya',
        description: 'Description for Model 2 with key features and specifications.',
        images: Object.values(allImagesModel2)
    },
    {
        id: 'model3',
        url: 'angelina',
        title: 'Angelina',
        description: 'Description for Model 3 with key features and specifications.',
        images: Object.values(allImagesModel3)
    },
    {   
        id: 'model4',
        url: 'anastasia',
        title: 'Anastasia',
        description: 'Description for Model 1 with key features and specifications.',
        images: Object.values(allImagesModel4)
    },
    {   
        id: 'model5',
        url: 'vadim',
        title: 'Vadim',
        description: 'Description for Model 1 with key features and specifications.',
        images: Object.values(allImagesModel5)
    },
    {   
        id: 'model6',
        url: 'elia-artem',
        title: 'Elia',
        description: 'Description for Model 1 with key features and specifications.',
        images: Object.values(allImagesModel6)
    },
    
];

export default data;