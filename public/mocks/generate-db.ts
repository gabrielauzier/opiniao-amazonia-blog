import { PostModel } from '@/domain/models'
import { faker } from '@faker-js/faker'
import fs from 'fs'

function titleCase(input: string) {
  const sentence = input.toLowerCase().split(' ')
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
  }
  return sentence.join(' ')
}

function randomInt(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateRandomAuthor() {
  const items = [
    'Gabriel Auzier',
    'Luiz Olavo',
    'Lucas Almeida',
    'Rafael Bittencourt',
    'Fabio Farias',
  ]
  const index = randomInt(0, items.length - 1)
  return items[index]
}

function generateRandomCategory() {
  const items = [
    'Política',
    'Negócios',
    'Administração',
    'Economia',
    'Sociedade',
    'Cultura',
    'Publicidade',
    'Manaus',
  ]
  const index = randomInt(0, items.length - 1)
  return items[index]
}

function generateRandomCategoriesList() {
  const array = Array.from({ length: randomInt(2, 4) }, () =>
    generateRandomCategory(),
  )
  return [...new Set(array)]
}

function getRandomImgUrl() {
  const items = [
    'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg',
    'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/5721097/pexels-photo-5721097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/7903925/pexels-photo-7903925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/13809881/pexels-photo-13809881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1708988/pexels-photo-1708988.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/2009968/pexels-photo-2009968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3732667/pexels-photo-3732667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/16733847/pexels-photo-16733847/free-photo-of-adulto-cachos-caracois-encaracolado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/35825/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3351448/pexels-photo-3351448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1582493/pexels-photo-1582493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3858997/pexels-photo-3858997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2599136/pexels-photo-2599136.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/7019570/pexels-photo-7019570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1191548/pexels-photo-1191548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ]
  const index = randomInt(0, items.length)
  return items[index]
}

function generateRandomPost(): PostModel {
  const slug = faker.lorem.slug()
  return {
    id: faker.string.uuid(),
    slug,
    title: titleCase(faker.lorem.words({ min: 15, max: 20 })),
    author: generateRandomAuthor(),
    categories: generateRandomCategoriesList(),
    date: faker.date.anytime().toISOString(),
    excerpt: faker.lorem.paragraph(),
    imgUrl: getRandomImgUrl(),
  }
}

function generateDB() {
  const db = {
    posts: faker.helpers.multiple(generateRandomPost, { count: 10 }),
  }
  const jsonData = JSON.stringify(db, null, 2)

  fs.writeFile('./public/mocks/db.json', jsonData, (err) => {
    if (err) {
      console.error('Erro ao criar o arquivo JSON:', err)
    } else {
      console.log('Arquivo JSON criado com sucesso: db.json')
    }
  })
}

generateDB()
