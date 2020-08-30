const uuid = require('uuid/v4')

const folders = [
  {
    id: uuid(),
    name: 'Folder One'
  },
  {
    id: uuid(),
    name: 'Folder Two'
  },
  {
    id: uuid(),
    name: 'Folder Three'
  },
]

const notes = [
  {
    id: uuid(),
    name: 'Dogs',
    content: 'Placeat in rerum suscipit ab nemo necessitatibus repellendus. Expedita vero quas natus ut sit illum. Blanditiis repellendus non ea.\n \rIn magni enim velit aliquid quia sunt veniam architecto et. Architecto harum laboriosam alias sunt quas officia ullam voluptates nihil. Sapiente exercitationem omnis tempora.\n \rEligendi laborum quia sunt commodi. Necessitatibus impedit possimus veritatis fugiat earum voluptatem aut. Quia alias cum ratione aliquid beatae suscipit architecto at. Pariatur autem laborum qui quos voluptatem'
  },
  {
    id: uuid(),
    name: 'Cats',
    content: 'Quisquam quo explicabo officiis et repellendus voluptatem ullam et sed. Nesciunt illo ea est sint et repellendus voluptatibus odio. Expedita eius aut. Quis sit aut error aut occaecati sed cum. Voluptatem porro veniam quo consequuntur. Deleniti dolorum dolorum eligendi est id itaque ut laboriosam eos.\n \rAut excepturi quia molestiae error. Et non excepturi quia culpa minus. Fugit et doloremque. Sed perferendis accusantium.\n \rRepellendus libero debitis laudantium velit exercitationem nihil quasi. Debitis sint ratione id cupiditate beatae necessitatibus beatae. Veniam tenetur delectus eligendi dolorum voluptatem pariatur. Alias labore debitis amet architecto aperiam voluptas maxime soluta. Qui exercitationem deleniti ipsa.'
  },
  {
    id: uuid(),
    name: 'Tigers',
    content: 'Debitis sed aperiam. Veritatis qui error quos culpa ipsam minus quis nemo et. Ut aut aut amet reprehenderit et repudiandae temporibus aspernatur. Deleniti culpa doloribus omnis nam est eligendi officia repellendus.\n \rIpsa laborum tenetur. Quidem adipisci illum fugiat cupiditate. Dolores aut qui sed tenetur.\n \rQuia occaecati perferendis. Est quis sunt illum. Quia fugit est est itaque aut maxime.'
  },
]

module.exports = { folders, notes }