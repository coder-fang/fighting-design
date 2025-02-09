import type { PropType, ExtractPropTypes } from 'vue'
import type { HandleMouse } from '../../_interface'

export const Props = {
  /** 是否展示预览框 */
  visible: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 图片集合 */
  imgList: {
    type: Array as PropType<string[]>,
    default: (): string[] => []
  },
  /** 是否点击遮罩层关闭预览窗 */
  modalClose: {
    type: Boolean,
    default: (): boolean => true
  },
  /** 是否展示关闭按钮 */
  isCloseBtn: {
    type: Boolean,
    default: (): boolean => true
  },
  /** 图片预览展示的首张图的索引，从 0 开始 */
  showIndex: {
    type: Number,
    default: (): number => 0,
    validator: (val: number): boolean => {
      return val >= 0
    }
  },
  /**
   * 图片预览展示的 z-index
   *
   * @see z-index https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
   */
  zIndex: {
    type: Number,
    default: (): null => null
  },
  /** 是否展示图片预览下面的操作栏 */
  isOption: {
    type: Boolean,
    default: (): boolean => true
  },
  /** 预览图的圆角，传入一个单位 */
  round: {
    type: String,
    default: (): null => null
  },
  /** 关闭之后的回调 */
  onClose: {
    type: Function as PropType<HandleMouse>,
    default: (): null => null
  }
} as const

export type ImagePreviewProps = ExtractPropTypes<typeof Props>
