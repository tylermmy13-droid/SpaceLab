// ===== 团队成员数据 =====
// 为团队页面提供结构化成员信息，包含个人资料、论文列表和荣誉奖项

export type TeamLevel = 1 | 2 | 3 | 4 | 5;

export interface TeamMember {
  slug: string;
  name: string;
  nameZh: string;
  role: string;
  roleZh: string;
  level: TeamLevel;
  img: string;
  desc: string;
  descZh: string;
  email: string;
  publications: Array<{
    title: string;
    authors: string;
    venue: string;
    img: string;
    links: Array<{ label: string; url: string }>;
    roles?: Array<'first' | 'cofirst' | 'corresponding'>;
  }>;
  honors: string[];
  honorsZh: string[];
}

export const team: TeamMember[] = [
  // ════════════════════════════════════════════
  // Level 1 — Senior Faculty / PI
  // ════════════════════════════════════════════
  {
    slug: 'zhang-li',
    name: '张力 / ZHANG Li',
    nameZh: '张力',
    role: 'Vice President, Xinhua Hospital\n\nDirector of Cardiology\n\nDistinguished Professor and Chief Physician\n\nDoctoral Supervisor',
    roleZh: '上海交通大学医学院附属新华医院副院长\n\n心内科学科带头人\n\n上海交通大学特聘教授、主任医师\n\n博士生导师',
    level: 1,
    img: '/assets/team/zhangli.png',
    desc: 'Professor Li Zhang, M.D., Ph.D., is Vice President of Xinhua Hospital Affiliated to Shanghai Jiao Tong University School of Medicine, Director of the Department of Cardiology, Director of the National Clinical Key Specialty (Cardiology), Deputy Director of the Institute of Cardiovascular Development and Regenerative Medicine, Distinguished Professor of Shanghai Jiao Tong University School of Medicine, Chief Physician, and Doctoral Supervisor.\n\nHe is a recipient of the National Science Fund for Distinguished Young Scholars and serves as Chief Scientist of the National Key Research and Development Program of China. He is also a Committee Member of the Chinese Society of Cardiology, Chinese Medical Association, Deputy Head of its Coronary Artery Disease Group, and Standing Committee Member of the Cardiovascular Physicians Branch of the Chinese Medical Doctor Association.\n\nProfessor Zhang\'s research focuses on the basic and translational science of cardiovascular diseases, with particular clinical expertise in coronary intervention and transcatheter treatment of valvular heart disease.\n\nAs corresponding or first author, he has published more than 70 SCI-indexed papers in leading journals, including Cell Stem Cell, Circulation, and Circulation Research. He holds two Chinese invention patents and has led nine major research grants, including Key Projects of the National Natural Science Foundation of China and international cooperative programs, as well as a National Key R&D Program project on Stem Cell Research and Organ Repair.\n\nAs the first recipient, Professor Zhang has received two Second Prizes of the Chinese Medical Science and Technology Award, one Second Prize of the Ministry of Education Science and Technology Progress Award, and one Third Prize of the Huaxia Medical Science and Technology Award. His individual honors include the TreeShan Young Physician Award, the Shanghai Craftsman Award, the Shanghai Medical Craftsman Award, and the State Council Special Government Allowance.',
    descZh: '张力，上海交通大学医学院附属新华医院副院长、心内科学科带头人、国家临床重点专科（心血管内科）负责人、心血管发育与再生医学研究所副所长，上海交通大学特聘教授、主任医师、博士生导师。国家杰出青年科学基金获得者、国家重点研发计划首席科学家。兼任中华医学会心血管病分会委员/冠心病学组副组长、中国医师协会心血管医师分会常务委员。长期致力于心血管疾病基础与临床转化研究，临床主攻方向为冠状动脉介入诊治及心脏瓣膜病的介入治疗。以通讯/第一作者在包括Cell Stem Cell、Circulation、Circulation Research等期刊上发表SCI收录论文70余篇。授权国家发明专利2项。先后主持国自然基金重点、重点国合项目共9项；主持国家重点研发计划"干细胞研究与器官修复"重点专项；以第一完成人获中华医学科技奖二等奖2项、教育部科技进步二等奖和华夏医学科技三等奖各1项，个人荣获树兰医学青年奖、上海工匠、上海"医务工匠"。享受国务院特殊津贴。',
    email: 'li.zhang@shsmu.edu.cn',
    publications: [
      {
        title: 'Nrf3-Mediated Mitochondrial Superoxide Promotes Cardiomyocyte Apoptosis and Impairs Cardiac Functions by Suppressing Pitx2',
        authors: 'CHEN Qishan, Ancheng Zheng, Xiaolei Xu, Zhenning Shi, YANG Mei, Shasha Sun, Leyu Wang, Yumeng Wang, Haige Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'Circulation (2025)',
        img: '/assets/cards/nrf3-cover.png',
        links: [{ label: 'Circulation', url: 'https://doi.org/10.1161/CIRCULATIONAHA.124.070286' }],
        roles: ['corresponding'],
      },
      {
        title: 'Chronic Kidney Disease Is Associated with Increased Risk of Sudden Cardiac Death',
        authors: 'LI Yalan, Ruchao Jiang, Chenxi Ouyang, Jie Wang, Qingwei Yu, Jingjing Cai, ZHANG Li, Yao Lu',
        venue: 'Nature Communications (2025)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Nature Communications', url: 'https://doi.org/10.1038/s41467-025-64254-9' }],
        roles: ['corresponding'],
      },
      {
        title: 'Inhibition of Fap Promotes Cardiac Repair by Stabilizing BNP',
        authors: 'SUN Yuxi, Mengqiu Ma, Dandan Cao, Ancheng Zheng, Yiying Zhang, Yang Su, Jianfang Wang, Yanhua Xu, Mi Zhou, Yansong Tang, Yifan Liu, Teng Ma, Aoyuan Fan, Xiaoying Zhang, Qiaoling Zhu, Jiachen Qin, Chunyang Mo, Yawei Xu, ZHANG Li, Dachun Xu, Rui Yue',
        venue: 'Circulation Research (2023)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Circulation Research', url: 'https://doi.org/10.1161/CIRCRESAHA.122.320933' }],
        roles: ['corresponding'],
      },
      {
        title: 'Nonbone Marrow CD34+ Cells Are Crucial for Endothelial Repair of Injured Artery',
        authors: 'JIANG Liujun, CHEN Ting, SUN Shasha, WANG Ruilin, DENG Jiacheng, LYU Lingxia, WU Hong, YANG Mei, PU Xiangyuan, DU Luping, CHEN Qishan, HU Yanhua, HU Xiaosheng, ZHOU Yijiang, XU Qingbo, ZHANG Li',
        venue: 'Circulation Research (2021)',
        img: '/assets/cards/publication-blue.png',
        links: [{ label: 'Circulation Research', url: 'https://doi.org/10.1161/CIRCRESAHA.121.319494' }],
        roles: ['corresponding'],
      },
      {
        title: 'CD34+ PI16+ Fibroblast Progenitors Aggravate Neointimal Lesions of Allograft Arteries via CCL11/CCR3-PI3K/AKT Pathway',
        authors: 'XU Xiaodong, ZHU Pengwei, WANG Han, CHEN Kai, LIU Liang, DU Luping, JIANG Liujun, HU Yanhua, ZHOU Xuhao, ZHANG Bohuan, PU Xiangyuan, HU Xiaosheng, XU Qingbo, ZHANG Li, LI Weidong',
        venue: 'Theranostics (2025)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Theranostics', url: 'https://doi.org/10.7150/thno.104153' }],
        roles: ['corresponding'],
      },
      {
        title: 'Novel Roles of Nrf3-Trim5 Axis in Vascular Smooth Muscle Cell Dysfunctions and Neointimal Hyperplasia',
        authors: 'CHEN Qishan, SUN Shasha, SHI Zhenning, WANG Leyu, WANG Yumeng, ZHENG Ancheng, XU Xiaolei, YANG Mei, SUN Kun, XIAO Qingzhong, ZHANG Li',
        venue: 'Cardiovascular Research (2025)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Cardiovascular Research', url: 'https://doi.org/10.1093/cvr/cvaf084' }],
        roles: ['corresponding'],
      },
      {
        title: 'Causal Role for Neutrophil Elastase in Thoracic Aortic Dissection in Mice',
        authors: 'YANG Mei, Xinmiao Zhou, Stuart W. A. Pearce, Zhisheng Yang, CHEN Qishan, Kaiyuan Niu, Chenxin Liu, Jun Luo, Dan Li, Yue Shao, Cheng Zhang, Dan Chen, Qingchen Wu, Pedro R. Cutillas, Lin Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'ATVB (2023)',
        img: '/assets/cards/ATVB-cover.png',
        links: [{ label: 'ATVB', url: 'https://doi.org/10.1161/ATVBAHA.123.319281' }],
        roles: ['corresponding'],
      },
    ],
    honors: [
      'Recipient of the National Science Fund for Distinguished Young Scholars',
      'Chief Scientist of the National Key Research and Development Program of China',
      'Committee Member, Chinese Society of Cardiology, Chinese Medical Association',
      'Deputy Head, Coronary Artery Disease Group, Chinese Society of Cardiology',
      'Standing Committee Member, Cardiovascular Physicians Branch, Chinese Medical Doctor Association',
      'Second Prize of the Chinese Medical Science and Technology Award (First Recipient, twice)',
      'Second Prize of the Ministry of Education Science and Technology Progress Award (First Recipient)',
      'Third Prize of the Huaxia Medical Science and Technology Award (First Recipient)',
      'TreeShan Young Physician Award',
      'Shanghai Craftsman',
      'Shanghai Medical Craftsman',
      'Recipient of the State Council Special Government Allowance',
    ],
    honorsZh: [
      '国家杰出青年科学基金获得者',
      '国家重点研发计划首席科学家',
      '中华医学会心血管病学分会委员',
      '中华医学会心血管病学分会冠心病学组副组长',
      '中国医师协会心血管医师分会常务委员',
      '中华医学科技奖二等奖2项（第一完成人）',
      '教育部科技进步二等奖（第一完成人）',
      '华夏医学科技奖三等奖（第一完成人）',
      '树兰医学青年奖',
      '上海工匠',
      '上海"医务工匠"',
      '享受国务院政府特殊津贴',
    ],
  },
  // ════════════════════════════════════════════
  // Level 2 — Senior Faculty
  // ════════════════════════════════════════════
  {
    slug: 'chen-qishan',
    name: '陈齐山 / CHEN Qishan',
    nameZh: '陈齐山',
    role: 'Deputy Director of Cardiovascular Medicine (Acting Director)\n\nAssociate Chief Physician and Associate Researcher\n\nDoctoral Supervisor',
    roleZh: '心血管内科副主任（主持工作）\n\n副主任医师、副研究员\n\n博士生导师',
    level: 2,
    img: '/assets/team/chenqishan.jpg',
    desc: 'Qishan Chen, M.D., Ph.D., is Deputy Director of the Department of Cardiovascular Medicine (presiding over daily work) at Xinhua Hospital Affiliated to Shanghai Jiao Tong University School of Medicine, Associate Chief Physician, Associate Researcher, and Doctoral Supervisor.\n\nHe is a recipient of the National High-Level Talent Special Support Program for Young Top-Notch Talents. He also serves as a Young Committee Member of the Cardiovascular Disease Branch of the Shanghai Medical Association, a Young Committee Member of the Cardiovascular Committee of the Chinese Association of Pathophysiology, and a Young Committee Member of the Cardiovascular Metabolism Alliance.\n\nHis work focuses on the clinical diagnosis and treatment of common cardiovascular diseases, critical cardiovascular illnesses, and cardiometabolic diseases, as well as related basic and translational research.\n\nHe has led three grants from the National Natural Science Foundation of China, the Shanghai Original Exploration Program, the Zhejiang Provincial Distinguished Young Scholars Program, among others, and has participated as a key member in a National Key Research and Development Program of the Ministry of Science and Technology.\n\nAs first or corresponding author, he has published more than twenty papers in international academic journals including Circulation and Hepatology. He has been selected for the Shanghai Oriental Talent Program and the Shanghai High-Level Local University Innovation Team. As a major contributor, he has received one Second Prize of the Chinese Medical Science and Technology Award, one Second Prize of the Ministry of Education Science and Technology Progress Award, and one Third Prize of the Huaxia Medical Science and Technology Award.',
    descZh: '陈齐山，上海交通大学医学院附属新华医院心血管内科副主任（主持工作），副主任医师、副研究员，博士生导师。国家高层次人才特殊支持计划"青年拔尖人才"。兼任上海医学会心血管病分会青年委员、中国病理生理学会心血管专业委员会青年委员、心血管代谢联盟青年委员等。主要从事心血管常见病、危急重症及心血管代谢疾病的临床诊治和基础转化研究。主持国家自然科学基金3项、上海市原创探索项目、浙江省杰青项目等，作为骨干参与科技部国家重点研发计划。以第一或通讯作者在Circulation、Hepatology等国际学术期刊上发表论文二十余篇。入选上海市"东方英才"、上海市高水平地方高校创新团队等。作为主要完成人获中华医学科技奖二等奖、教育部科技进步奖二等奖、华夏医学科技奖三等奖各1项。',
    email: 'lastufo@hotmail.com',
    publications: [
      {
        title: 'Nrf3-Mediated Mitochondrial Superoxide Promotes Cardiomyocyte Apoptosis and Impairs Cardiac Functions by Suppressing Pitx2',
        authors: 'CHEN Qishan, Ancheng Zheng, Xiaolei Xu, Zhenning Shi, YANG Mei, Shasha Sun, Leyu Wang, Yumeng Wang, Haige Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'Circulation (2025)',
        img: '/assets/cards/nrf3-cover.png',
        links: [{ label: 'Circulation', url: 'https://doi.org/10.1161/CIRCULATIONAHA.124.070286' }],
        roles: ['first'],
      },
      {
        title: 'Causal Role for Neutrophil Elastase in Thoracic Aortic Dissection in Mice',
        authors: 'YANG Mei, Xinmiao Zhou, Stuart W. A. Pearce, Zhisheng Yang, CHEN Qishan, Kaiyuan Niu, Chenxin Liu, Jun Luo, Dan Li, Yue Shao, Cheng Zhang, Dan Chen, Qingchen Wu, Pedro R. Cutillas, Lin Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'ATVB (2023)',
        img: '/assets/cards/ATVB-cover.png',
        links: [{ label: 'ATVB', url: 'https://doi.org/10.1161/ATVBAHA.123.319281' }],
      },
      {
        title: 'Nonbone Marrow CD34+ Cells Are Crucial for Endothelial Repair of Injured Artery',
        authors: 'JIANG Liujun, CHEN Ting, SUN Shasha, WANG Ruilin, DENG Jiacheng, LYU Lingxia, WU Hong, YANG Mei, PU Xiangyuan, DU Luping, CHEN Qishan, HU Yanhua, HU Xiaosheng, ZHOU Yijiang, XU Qingbo, ZHANG Li',
        venue: 'Circulation Research (2021)',
        img: '/assets/cards/publication-blue.png',
        links: [{ label: 'Circulation Research', url: 'https://doi.org/10.1161/CIRCRESAHA.121.319494' }],
      },
      {
        title: 'Novel Roles of Nrf3-Trim5 Axis in Vascular Smooth Muscle Cell Dysfunctions and Neointimal Hyperplasia',
        authors: 'CHEN Qishan, SUN Shasha, SHI Zhenning, WANG Leyu, WANG Yumeng, ZHENG Ancheng, XU Xiaolei, YANG Mei, SUN Kun, XIAO Qingzhong, ZHANG Li',
        venue: 'Cardiovascular Research (2025)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Cardiovascular Research', url: 'https://doi.org/10.1093/cvr/cvaf084' }],
        roles: ['first'],
      },
    ],
    honors: [
      'National High-Level Talent Special Support Program – Young Top-Notch Talent',
      'Young Committee Member, Shanghai Society of Cardiology',
      'Young Committee Member, Cardiovascular Committee, Chinese Association of Pathophysiology',
      'Young Committee Member, Cardiovascular Metabolism Alliance',
      'Shanghai Oriental Talent',
      'Member, Shanghai High-Level Local University Innovation Team',
      'Zhejiang Provincial Distinguished Young Scholars Program',
      'Second Prize of the Chinese Medical Science and Technology Award (Major Contributor)',
      'Second Prize of the Ministry of Education Science and Technology Progress Award (Major Contributor)',
      'Third Prize of the Huaxia Medical Science and Technology Award (Major Contributor)',
    ],
    honorsZh: [
      '国家高层次人才特殊支持计划"青年拔尖人才"',
      '上海医学会心血管病分会青年委员',
      '中国病理生理学会心血管专业委员会青年委员',
      '心血管代谢联盟青年委员',
      '上海市"东方英才"',
      '上海市高水平地方高校创新团队成员',
      '浙江省杰出青年科学基金获得者',
      '中华医学科技奖二等奖（主要完成人）',
      '教育部科技进步二等奖（主要完成人）',
      '华夏医学科技奖三等奖（主要完成人）',
    ],
  },

  // ════════════════════════════════════════════
  // Level 3 — 主治医师、助理研究员、高年资博士后
  // ════════════════════════════════════════════
  {
    slug: 'yang-mei',
    name: '杨眉 / YANG Mei',
    nameZh: '杨眉',
    role: 'Assistant Researcher',
    roleZh: '助理研究员',
    level: 3,
    img: '',
    desc: 'Assistant Researcher involved in basic and translational cardiovascular research.',
    descZh: '助理研究员，从事心血管医学与转化研究。',
    email: 'susannayang@126.com',
    publications: [
      {
        title: 'Nrf3-Mediated Mitochondrial Superoxide Promotes Cardiomyocyte Apoptosis and Impairs Cardiac Functions by Suppressing Pitx2',
        authors: 'CHEN Qishan, Ancheng Zheng, Xiaolei Xu, Zhenning Shi, YANG Mei, Shasha Sun, Leyu Wang, Yumeng Wang, Haige Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'Circulation (2025)',
        img: '/assets/cards/nrf3-cover.png',
        links: [{ label: 'Circulation', url: 'https://doi.org/10.1161/CIRCULATIONAHA.124.070286' }],
      },
      {
        title: 'Causal Role for Neutrophil Elastase in Thoracic Aortic Dissection in Mice',
        authors: 'YANG Mei, Xinmiao Zhou, Stuart W. A. Pearce, Zhisheng Yang, CHEN Qishan, Kaiyuan Niu, Chenxin Liu, Jun Luo, Dan Li, Yue Shao, Cheng Zhang, Dan Chen, Qingchen Wu, Pedro R. Cutillas, Lin Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'ATVB (2023)',
        img: '/assets/cards/ATVB-cover.png',
        links: [{ label: 'ATVB', url: 'https://doi.org/10.1161/ATVBAHA.123.319281' }],
        roles: ['first'],
      },
      {
        title: 'Nonbone Marrow CD34+ Cells Are Crucial for Endothelial Repair of Injured Artery',
        authors: 'JIANG Liujun, CHEN Ting, SUN Shasha, WANG Ruilin, DENG Jiacheng, LYU Lingxia, WU Hong, YANG Mei, PU Xiangyuan, DU Luping, CHEN Qishan, HU Yanhua, HU Xiaosheng, ZHOU Yijiang, XU Qingbo, ZHANG Li',
        venue: 'Circulation Research (2021)',
        img: '/assets/cards/publication-blue.png',
        links: [{ label: 'Circulation Research', url: 'https://doi.org/10.1161/CIRCRESAHA.121.319494' }],
      },
      {
        title: 'Novel Roles of Nrf3-Trim5 Axis in Vascular Smooth Muscle Cell Dysfunctions and Neointimal Hyperplasia',
        authors: 'CHEN Qishan, SUN Shasha, SHI Zhenning, WANG Leyu, WANG Yumeng, ZHENG Ancheng, XU Xiaolei, YANG Mei, SUN Kun, XIAO Qingzhong, ZHANG Li',
        venue: 'Cardiovascular Research (2025)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Cardiovascular Research', url: 'https://doi.org/10.1093/cvr/cvaf084' }],
      },
    ],
    honors: [],
    honorsZh: [],
  },
  {
    slug: 'sun-yuxi',
    name: '孙玉玺 / SUN Yuxi',
    nameZh: '孙玉玺',
    role: 'Attending Physician',
    roleZh: '主治医师',
    level: 3,
    img: '',
    desc: 'Attending Physician focusing on clinical management of cardiovascular diseases.',
    descZh: '主治医师，致力于心血管医学研究和临床工作。',
    email: '',
    publications: [
      {
        title: 'Inhibition of Fap Promotes Cardiac Repair by Stabilizing BNP',
        authors: 'SUN Yuxi, Mengqiu Ma, Dandan Cao, Ancheng Zheng, Yiying Zhang, Yang Su, Jianfang Wang, Yanhua Xu, Mi Zhou, Yansong Tang, Yifan Liu, Teng Ma, Aoyuan Fan, Xiaoying Zhang, Qiaoling Zhu, Jiachen Qin, Chunyang Mo, Yawei Xu, ZHANG Li, Dachun Xu, Rui Yue',
        venue: 'Circulation Research (2023)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Circulation Research', url: 'https://doi.org/10.1161/CIRCRESAHA.122.320933' }],
        roles: ['first'],
      },
    ],
    honors: [],
    honorsZh: [],
  },
  {
    slug: 'dai-bing',
    name: '戴兵 / DAI Bing',
    nameZh: '戴兵',
    role: 'Attending Physician',
    roleZh: '主治医师',
    level: 3,
    img: '',
    desc: 'Attending Physician specializing in cardiovascular clinical care and interventional procedures.',
    descZh: '主治医师，致力于心血管医学研究和临床工作。',
    email: '',
    publications: [],
    honors: [],
    honorsZh: [],
  },
  {
    slug: 'li-jinyan',
    name: '李金燕 / LI Jinyan',
    nameZh: '李金燕',
    role: 'Research Assistant',
    roleZh: '科研助理',
    level: 3,
    img: '',
    desc: 'Research assistant, assisting in the operation of the laboratory and participating in basic and translational cardiovascular research.',
    descZh: '科研助理，协助运营实验室，参与心血管基础与转化研究。',
    email: '',
    publications: [],
    honors: [],
    honorsZh: [],
  },

  // ════════════════════════════════════════════
  // Level 3 — 主治医师、助理研究员、博士后 (continued)
  // ════════════════════════════════════════════
  {
    slug: 'xu-xiaolei',
    name: '徐肖磊 / XU Xiaolei',
    nameZh: '徐肖磊',
    role: 'Attending Physician',
    roleZh: '主治医师',
    level: 3,
    img: '',
    desc: 'Attending Physician focusing on clinical management of cardiovascular diseases.',
    descZh: '主治医师，致力于心血管医学研究和临床工作。',
    email: '',
    publications: [
      {
        title: 'Nrf3-Mediated Mitochondrial Superoxide Promotes Cardiomyocyte Apoptosis and Impairs Cardiac Functions by Suppressing Pitx2',
        authors: 'CHEN Qishan, Ancheng Zheng, Xiaolei Xu, Zhenning Shi, YANG Mei, Shasha Sun, Leyu Wang, Yumeng Wang, Haige Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'Circulation (2025)',
        img: '/assets/cards/nrf3-cover.png',
        links: [{ label: 'Circulation', url: 'https://doi.org/10.1161/CIRCULATIONAHA.124.070286' }],
      },
      {
        title: 'Novel Roles of Nrf3-Trim5 Axis in Vascular Smooth Muscle Cell Dysfunctions and Neointimal Hyperplasia',
        authors: 'CHEN Qishan, SUN Shasha, SHI Zhenning, WANG Leyu, WANG Yumeng, ZHENG Ancheng, XU Xiaolei, YANG Mei, SUN Kun, XIAO Qingzhong, ZHANG Li',
        venue: 'Cardiovascular Research (2025)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Cardiovascular Research', url: 'https://doi.org/10.1093/cvr/cvaf084' }],
      },
    ],
    honors: [],
    honorsZh: [],
  },
  {
    slug: 'shi-zhenning',
    name: '石镇宁 / SHI Zhenning',
    nameZh: '石镇宁',
    role: 'Attending Physician',
    roleZh: '主治医师',
    level: 3,
    img: '',
    desc: 'Attending Physician focusing on clinical management of cardiovascular diseases.',
    descZh: '主治医师，致力于心血管医学研究和临床工作。',
    email: '',
    publications: [
      {
        title: 'Nrf3-Mediated Mitochondrial Superoxide Promotes Cardiomyocyte Apoptosis and Impairs Cardiac Functions by Suppressing Pitx2',
        authors: 'CHEN Qishan, Ancheng Zheng, Xiaolei Xu, Zhenning Shi, YANG Mei, Shasha Sun, Leyu Wang, Yumeng Wang, Haige Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'Circulation (2025)',
        img: '/assets/cards/nrf3-cover.png',
        links: [{ label: 'Circulation', url: 'https://doi.org/10.1161/CIRCULATIONAHA.124.070286' }],
      },
      {
        title: 'Novel Roles of Nrf3-Trim5 Axis in Vascular Smooth Muscle Cell Dysfunctions and Neointimal Hyperplasia',
        authors: 'CHEN Qishan, SUN Shasha, SHI Zhenning, WANG Leyu, WANG Yumeng, ZHENG Ancheng, XU Xiaolei, YANG Mei, SUN Kun, XIAO Qingzhong, ZHANG Li',
        venue: 'Cardiovascular Research (2025)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Cardiovascular Research', url: 'https://doi.org/10.1093/cvr/cvaf084' }],
      },
    ],
    honors: [],
    honorsZh: [],
  },
  {
    slug: 'zhang-run',
    name: '章润 / ZHANG Run',
    nameZh: '章润',
    role: 'Postdoctoral Fellow',
    roleZh: '博士后',
    level: 3,
    img: '',
    desc: 'Postdoctoral Fellow focusing on clinical management of cardiovascular diseases.',
    descZh: '博士后，致力于心血管医学研究和临床工作。',
    email: '',
    publications: [],
    honors: [],
    honorsZh: [],
   },

  // ════════════════════════════════════════════
  // Level 4 — 住院医师
  // ════════════════════════════════════════════
  {
    slug: 'sun-shasha',
    name: '孙厦厦 / SUN Shasha',
    nameZh: '孙厦厦',
    role: 'Resident Physician',
    roleZh: '住院医师',
    level: 4,
    img: '',
    desc: 'Resident Physician engaged in clinical cardiology training and research.',
    descZh: '住院医师，致力于心血管医学研究和临床工作。',
    email: '',
    publications: [
      {
        title: 'Nrf3-Mediated Mitochondrial Superoxide Promotes Cardiomyocyte Apoptosis and Impairs Cardiac Functions by Suppressing Pitx2',
        authors: 'CHEN Qishan, Ancheng Zheng, Xiaolei Xu, Zhenning Shi, YANG Mei, Shasha Sun, Leyu Wang, Yumeng Wang, Haige Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'Circulation (2025)',
        img: '/assets/cards/nrf3-cover.png',
        links: [{ label: 'Circulation', url: 'https://doi.org/10.1161/CIRCULATIONAHA.124.070286' }],
      },
      {
        title: 'Nonbone Marrow CD34+ Cells Are Crucial for Endothelial Repair of Injured Artery',
        authors: 'JIANG Liujun, CHEN Ting, SUN Shasha, WANG Ruilin, DENG Jiacheng, LYU Lingxia, WU Hong, YANG Mei, PU Xiangyuan, DU Luping, CHEN Qishan, HU Yanhua, HU Xiaosheng, ZHOU Yijiang, XU Qingbo, ZHANG Li',
        venue: 'Circulation Research (2021)',
        img: '/assets/cards/publication-blue.png',
        links: [{ label: 'Circulation Research', url: 'https://doi.org/10.1161/CIRCRESAHA.121.319494' }],
      },
      {
        title: 'Novel Roles of Nrf3-Trim5 Axis in Vascular Smooth Muscle Cell Dysfunctions and Neointimal Hyperplasia',
        authors: 'CHEN Qishan, SUN Shasha, SHI Zhenning, WANG Leyu, WANG Yumeng, ZHENG Ancheng, XU Xiaolei, YANG Mei, SUN Kun, XIAO Qingzhong, ZHANG Li',
        venue: 'Cardiovascular Research (2025)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Cardiovascular Research', url: 'https://doi.org/10.1093/cvr/cvaf084' }],
      },
    ],
    honors: [],
    honorsZh: [],
  },
  {
    slug: 'zheng-ancheng',
    name: '郑安成 / ZHENG Ancheng',
    nameZh: '郑安成',
    role: 'Resident Physician',
    roleZh: '住院医师',
    level: 4,
    img: '',
    desc: 'Resident Physician engaged in clinical cardiology training and research.',
    descZh: '住院医师，致力于心血管医学研究和临床工作。',
    email: '',
    publications: [
      {
        title: 'Nrf3-Mediated Mitochondrial Superoxide Promotes Cardiomyocyte Apoptosis and Impairs Cardiac Functions by Suppressing Pitx2',
        authors: 'CHEN Qishan, Ancheng Zheng, Xiaolei Xu, Zhenning Shi, YANG Mei, Shasha Sun, Leyu Wang, Yumeng Wang, Haige Zhao, Qingzhong Xiao, ZHANG Li',
        venue: 'Circulation (2025)',
        img: '/assets/cards/nrf3-cover.png',
        links: [{ label: 'Circulation', url: 'https://doi.org/10.1161/CIRCULATIONAHA.124.070286' }],
      },
      {
        title: 'Inhibition of Fap Promotes Cardiac Repair by Stabilizing BNP',
        authors: 'SUN Yuxi, Mengqiu Ma, Dandan Cao, Ancheng Zheng, Yiying Zhang, Yang Su, Jianfang Wang, Yanhua Xu, Mi Zhou, Yansong Tang, Yifan Liu, Teng Ma, Aoyuan Fan, Xiaoying Zhang, Qiaoling Zhu, Jiachen Qin, Chunyang Mo, Yawei Xu, ZHANG Li, Dachun Xu, Rui Yue',
        venue: 'Circulation Research (2023)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Circulation Research', url: 'https://doi.org/10.1161/CIRCRESAHA.122.320933' }],
      },
      {
        title: 'Novel Roles of Nrf3-Trim5 Axis in Vascular Smooth Muscle Cell Dysfunctions and Neointimal Hyperplasia',
        authors: 'CHEN Qishan, SUN Shasha, SHI Zhenning, WANG Leyu, WANG Yumeng, ZHENG Ancheng, XU Xiaolei, YANG Mei, SUN Kun, XIAO Qingzhong, ZHANG Li',
        venue: 'Cardiovascular Research (2025)',
        img: '/assets/cards/publication-sky.png',
        links: [{ label: 'Cardiovascular Research', url: 'https://doi.org/10.1093/cvr/cvaf084' }],
      },
    ],
    honors: [],
    honorsZh: [],
  },
  {
    slug: 'zhou-meng',
    name: '周萌 / ZHOU Meng',
    nameZh: '周萌',
    role: 'Resident Physician',
    roleZh: '住院医师',
    level: 4,
    img: '',
    desc: 'Resident Physician engaged in clinical cardiology training and research.',
    descZh: '住院医师，致力于心血管医学研究和临床工作。',
    email: '',
    publications: [],
    honors: [],
    honorsZh: [],
  },
];
