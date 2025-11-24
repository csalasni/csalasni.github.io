import { CardProps } from 'components/card'

export const ProjectList: CardProps[] = [
  {
    title: 'PKMN Trainer Card',
    description: 'Project for making Pokémon Trainer Cards of your favorite Pokémon and export as PNG',
    techs: [
      {
        key: 'react-1',
        url: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
      },
      {
        key: 'semantic-ui-1',
        url: 'https://img.shields.io/badge/Semantic%20UI%20-%2300766F.svg?style=for-the-badge&logo=SemanticUIReact&logoColor=white'
      }
    ],
    image: '/pkmn.png',
    github: 'https://github.com/salascarlosni/trainercard',
    demo: 'https://salascarlos.com/trainercard/',
  },
  {
    title: 'Griteria Nicaragua',
    description:
      'Application that lets users listen, and read the lyrics of the songs dedicated to Virgen María that are made in Nicaragua.',
    techs: [
      {
        key: 'Flutter-1',
        url: 'https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white',
      },
      {
        key: 'SqlLite-1',
        url: 'https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white'
      }
    ],
    image: '/griteria.png',
    github: 'https://github.com/salascarlosni/Griteria-Nicaragua-Flutter',
    demo: undefined,
  },
  {
    title: 'Variedades Mejia',
    description: 'Management System made for the SME Variedades Mejía which helps keep tracking of their customers, inventory, and sales.',
    techs: [
      {
        key: 'CSharp-3',
        url: 'https://img.shields.io/badge/Csharp-95478E?style=for-the-badge&logo=c-sharp&logoColor=white',
      },
      {
        key: 'SqlServer-3',
        url: 'https://img.shields.io/badge/%20SQL%20Server-2583C9?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white'
      }
    ],
    image: '/mejia.png',
    github: 'https://github.com/tuturulab/VariedadesMejia',
    demo: undefined,
  },
  {
    title: 'ERP System',
    description: 'ERP SaaS solution that helps users to manage day-to-day business activities such as accounting, sells, analytics, etc.',
    image: '/erp.png',
    techs: [
      {
        key: 'C#-5',
        url: 'https://img.shields.io/badge/Csharp-95478E?style=for-the-badge&logo=c-sharp&logoColor=white',
      },
      {
        key: 'React-5',
        url: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'
      }
    ],
    github: 'https://github.com/tuturulab/erpc-sys-backend.git',
    demo: undefined,
  },
  {
    title: 'Judivi',
    description: 'Web Solution that brings users different features to research about the several laws of the Political Constitution of Nicaragua.',
    techs: [
      {
        key: 'C#-6',
        url: 'https://img.shields.io/badge/Csharp-95478E?style=for-the-badge&logo=c-sharp&logoColor=white',
      },
      {
        key: 'SqlServer6',
        url: 'https://img.shields.io/badge/%20SQL%20Server-2583C9?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white'
      }
    ],
    image: '/judivi.png',
    demo: undefined,
  },
]
