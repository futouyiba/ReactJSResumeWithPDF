/* eslint max-len: "off" */

/* eslint max-len: "off" */

const projects = {
  title: 'Project Experience',
  icon: 'archive',
  description: null,
  list: [
    {
      title: 'Xiu Gou Nightclub',
      subtitle: 'A social game with a nightclub & dance floor theme',
      tags: [
        'Metaverse',
        'Cloud Disco',
      ],
      description: [
        '<Xiu Gou Nightclub> is themed around nightclubs. In the main interface, players can change outfits, dance, interact, and chat on the dance floor, as well as compete to become the DJ and enjoy controlling the whole club.',
        'The project was successfully launched twice (on iOS & Android market, all channels) and promoted, but the promotion results showed too many young users, and the LTV and user acquisition costs couldn\'t break even. The shell has now been renamed to \'Insomnia\'. (Why launched twice? The first launch revealed hidden risks through internal channels, and the project was subsequently restructured.)',
      ],
    },
    {
      title: 'Cloud-native Game Project',
      subtitle: 'Confidential',
      tags: [
        'New Technology',
        'Innovative Product',
      ],
      description: [
        'Cloud-native games are games whose experiences rely on cloud gaming connection modes.',
        'The project involves deep thinking, providing experiences that neither mobile nor PC can offer, and deeply integrating cloud gaming scheduling technology.',
      ],
    },
    {
      title: 'Le is Dungeon',
      subtitle: 'A true mobile-friendly Platformer game',
      tags: [
        'Commercial Game',
        'Innovative Track',
      ],
      description: [
        'Le is Dungeon may be the first truly mobile-friendly Platformer game. It has simplified controls and a mature monetization system.',
        'Platformer games have long been popular on consoles and Steam, but similar products on mobile often have overly complex controls or poor monetization.',
        'To compress development time while iterating on core gameplay, the project management is quite complex. ',
        'Song Fu is responsible for the business strategy, team management, project management, part of the game design, part of the code development, as well as the direction of the plot and art for this project. The project team has 32 members, with a budget of 10-15 million.',
      ],
    },
    {
      title: '"Fanxing" Solution',
      subtitle: 'Community Co-built Online Gaming Platform',
      tags: [
        'Indie Games',
        'Commercial Platform',
        'Solutions',
        'Community Economy',
      ],
      description: [
        'Fanxing is a next-generation online gaming solution, leveraging cryptography and open consensus algorithm technologies to allow gamers to participate in the deployment, maintenance, and anti-cheating of independent online games, making it as easy for developers to create online games as it is to develop standalone games. The platform forms a decentralized community co-built online gaming ecosystem. The main problem it solves is gamers fearing developers shutting down online gaming services, and developers being overwhelmed by deployment and maintenance; this leads to fewer independent online games compared to standalone games.',
        'Fanxing relies on its proprietary "Yang" patent technology. The "Yang" patent technology has been made public and mainly supports frame-synchronized games. The first-generation synchronization rate reached 2 frames per second, and the second-generation under development achieves 10 frames per second.',
        'Fanxing is a highly community-oriented ecosystem, with players and community supporters deploying and maintaining game backend services, as well as anti-cheating and content creation. In return, they receive community points as rewards. The community no longer has to worry about game developers shutting down servers and can enjoy gaming with peace of mind. Player nodes automatically run advertising modules, and advertisers can purchase points from community contributors to arrange ad placements.',
        'Fanxing has entered into a strategic partnership with IndieGameNet. Helping indie developers develop online games more easily and efficiently is a long-standing pain point in the IndieGameNet community, with strong demand.',
        'There are two demo games, "Destined Stone" and "Renaissance," both available for download on GitHub. "Destined Stone" is based on the rules of Go, using web technologies, and is relatively simple; "Renaissance" is a multiplayer TCG game, made with Unity, and is described below.',
        'Song Fu is responsible for team management, project management, patent technology design, product design, demo game development, and external affairs for this project. The project was suspended due to funding issues.',
      ],
    },
    {
      title: '"Renaissance"',
      subtitle: 'Team Battle TCG (Trading Card Game)',
      tags: [
        'Card Game',
        'Online Game',
        'Real-time Strategy Game',
        'MOBA+TCG',
        'Developed from Scratch',
      ],
      description: [
        'Renaissance is a 3v3 strategy trading card game.',
        'Compared to card games like Hearthstone, Renaissance has a different social mode. It features multiplayer team battles, allowing allies to support each other and giving players a strong sense of group belonging. Additionally, players can trade cards to build their dream decks.',
        'Renaissance runs on the Fanxing platform, showcasing the rich gaming experiences and high efficiency of real-time battles that Fanxing can provide.',
        'Thanks to the high efficiency and low cost of the "Yang" patent technology, Renaissance can simultaneously run 7k+ games on a single sidechain on the Fanxing platform.',
        'Renaissance\'s development was completed by Song Fu alone, using Unity, WebSocket, DoTween, and Playmaker. He wrote the battle attributes, buffs, skills, and animation queues in C#, using MVC and the strategy pattern in code design.',
        'The art for Renaissance was done by other team members, drawing inspiration from world-famous paintings and giving them innovative new interpretations, resulting in a certain artistic value.',
        'As a demo game, Renaissance can be downloaded on GitHub (releases only) free of charge.',
      ],
    },
    {
      title: 'Spring Commander',
      subtitle: 'A Tactical Formation Game with Team Play',
      tags: [
        'MOBA + Auto Chess',
        'Distributed Server',
        'Unreal Engine',
        'Developed from Scratch'
      ],
      description: [
        'Spring Commander is a team-based tactical formation game.',
        'The social mode of Spring Commander is similar to MOBA, where teammates can collaboratively build their ideal formations in real-time. By working together to fight against enemies, players gain a stronger sense of belonging and team honor, while also reducing the pressure of competition.',
        'The formation gameplay of Spring Commander is inspired by the "Battle of the Three Kingdoms" Warcraft map. The core gameplay is to set up formations and watch heroes automatically battle each round. Similar to the later "Auto Chess", but without a shared card pool or combo buffs, and with the addition of team play.',
        'Spring Commander is developed using Unreal Engine and features a distributed server architecture. Modules such as animation state machines, Gameplay Ability systems, RPC, Dedicated Server, GC FSM state machines, etc., are developed using C++ and Blueprints.',
        'Song Fu was responsible for team management, game design, and some code writing for this project. The game was not released due to licensing issues.',
      ],
    },
    {
      title: 'Marvel: Contest of Champions',
      subtitle: 'Card + 3D Fighting Mobile Game',
      tags: [
        'Card Game',
        'Action Game',
        'Overseas Market',
        'Developed from Scratch',
        'Online Maintenance',
      ],
      description: [
        'Marvel: Contest of Champions is a game where players collect and train Marvel heroes, and control them in combat.',
        'The core gameplay is fighting, innovatively using tap, hold, and swipe controls for combat, with a rock-paper-scissors relationship between moves.',
        'The game system is similar to other card games, featuring upgrading, breakthrough, equipment, talents, and other progression elements. It has distinctive features in its guild dungeon and guild war systems.',
        'The game mainly relies on guild dungeons and guild war systems for retention, and high-star heroes and equipment for monetization, focusing on mid-R paying players.',
        'The game is primarily targeted at the European and American markets, with total revenue exceeding $500 million. It has been sold to another company.',
        'Song Fu served as the main game designer in the project, responsible for the system design, numerical system, and monetization design.',
      ],
    },
    {
      title: 'Heroes of Camelot',
      subtitle: 'First Japanese-style Card Game for the Western Market',
      tags: [
        'Card Game',
        'Online Maintenance',
        'Game Numerical System',
        'Game System',
      ],
      description: [
        'Heroes of Camelot found success by bringing Japanese-style card games to the Western market. The gameplay is similar to "Million Arthur", with some innovations added.',
        'Song Fu briefly served as the main game designer on the project when the game was already launched, mainly responsible for the guild war system and numerical system.',
      ],
    },
    {
      title: 'Mad Max: Fury Road',
      subtitle: 'Innovative Attempt to Bring "Heroes" into SLG Games',
      tags: [
        'SLG',
        'Gameplay Innovation',
        'Global Market',
        'Game Numerical System',
        'Developed from Scratch',
      ],
      description: [
        'In Mad Max: Fury Road, we tried to "make Warcraft within an SLG" by introducing a complex hero progression system into the SLG game. This attempt was later proven effective by games like "Lords Mobile" two years later.',
        'Song Fu briefly served as a game tuning designer on the project. Due to the termination of IP collaboration, the project was canceled.',
      ],
    },
    {
      title: 'Order & Chaos Series',
      subtitle: 'First Full 3D Mobile MMO Game',
      tags: [
        'MMO',
        'Game Numerical System',
        'Online Operation',
        'Developed from Scratch',
        'Game System',
      ],
      description: [
        'The first full 3D MMO game on mobile, Order & Chaos is a flagship game for Gameloft China. The series has generated over $30 million in revenue.',
        'As a game tuning designer, I participated in the update and maintenance of the first product and the development of the second product from scratch. I mainly researched the mathematical models related to game balance and economic systems, and provided numerical assistance to multiple projects while working on this one.',
        'In Order & Chaos 2, Song Fu built a deeper numerical system from scratch, adding random attributes, spell criticals, and armor penetration for balance. In terms of growth lines, he rebuilt the growth curve based on historical data from mobile players.',
        'In Order & Chaos 2, Song Fu advocated for simplifying the controls, reducing the number of skill buttons from 12 to 4, and adding more variety through weapon skills and skill runes combinations.',
      ],
    },

  ],
};

export default projects;
