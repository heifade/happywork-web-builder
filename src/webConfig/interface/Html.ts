export interface Html {
  /** 构建生成的文件名 */
  filename: string;
  /** 模板文件 */
  template: string;
  /** 标题 */
  title: string;
  /** 引入的chunk 数组 */
  chunks?: string[];
}
