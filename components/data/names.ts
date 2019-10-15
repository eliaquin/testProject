const names = `Mason Bice  
Kasi Dann  
Tyra Sward  
Otha Rothwell  
Lesa Quill  
Frederick Sisco  
Precious Balsamo  
Myrta Shirah  
Hettie Hembree  
Irmgard Pinnock  
Suzanna Boomer  
Estell Cuff  
Ernestine Ashurst  
Pandora Nowicki  
Emory Hecht  
Carline Brandon  
Ayanna Stotts  
Trudi Samms  
Gilma Pagan  
Elroy Learn  
Lacey Plant  
Ivette Cobler  
Ileen Seville  
Claudia Pompei  
Chanda Liebel  
Ross Gennaro  
Micki Embree  
Wenona Cary  
Alona Laplaca  
Donna Marple  
Elwood Wierenga  
Vicente Parke  
Jacob Nogueira  
Mitsuko Abron  
Maegan Wise  
Vannessa Trumbauer  
Candance Ackles  
Sylvia Rainey  
Lecia Vanhorn  
Arthur Tripodi  
Rachell Brescia  
Maida Simard  
Darius Horton  
Marna Bertrand  
Loura Derrick  
Delaine Windsor  
Roxane Faircloth  
Jenell Zielinski  
Ricardo Shupp  
Catarina Googe`;

export interface NameListType {
    key: string,
    name: string
}

let id = 1;

export const nameList: Array<NameListType> = names.split('\n').map(name => ({ key: id++ + '', name: name.trim() }));