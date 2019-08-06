export default {
  setting: { // annot_0.txt 全局参数
    clade_separation: 0.5,
    branch_thickness: 1.5,
    branch_bracket_depth: 0.8,
    branch_bracket_width: 0.25,
    clade_marker_size: 40,
    clade_marker_edge_color: '#555555',
    clade_marker_edge_width: 1.2
  },
  tree: { // 根据 annot_1.txt  annot_2.txt guide.txt 生成
    annotation: '', // 名称
    annotation_background_color: '', // 背景颜色
    clade_marker_shape: '', // 点形状
    clade_marker_size: '', // 点大小
    clade_marker_color: '', // 点颜色
    branchset: [
      {
        annotation: '', // 名称
        annotation_background_color: '', // 背景颜色
        clade_marker_shape: '', // 形状
        clade_marker_size: '', // 大小
        clade_marker_color: '', // 颜色
        branchset: []
      },
      {  }
    ]
  },
  ring: [ // 树图外围环 annot_3.txt
    { // 第一圈
      ring_width: 0.5,
      ring_height: 0.75,
      ring_internal_separator_thickness: 1,
      data: [ // 每圈的数据数组
        {
          name: 'xxx',
          value: 10
        }
      ]
    },
    { // 第二圈

    }
  ]
};
