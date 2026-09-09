// ===== 学生数据 =====
// 为团队页面提供在培学生列表
// ─── Student data — separate from core team to minimize disruption ───

export type StudentType = 'phd' | 'academic-master' | 'professional-master';

export interface StudentMember {
  slug: string;
  name: string;           // "中文名 / PINYIN"
  nameZh: string;         // 中文名
  type: StudentType;
  enrollmentYear: string; // e.g. "2022"
}

// --- Type config for each student group ---
export const studentTypeConfig: Record<StudentType, { labelEn: string; labelZh: string; accent: string }> = {
  'phd':                { labelEn: 'Ph.D. Students',            labelZh: '博士研究生',       accent: '#b0aea5' },
  'academic-master':    { labelEn: 'M.Phil. Students', labelZh: '学术型硕士研究生', accent: '#9a9a9a' },
  'professional-master':{ labelEn: 'M.Med. Students', labelZh: '专业型硕士研究生', accent: '#8a8a8a' },
};

export const students: StudentMember[] = [
  // ─── Ph.D. Students ───,
  { slug: 'wang-leyu',    name: '王乐禹 / WANG Leyu',    nameZh: '王乐禹',  type: 'phd', enrollmentYear: '2022' },
  { slug: 'li-qianyi',    name: '李千一 / LI Qianyi',   nameZh: '李千一',  type: 'phd', enrollmentYear: '2025' },
  { slug: 'chen-zixuan',  name: '陈子璇 / CHEN Zixuan',  nameZh: '陈子璇',  type: 'phd', enrollmentYear: '2025' },
  { slug: 'zhou-xiaoyue', name: '周晓月 / ZHOU Xiaoyue', nameZh: '周晓月',  type: 'phd', enrollmentYear: '2023' },
  { slug: 'chai-ke',      name: '柴珂（致远荣誉计划) / CHAI Ke (Zhiyuan Honors Program)',        nameZh: '柴珂',   type: 'phd', enrollmentYear: '2024' },
  { slug: 'kong-deao',    name: '孔德澳 / KONG Deao',   nameZh: '孔德澳',  type: 'phd', enrollmentYear: '2024' },
  { slug: 'wu-xiaoang',   name: '吴骁昂 / WU Xiaoang',   nameZh: '吴骁昂',  type: 'phd', enrollmentYear: '2024' },
  { slug: 'zhang-han',    name: '张晗 / ZHANG Han',     nameZh: '张晗',   type: 'phd', enrollmentYear: '2025' },
  { slug: 'zhao-yiheng',    name: '赵屹珩 / ZHAO Yiheng',     nameZh: '赵屹珩',   type: 'phd', enrollmentYear: '2026' },
  { slug: 'zhou-xinyue',    name: '周欣悦（致远荣誉计划) / ZHOU Xinyue (Zhiyuan Honors Program)',     nameZh: '周欣悦',   type: 'phd', enrollmentYear: '2026' },
  { slug: 'zheng-zifei',    name: '郑紫飞（海南专项） / ZHENG Zifei (Hainan Special Program)',     nameZh: '郑紫飞',   type: 'phd', enrollmentYear: '2026' },


  // ─── Academic Master's Students ───
  { slug: 'xu-kaiyi',    name: '徐恺忆 / XU Kaiyi',  nameZh: '徐恺忆', type: 'academic-master', enrollmentYear: '2024' },
  { slug: 'li-lixuan',   name: '李黎萱 / LI Lixuan', nameZh: '李黎萱', type: 'academic-master', enrollmentYear: '2025' },
  { slug: 'li-xue',      name: '李雪 / LI Xue',      nameZh: '李雪',   type: 'academic-master', enrollmentYear: '2025' },
  { slug: 'shan-yujie',  name: '单宇杰 / SHAN Yujie', nameZh: '单宇杰', type: 'academic-master', enrollmentYear: '2024' },
  { slug: 'ding-yinuo',  name: '丁一诺 / DING Yinuo', nameZh: '丁一诺', type: 'academic-master', enrollmentYear: '2025' },

  // ─── Professional Master's Students ───
  { slug: 'yang-weiqi',   name: '杨惟琪 / YANG Weiqi',   nameZh: '杨惟琪', type: 'professional-master', enrollmentYear: '2024' },
  { slug: 'he-yixin',     name: '何怡心 / HE Yixin',     nameZh: '何怡心', type: 'professional-master', enrollmentYear: '2025' },
];
