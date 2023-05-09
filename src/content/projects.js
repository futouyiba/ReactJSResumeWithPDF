/* eslint max-len: "off" */

const projects = {
  title: '项目经验',
  icon: 'archive',
  description: null,
  list: [
    {
      title: '《修勾夜店》',
      subtitle: '以舞池为题材的社交游戏',
      tags: [
        '元宇宙',
        '云蹦迪',
      ],
      description: [
        '《修勾夜店》以夜店为主题，首页中，玩家可以在舞池里换装、跳舞、行为交互、聊天，也可以',
        '项目成功上线两次（iOS & Android市场全渠道）并进行推广，但推广结果是小孩用户太多，LTV和买量成本无法打平。目前壳已经更名为《不眠》。',
      ],
    },
    {
      title: '《云原生游戏项目》',
      subtitle: '出于保护公司商业博弈的考虑，暂时保密',
      tags: [
        '新技术',
        '创新赛道',
      ],
      description: [
        '云原生游戏是指其体验必须依赖云游戏的连接模式才能成立的游戏。',
        '项目经过深度的思考，带来手机和PC都无法带来的体验，并且深度结合云游戏的调度技术。',
      ],
    },
    {
      title: '《勒是地下城》',
      subtitle: '真正适合手机的Platformer游戏',
      tags: [
        '商业游戏',
        '创新赛道',
      ],
      description: [
        '《勒是地下城》可能是首款真正适合手游市场的Platformer游戏。有简化的操作、成熟的商业化体系。',
        'Platformer游戏长久以来在主机、Steam上深受欢迎；但手机上的同类产品往往操作异常复杂，或者商业化较差。',
        '为压缩开发时间的同时充分进行核心玩法迭代，项目的项目管理较为复杂。当前开发了1日游戏内容，尚未未接入付费系统。',
        '宋甫负责此项目的商业策略、团队管理、项目管理、部分游戏设计、部分代码开发，以及剧情、美术方向的制定。项目组32人，预算1000-1500万。',
      ],
    },
    {
      title: '“繁星”解决方案',
      subtitle: '社区共建网络游戏平台',
      tags: [
        '独立游戏',
        '商业平台',
        '解决方案',
        '社区经济',
      ],
      description: [
        '“繁星”是下一代网络游戏解决方案，它运用密码学、开放式共识算法技术，让游戏玩家能够参与到独立网络游戏的部署、维护、反作弊之中，让开发者轻装上阵，像开发单机游戏一样简单地制作网络游戏，形成社区共建网络游戏的去中心化平台。主要解决的问题是：玩家怕开发者关闭网游服务，而开发者不胜部署、运维之烦；导致独立网络游戏明显少于独立单机游戏。',
        '“繁星”依托于自研的“鞅”专利技术。“鞅”专利技术已经公开，主要支持帧同步的游戏，第一代同步速率达到了1秒2帧，正在研发中的第二代为1秒10帧。',
        '“繁星”是一个高度社区化的生态系统，由玩家、社区支持者来部署、维护游戏后端服务，以及反作弊、内容创作，并以此贡献获得社区的积分回馈。社区由此不再担心游戏开发者关停服务器，可以更放心地进行游戏。玩家节点自动运行广告模块，广告商可购买社区贡献者手中的积分，并以此安排相关广告的播放。',
        '“繁星”和独游网达成了战略合作。帮助独立开发者轻装上阵、省时省力地开发联机游戏，这个需求在独游网社区当中是长期存在的痛点，需求强烈。',
        '有两款示例游戏《Destined Stone》&&《Renaissance》，均可在Github下载。其中Destined Stone取材于围棋规则，使用web技术，比较简单；Renaissance是一个多人TCG游戏，使用Unity制作，见下文介绍。',
        '宋甫负责此项目的团队管理、项目管理、专利技术设计、产品设计、示例游戏开发，以及对外事项。项目资金遇到问题，团队决定中止项目。',
      ],
    },
    {
      title: '《Renaissance》',
      subtitle: '组队对战的TCG（集换式卡牌）游戏',
      tags: [
        '卡牌游戏',
        '联网游戏',
        '实时策略游戏',
        'MOBA+TCG',
        '从零开发',
      ],
      description: [
        '《Renaissance》是一个3对3进行策略游戏的集换式卡牌游戏。',
        '相比炉石等卡牌游戏，《Renaissance》的社交模式不同。它实现了多人组队对战，盟友可互相支援，充分给予玩家团体归属感；并且玩家可交换卡牌，来组建梦想的卡组。',
        '《Renaissance》在“繁星”平台上运行，用以展现“繁星”平台可实现的丰富乐趣，以及实时对战的高效率。',
        '借助“鞅”专利技术的高效率、低成本，《Renaissance》在“繁星”平台上单条侧链可同时运行7k+局游戏。',
        '《Renaissance》开发部分为宋甫单人完成，使用了Unity/websocket/DoTween/Playmaker，使用C#编写了战斗属性/buff/技能/动画队列，代码设计上采用了MVC&策略模式。',
        '《Renaissance》美术部分为团队其他成员完成，主要取材于世界名画，并创新地赋予它们新的解读，具有一定的艺术性。',
        '作为示例游戏，《Renaissance》在github上可下载（仅可下载，未开源），无任何收费。',
      ],
    },
    {
      title: '《泉水指挥官》',
      subtitle: '能”组队“的布阵策略游戏',
      tags: [
        'MOBA+”自走棋“',
        '分布式服务器',
        'Unreal虚幻引擎',
        '从零开发'
      ],
      description: [
        '《泉水指挥官》是一个组队对战的布阵策略游戏。',
        '《泉水指挥官》社交模式类似MOBA，队友间可实时共同构建理想的阵型。通过团队协作共同对抗外敌，玩家得到更强的归属感、团队荣誉感，同时也降低了对战的压力。',
        '《泉水指挥官》的布阵玩法灵感来源于”战三国“魔兽地图，核心玩法是布阵，并在每一回合观看英雄们的自动战斗。类似后来的”自走棋“，但没有共享卡池、连携buff，多了组队。',
        '《泉水指挥官》使用Unreal制作，并使用了分布式服务器制作。使用cpp+蓝图编写了动画状态机/Gameplay ability系统/RPC/Dedicated Server/GC FSM状态机等模块。',
        '宋甫负责此项目的团队管理、游戏设计、部分代码编写。此游戏由于版号原因未发行。',
      ],
    },
    {
      title: '《漫威：超级争霸战》',
      subtitle: '卡牌+3D格斗手机游戏',
      tags: [
        '卡牌游戏',
        '动作游戏',
        '海外市场',
        '从零开发',
        '线上维护',
      ],
      description: [
        '《Marvel：Contest of Champions》是一个收集、培养漫威英雄，并操控他们进行格斗的游戏。',
        '游戏核心玩法是格斗，创新地使用点+长按+滑屏的方式进行战斗，并存在操作的克制关系。',
        '游戏系统与其他卡牌游戏类似，有升级、突破、装备、天赋等养成线。在公会副本、公会战系统方面独具特色。',
        '该游戏主要以公会副本、公会战系统拉动留存，以高星英雄、装备拉动付费，付费方面较为偏重中R玩家。',
        '游戏主要面向欧美市场，累计收入超5亿美元，目前已出售给其他公司。',
        '宋甫在项目中担任主策划，主要负责项目的系统设计、数值体系、付费设计。',
      ],
    },
    {
      title: '《Heroes of Camelot》',
      subtitle: '（《亚瑟英雄传》）首款面向欧美的日式卡牌游戏',
      tags: [
        '卡牌游戏',
        '线上维护',
        '游戏数值',
        '游戏系统',
      ],
      description: [
        '《Heroes of Camelot》借助将日式卡牌游戏带到欧美获得成功，游戏玩法比较类似《百万亚瑟王》，在此基础上做了玩法创新。',
        '宋甫在项目中短暂担任主策划，彼时游戏已经上线。主要负责项目的公会战系统、数值体系。',
      ],
    },
    {
      title: '《Mad Max：Fury Road》',
      subtitle: '尝试将”英雄“带入SLG游戏的创新尝试',
      tags: [
        'SLG游戏',
        '玩法创新',
        '海外市场',
        '游戏数值',
        '从零开发',
      ],
      description: [
        '在《Mad Max：Fury Road》中，我们尝试“做SLG中的魔兽争霸”，将复杂的英雄成长线引入到SLG游戏之中。而这一尝试也在两年后被《Lords Mobile》等游戏证明有效。',
        '宋甫在项目中短暂担任数值策划。由于IP合作终止，项目取消。'
      ],
    },
    {
      title: '《混沌与秩序》系列',
      subtitle: '首款手机全3D MMO游戏',
      tags: [
        'MMO游戏',
        '游戏数值',
        '线上运营',
        '从零开发',
        '游戏系统',
      ],
      description: [
        '手机上首款全3d MMO游戏，Gameloft中国的支柱游戏。系列收入超3000万美元。',
        '我作为数值策划参与了第一款产品的更新维护，与第二款产品的从零开发。主要研究游戏战斗平衡、经济系统相关数学模型；负责本项目同时，对多个项目的数值提供协助。',
        '在《混沌与秩序2》中，宋甫从零搭建了更有玩法深度的数值体系，平衡方面加入了随机属性、法术暴击、穿甲等；成长线方面，从手机玩家的历史数据出发，重建了成长曲线。',
        '在《混沌与秩序2》中，宋甫力主将操作简化，将12个技能按钮缩减为4个，并通过武器技能、技能符文的搭配，赋予了更多的变化性。',
      ],
    },
  ],
};

export default projects;
